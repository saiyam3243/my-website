import { Inter } from "next/font/google";
import Typewriter from "@/components/home/Typewriter";
import Header from "@/components/home/Header";
const inter = Inter({ subsets: ["latin"] });
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Footer from "@/components/home/Footer";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Home1() {

  // const { ref } = useParallax<HTMLDivElement>({ speed: -100 });
  // const AOS = require('aos');
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <main
      className={`min-h-screen bg-black p-12 text-white overflow-x-hidden overflow-y-hidden cursor-none ${inter.className}`}
    >
      <Header />
      <ParallaxBanner
        layers={[
          {
            image: 'sj-logo.png', speed: 40, translateY: [0, 50],
            opacity: [0.8, 0.3],
            scale: [0.2, 0.85, 'easeInOutBack'],
            shouldAlwaysCompleteAnimation: true,
          },
          // { image: "signature.png", speed: 30 },
          // { image: "sj-logo.png", speed: 10 },
          {
            speed: -55,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <div className=" inset-0 bg-gradient-to-t from-gray-900 to-blue-900" /> */}
                {/* <h1 className="text-4xl">I am a&nbsp;</h1> */}
                <Typewriter toType={["Welcome to Saiyam Jain", "Software Developer", "Frontend Developer", "Student", "Cricketer", "Teacher"]} />
                {/* <video autoPlay loop muted className="object-cover w-full h-full">
                      <source src="/temp.mp4" type="video/mp4" />
                    </video> */}
              </div>
            ),
          },
        ]}
        className="aspect-[2/1] mb-40"
      />


      <Parallax
        //  translateX={['-800px', '0px']}
        scale={[0.75, 1.1]}
        // rotate={[180, 360]}
        speed={-40}
        easing={'easeOut'}
      >
        <div className="flex-col justify-center text-8xl m-10 mb-100 space-y-6">
            <h1 data-aos="fade-up" data-aos-duration="500">Ambitious guy with a genuine passion for Software Development.</h1>
            <h1 data-aos="fade-up"  data-aos-duration="600">I believe in Quality, Pace and Hardwork.</h1>
            <h1 data-aos="fade-up"  data-aos-duration="700">Frontend-Backend-Devops Development</h1>

            {/* <img src="/sj-logo.png" alt="logo" width={800} height={500} /> */}
        </div>
      </Parallax>
      {/* temp */}
      {/* <div className="flex justify-center mb-60">
        <Parallax translateY={[-10, 0]}>
            <h1 className=" flex justify-center text-8xl">S</h1>
        </Parallax>
        <Parallax translateY={[200, 0]}>
            <h1 className=" flex justify-center text-8xl">S</h1>
        </Parallax>
        <Parallax translateY={[-300, 0]}>
            <h1 className=" flex justify-center text-8xl">S</h1>
        </Parallax> 
        <Parallax translateY={[400, 100]}>
            <h1 className=" flex justify-center text-8xl">S</h1>
        </Parallax>
      </div>
      <div className="flex justify-center mb-60">
        <Parallax translateY={[-10, 0]}>
            <h1 className=" flex justify-center text-8xl">S</h1>
        </Parallax>
        <Parallax translateY={[200, 0]}>
            <h1 className=" flex justify-center text-8xl">S</h1>
        </Parallax>
        <Parallax translateY={[-300, 0]}>
            <h1 className=" flex justify-center text-8xl">S</h1>
        </Parallax> 
        <Parallax translateY={[400, 100]}>
            <h1 className=" flex justify-center text-8xl">S</h1>
        </Parallax>
      </div> */}

      <div className="flex justify-center">
        <div className="w-32 h-32 bg-red-500 perspective-800"></div>
        <div className={`h-10 w-10 bg-blue-500 text-white flex justify-center items-center rounded`}>
          {"skill"}
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
    </div>
      <Footer />
    </main>
  );
}
