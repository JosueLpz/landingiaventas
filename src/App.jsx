import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Benefits from "./components/Benefits"
import Testimonials from "./components/Testimonials"
import PricingSection from "./components/PricingSection"
import SocialProof from "./components/SocialProof"
import { motion } from 'framer-motion'

function App() {
  return (
    <motion.div 
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Benefits />
      <SocialProof />
      <Testimonials />
      <PricingSection />
    </motion.div>
  )
}

export default App