import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaPython,
  FaPhp,
  FaEthereum
} from "react-icons/fa";
import {
  SiSolidity,
  SiNextdotjs,
  SiWeb3Dotjs,

} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Development",
        icons: [
          SiNextdotjs,
          FaPython,
          FaGolang,
          FaPhp,
          IoLogoJavascript,
        ],
      },
      {
        title: "Blockchain",
        icons: [
          SiSolidity,
          SiWeb3Dotjs,
          FaEthereum,
        ],
      },
      {
        title: "Security",
        stage: "VAPT, IR, SIEM, SOC, IAM",
      },
      {
        title: "Operation",
        stage: "CI/CD, git, jenkins, docker, kube",
      },
      {
        title: "Scripting",
        stage: "bash, zsh, python",
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "ETH India 4 edition winner",
        stage: "2023",
      },
      {
        title: "Chainlink hackathon winner",
        stage: "2023",
      },
      {
        title: "Unfold23 Winner by coin dcx",
        stage: "2023",
      },
      {
        title: "Microsoft Most valuable security reseacher",
        stage: "Q1-2022, Q3&Q4 2021",
      },
      {
        title: "Top 200 Security reseacher by bugcrowd",
        stage: "2021",
      },
      {
        title: "HOF and LOA in more than 40+ mncs ",
        stage: "2020-2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Security Engineer - Yeswehack",
        stage: "2021 - 2024",
      },
      {
        title: "Security Triager - Hackerone",
        stage: "2020 - 2021",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Int. MTech Cybersecurity - VIT Bhopal University",
        stage: "2020-2025",
      },
      {
        title: "Computer Science Diploma - Nation skill Program",
        stage: "2018-2020",
      },
      {
        title: "High School - Army Public School Barrackpore (CBSE)",
        stage: "2018-2020",
      },
    ],
  },
];
const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent"> tech tales </span> 
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            3 years ago, I begin freelancing as a devsecops. Since then, I've
            done remote work for agencies, consulted for startups, and
            collabrated on digital products for business and consumer use.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3.8} duration={6} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={120} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={382} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={43} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
