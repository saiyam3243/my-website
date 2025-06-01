import { Inter } from "next/font/google";
import Header from "@/components/home/Header";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/home/Footer";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import About from "@/components/home/About";
import Works from "@/components/home/WorkExp";
import LandingPage from "@/components/home/Landing";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <main
      className={`flex flex-col justify-between bg-[#191919] p-8 text-white overflow-x-hidden overflow-y-hidden cursor-none ${inter.className}`}
    >
      <Header />
      <LandingPage />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}