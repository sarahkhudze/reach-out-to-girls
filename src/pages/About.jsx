import CTAAbout from "../components/about/CTAAbout"
import Mission from "../components/about/Mission"
import PreCTAAbout from "../components/about/PreCTAAbout"
import Vision from "../components/Vision"
import GallerySwipe from "../components/home/GallerySwipe"

const About = () => {
  return(  
 
    <div>
      <PreCTAAbout />
      <Vision/>
      <CTAAbout />
      <Mission />
      <GallerySwipe />
    </div>
  )
}

export default About
