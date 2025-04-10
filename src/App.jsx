import React from 'react'
import {Navbar} from './components/Navbar'
import {Hero} from './components/Hero'
import {Tech} from './components/Tech'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'
import { EducationSection } from './components/EducationSection'
import { Experience } from './components/Experience'
import { Toaster } from 'react-hot-toast'
import { Footer } from './components/Footer'

const App = () => {
  return  <>
<div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>


    <main className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
      <Navbar/>
      <Hero/>
      <Tech/>
      <Experience/>
      <Projects/>
      <EducationSection/>
      <Contact/>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer/>
    </main>
    </>

}

export default App