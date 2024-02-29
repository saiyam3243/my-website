import Image from "next/image";
import { Inter } from "next/font/google";
import Typewriter from "../components/home/Typewriter";
import Header from "@/components/home/Header";
const inter = Inter({ subsets: ["latin"] });
import Tilt from "react-parallax-tilt";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { useParallax } from 'react-scroll-parallax';
import Footer from "@/components/home/Footer";
import Link from "next/link";
import Card from "@/components/card/WorkCard";
import { start } from "repl";

export default function Home() {

  // const { ref } = useParallax<HTMLDivElement>({ speed: -100 });
  const parallax1 = useParallax<HTMLDivElement>({
    translateX: [0, -150],
    easing: 'easeOutQuad',
  });
  const parallax2 = useParallax<HTMLDivElement>({
    translateX: [100, 0],
    easing: 'easeOutQuad',
  });

  const workExpOne = [["La Famiglia", "Devops / Frontend Developer", "Munich, DE", "Oct 2023", "Mar 2024", " Developed and implemented tools for investor relations and tracking, contributing to the project's infrastructure, authentication, and integrations (Google Firebase, communication services). Responsible for front-end development utilizing Next.js, TypeScript, and Tailwind CSS. Project progress visible at staging.parma.software."],
  ["Extraa Insights", "Internship", "Nagpur, IN", "Aug 2021", "Jan 2021", "Demonstrated proficiency in web development by creating user-friendly web pages utilizing HTML, JavaScript, and CSS. Adhered to industry best practices and contributed to optimizing web design processes."],
  ["Delhi Public School", "A-levels / Abitur", "Aligarh, IN", "Mar 2017", "Dec 2019", "Completed A-levels with a focus on physics and mathematics. Achieved a 92% / 1,2 Note. Passed the IIT JEE exam which is known to be the world's second toughest exam with over a million participants for about 151k seats.  "],
  ["Decimal to Complex Base ", "Practicum", "Munich, DE", "May 2022", "Jul 2022", "Collaborated with fellow Operation system course students on a C project based on the conversion of a real number into a complex basis and vice-versa. A scientific paper was submitted at the end of the project along with presentation and developed algorithm."]]

  const workExpTwo = [["Projekt0708", "Junior Associate", "Munich, DE", "Mar 2023", "Dec 2023", "Software development utilizing Java, JavaScript-SAPUI5 and multiple SAP tools. Proven ability to deliver high-caliber, efficient solutions for clients. Engaged myself product rollouts and introduced new features to our software product. Possesses strong skills in testing, documentation, and prototyping novel software technologies."],
  ["Technical University of Munich", "BSc Informatics", "Munich, DE", "Oct 2021", "Present", " Top German university, provided a rigorous foundation in computer science. The program balanced theory with practical application, encompassing software development, programming languages, algorithms, data structures, and more."],
  ["Air Pingu", "Project", "Munich, DE", "May 2022", "Jul 2022", "Collaborated with fellow computer science students on a React and Spring-based flight management application open-sourced on GitHub (https://github.com/topics/airline-management-system). Designed and implemented features with frontend focus for trip planning, flight interaction, and user feedback."],
    // ["Upcoming Projects", "Volunteer Projects", "Munich, DE", "Present", "Present", "Helping a community building their website to showcase their work and help them in their digital presence. Also, working on this website to make it more interactive and user-friendly."]
  ]


  return (
    <main
      className={`min-h-screen bg-black p-12 text-white overflow-x-hidden overflow-y-hidden cursor-none ${inter.className}`}
    >
      <Header />
      <ParallaxBanner
        layers={[
          // { image: 'profilepic.jpg', speed: 20 },
          // { image: "signature.png", speed: 30 },
          { image: "sj-logo.png", speed: 10 },
          {
            speed: -55,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <div className=" inset-0 bg-gradient-to-t from-gray-900 to-blue-900" /> */}
                    {/* <h1 className="text-4xl">I am a&nbsp;</h1> */}
                    <Typewriter toType={["Welcome to Saiyam Jain", "Software Developer", "Frontend Developer", "Student", "Cricketer", "Teacher"]} />

              </div>
            ),
          },
        ]}
        className="aspect-[2/1] mb-40"
      />

      {/* <div className="flex">
        <h1 className="text-4xl pt-20 pl-20">Hello There!</h1>
        <h1 className="text-4xl mt-20 animate-tiltshaking origin-[70%_80%]">👋</h1>
      </div> */}

      {/* <div className="flex-col pl-20 pt-10">
        <h1 className="text-4xl">This is SAIYAM JAIN</h1>
        <div className="flex pt-6">
          <h1 className="text-4xl">I am a&nbsp;</h1>

          <Typewriter toType={["Software Developer", "Frontend Developer", "Student", "Cricketer", "Teacher"]} />
        </div>
      </div> */}

      {/* <Parallax
translateX={['0px', '400px']}
scale={[0.75, 1]}
rotate={[-180, 0]}
easing="easeInQuad"> */}


      <div className="flex justify-center">
        <Tilt className="absolute mt-60 z-10"
          perspective={800}
          glareEnable={true}
          glareMaxOpacity={0.15}
          scale={1.02}
          gyroscope={false}>
          <img src="/profilepic.jpg" alt="logo" width={700} height={700} className="grayscale" />
        </Tilt>
      </div>
      {/* </Parallax> */}

      {/* text rotation */}
      <div className="relative flex flex-start text-[300px] font-bold text-gray-700 z-10 select-none" ref={parallax1.ref}>
        <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
        <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
        <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
        <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
      </div>
      <div className=" flex flex-start text-[300px] font-bold text-gray-700 select-none mb-60" ref={parallax2.ref}>
        <h1 className="text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
        <h1 className="text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
        <h1 className="text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
      </div>

      {/* Work Exp */}
      <div className="mt-20 flex justify-between ml-20 mr-20">
        <Parallax speed={30} translateY={[20, -50]} scale={[1.2, 0.9]}>
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
        <Parallax speed={40} scale={[0.9, 1.3]}>
          <div className="grid grid-cols-1 gap-y-80">
            {workExpTwo.map((item, index) => {
              return <Card key={index} title={item[0]} position={item[1]} location={item[2]} start={item[3]} end={item[4]} content={item[5]} />
            })
            }
          </div>
        </Parallax>
      </div>

      {/* <Tilt className="flex justify-center p-10"
        perspective={700}
        glareEnable={true}
        glareMaxOpacity={0.15}
        scale={1.02}
        gyroscope={true}>
        <img src="/signature.png" alt="logo" width={800} height={500} />
      </Tilt> */}


      <Footer />
    </main>
  );
}
