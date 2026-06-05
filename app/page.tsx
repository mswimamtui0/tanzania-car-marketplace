import Stats from "@/components/home/Stats";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import SearchBar from "@/components/search/SearchBar";
import FeaturedCars from "@/components/cards/FeaturedCars";


import ElectricCars from "@/components/home/ElectricCars";
import TopBrands from "@/components/home/TopBrands";
import BodyTypes from "@/components/home/BodyTypes";
import Newsletter from "@/components/home/Newsletter";



export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar />

      <FeaturedCars />

      <ElectricCars />

      <BodyTypes />

      <TopBrands />

      <Newsletter />
      <Hero />

<Stats />

<SearchBar />

     
    </>
  );
}