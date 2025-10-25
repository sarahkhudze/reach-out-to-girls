import CTAHome from "../components/home/CTAHome";
import Hero from "../components/home/Hero";
// import BFooterHome from "../components/home/BFooterHome";
import Partners from "../components/about/Partners";

const Home = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <CTAHome />
      <Hero />
      {/* <BFooterHome /> */}
      <Partners />
    </div>
  );
};

export default Home;
