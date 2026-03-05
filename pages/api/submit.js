import { google } from 'googleapis'

/**
 * Google Sheets Submit API
 *
 * Required .env.local vars:
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL
 *   GOOGLE_PRIVATE_KEY
 *   GOOGLE_SHEET_ID
 *
 * Sheet headers (Row 1): Timestamp | Name | Email | Phone
 * Share the sheet with your service account email (Editor)
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, phone } = req.body
  if (!name || !email) return res.status(400).json({ error: 'Name and email required' })

  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, name, email, phone || '']],
      },
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Sheets error:', error)
    return res.status(500).json({ error: 'Failed to save' })
  }
}