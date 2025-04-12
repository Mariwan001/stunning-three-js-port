import Hero from "./sections/Hero"
import Navbar from "./components/Navbar"
import ShowcaseSection from "./sections/ShowcaseSection"
import LogoScetion from "./components/LogoScetion"
import FeatureCard from "./sections/FeatureCard"
import Experience from "./sections/Experience"
import TechStackSection from "./sections/TechStackSection"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoScetion />
    <FeatureCard />
    <Experience />
    <TechStackSection />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App
