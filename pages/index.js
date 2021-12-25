import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
export default function Home() {
  return (
    <div className="w-full  overflow-hidden flex flex-col items-center">
      <Head>
        <meta name="keywords" content='web developer, web development, full stack web developer
                                        software engineer, potfolio'/>
        <meta name="discription" content='full stack web developer portfolio'/>
        <title>M.F.N | Portfolio</title>
      </Head>
        <Navbar />
        <Landing />
        <About/>
        <Projects />
        <Contact />
        <Footer /> 
        
    </div>
  )
}
