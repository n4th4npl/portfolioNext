"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 text-center -mt-4">
        Feel free to contact me directly via{" "}
        <a className="underline" href="mailto:nathanloveux@gmail.com">
          nathanloveux@gmail.com
        </a>{" "}
        or through the form below
      </p>
      <form
        action={async (formData) => {
          console.log("client side");
          console.log(formData.get("email-input"));
          console.log(formData.get("your-message"));

          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col"
      >
        <label className="px-2" htmlFor="email-input">
          Email Address
        </label>
        <input
          name="email-input"
          className="h-14 rounded-lg borderBlack mb-5 px-4"
          type="email"
          required
          maxLength={500}
          placeholder="Please enter your email..."
        />
        <label className="px-2" htmlFor="your-message">
          Your message
        </label>
        <textarea
          name="your-message"
          className="h-52 mb-3 p-4 rounded-lg borderBlack"
          required
          maxLength={5000}
          placeholder="Please enter your message..."
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
