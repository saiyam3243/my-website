import { Inter } from "next/font/google";
import Header from "@/components/home/Header";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/home/Footer";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import About from "@/components/home/About";
import Works from "@/components/home/WorkExp";
import RotateStyle from "@/components/home/RotateStyle";
import LandingPage from "@/components/home/Landing";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";
export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main
      className={`min-h-screen bg-black p-12 text-white overflow-x-hidden overflow-y-hidden cursor-none ${inter.className}`}
    >
      <div className="scroll-bar">
      <div className="scroll-state scrollState"></div>
    </div>
      <Header />
      <LandingPage />
      <RotateStyle />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />

      {/* Work Exp */}
      {/* <div className="mt-20 flex justify-between ml-20 mr-20">
        <Parallax speed={50} translateY={[20, -50]} scale={[1, 0.8]}>
          <div className="grid grid-cols-1 gap-y-80">
            {workExpOne.map((item, index) => {
              return <Card key={index} title={item[0]} position={item[1]} location={item[2]} start={item[3]} end={item[4]} content={item[5]} />
            })}
          </div>
        </Parallax>

        <div className="flex-col justify-center font-extrabold">
          <Parallax speed={-10} translateY={[0, 50]}>
            <div className="flex justify-center text-7xl text-bold text-orange-600">Work</div>
            <div className="flex justify-center text-block mt-80 text-7xl">Education </div>
            <div className="flex justify-center text-block mt-80 text-7xl text-orange-600">Projects </div>

          </Parallax>
        </div>
        <Parallax speed={40} scale={[0.9, 1.2]}>
          <div className="grid grid-cols-1 gap-y-80">
            {workExpTwo.map((item, index) => {
              return <Card key={index} title={item[0]} position={item[1]} location={item[2]} start={item[3]} end={item[4]} content={item[5]} />
            })
            }
          </div>
        </Parallax>
      </div> */}
    </main>
  );
}
