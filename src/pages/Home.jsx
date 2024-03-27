import GallerySwipe from "../components/home/GallerySwipe"
import BFooterHome from "../components/home/BFooterHome"
import CTAHome from "../components/home/CTAHome"
// import VdHome from "../components/home/VdHome"

const Home = () => {
  return (
    <>
     <CTAHome />
      {/* <VdHome /> */}
      <GallerySwipe/>
      <BFooterHome />
    </>
  )
}

export default Home
