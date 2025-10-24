import Contact from '../projects/contactPage/Contact'
import AboutClient from './AboutClient'
import Clientts from './Clientts'
import FaqSection from './faq/Faq-section'
import Skills from './Skills'
import TeamSection from './Team'
import TopHero from './TopHero'
import Main from './whatwedo/Main'

const About = () => {
  return (
    <div className="w-full">
      {/* components */}
      <TopHero />
      <Skills />
      <AboutClient />
      <Main />
      <Clientts />
      <TeamSection />
      <Contact />
      <FaqSection />
      {/* <Hero />
      <Funfacts />  
      <WhatWeDo /> */}
    </div>
  )
}

export default About
