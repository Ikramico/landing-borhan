import Head from 'next/head'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import TrainingForm from '../../components/TrainingForm'
import WhatYoullLearn from '../../components/WhatYoullLearn'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Digital Marketing with AI‑2026 | Learn Media BD</title>
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