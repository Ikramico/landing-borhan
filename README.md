# Landing Page with Google Sheets Integration

A Next.js + Tailwind CSS landing page that auto-submits form data to Google Sheets.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Google Sheets Setup (5 minutes)

### Step 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new sheet
2. Add these headers in **Row 1**:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Timestamp | First Name | Last Name | Email | Phone | Company | Message |

3. Copy the **Sheet ID** from the URL:
   `https://docs.google.com/spreadsheets/d/**YOUR_SHEET_ID**/edit`

### Step 2 — Create a Service Account

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (or select existing)
3. Enable the **Google Sheets API**: APIs & Services → Enable APIs → search "Google Sheets API"
4. Go to **IAM & Admin → Service Accounts → Create Service Account**
5. Give it any name, click Create
6. Click the service account → **Keys tab → Add Key → JSON**
7. Download the JSON file — keep it safe!

### Step 3 — Share Your Sheet

1. Open your Google Sheet
2. Click **Share**
3. Enter the `client_email` from your JSON file
4. Set role to **Editor**
5. Click Send

### Step 4 — Add Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Fill in the values from your downloaded JSON file:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_sheet_id
```

> ⚠️ For `GOOGLE_PRIVATE_KEY`: copy the entire `private_key` value from the JSON file, including the `\n` characters. Wrap it in double quotes.

### Step 5 — Run & Test

```bash
npm run dev
```

Fill out the form → check your Google Sheet for the new row! 🎉

---

## Deployment (Vercel)

```bash
npm install -g vercel
vercel
```

Add the 3 environment variables in your Vercel project settings under **Settings → Environment Variables**.

---

## Project Structure

```
├── pages/
│   ├── index.js          # Landing page UI
│   ├── _app.js           # App wrapper
│   └── api/
│       └── submit.js     # Google Sheets API handler
├── styles/
│   └── globals.css       # Tailwind + custom styles
├── .env.local.example    # Environment variable template
├── tailwind.config.js
└── next.config.js
```
