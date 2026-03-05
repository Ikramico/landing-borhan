import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import TrainingForm from '../components/TrainingForm'
import WhatYoullLearn from '../components/WhatYoullLearn'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Master Cold Email & Land High-Paying Clients</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white font-sans">
        <Navbar />
        <HeroSection />
        <TrainingForm />
        <WhatYoullLearn />
        <Footer />
      </div>
    </>
  )
}