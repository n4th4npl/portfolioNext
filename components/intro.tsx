"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsDownload } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const {
    setActiveSection,
    setTimeOfLastClick
  } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-2 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              className="h-24 w-24 shadow-xl rounded-full object-cover border-[0.35rem] border-white"
              alt="nathan headshot"
              src="/profile.jpg"
              priority={true}
              quality={80}
              width={192}
              height={192}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hi, I'm Nathan</span>, a{" "}
        <span className="font-bold">front-end developer </span>and{" "}
        <span className="font-bold">User Experience specialist</span> from Bath,
        England
      </motion.h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1
          }}
        >
          <Link
            className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            href="#contact"
            onClick={() => {
              setTimeOfLastClick(Date.now())
              setActiveSection("Contact")
            }}
          >
            Contact Me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2
          }}
        >
        <a
          className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950  active:scale-105 transition borderBlack"
          href=""
        >
          Download CV <BsDownload className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3
          }}
        >
        <a
          href=""
          className="group bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition borderBlack"
        >
          <BsLinkedin />
        </a>
        </motion.div>
      </div>
    </section>
  );
}
