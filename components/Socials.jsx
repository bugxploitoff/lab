import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMediumLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@bugxploit",
    Icon: RiYoutubeLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/bugxploit",
    Icon: RiLinkedinBoxLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/bugxploit",
    Icon: RiInstagramLine,
  },
  {
    name: "Medium",
    link: "https://medium.com/@bugxploit",
    Icon: RiMediumLine,
  },
  {
    name: "Github",
    link: "https://github.com/bugxploitoff",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
