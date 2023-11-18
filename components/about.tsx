"use client";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.2,
      }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I specialize in web development and UX design, with a strong background
        in HTML, CSS, JavaScript, and Next.js. My focus is on building clean,
        user-friendly web experiences. In the tech world, I'm always on the
        lookout for new challenges and innovations. Beyond coding, I'm an avid
        Brazilian Jiu Jitsu practitioner, where I sharpen my strategy and
        resilience. I also enjoy playing guitar, which balances my technical
        pursuits with a touch of creativity. I love connecting over shared
        interests or potential collaborations. Reach out if you'd like to talk
        tech, martial arts, music, or anything in between!
      </p>
    </motion.section>
  );
}
