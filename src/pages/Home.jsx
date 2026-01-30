import Header from "../components/Header/Header";
// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
import HeroSlider from "../components/HeroSlider";
import Features from "../components/Features";
import BannerSection from "../components/BannerSection";
import TopCategories from "../components/TopCategories";
import NewArrivals from "../components/NewArrivals"; 
import DealOfWeek from "../components/DealOfWeek";
import NewArrivalSection from "../components/NewArrivalSection";
import DealHero from "../components/DealHero";
import MenArrivalSection from "../components/MenArrivalSection";
import LatestBlogSection from "../components/LatestBlogSection";





const Home = () => {
  return (
    <>
      <Header />
        <HeroSlider />
        <Features />
         <BannerSection />
         <TopCategories />
        <NewArrivals />
        <DealOfWeek />
        <NewArrivalSection />
        <DealHero />
        <MenArrivalSection />
        <LatestBlogSection />
         
         
       
    </>
  );
};

export default Home;
