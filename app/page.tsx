import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { PopularCarPage } from "./components/PopularCar";
import { RecomendationCar } from "./components/RecomendationCar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PopularCarPage />
      <RecomendationCar />
      <Footer />
    </main>
  );
}
