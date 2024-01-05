import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import Link from "next/link";
import React from "react";

const EmailSection = () => {
  return (
    <section className=" grid md:grid-cols-2 my-6 md:my-6 py-24 gap-4 " id="contact">
      <div>
        <h5 className="text-xl font-bold text-primary-950 my-2">
          Let&apos;s work together
        </h5>
        <p className="text-primary-900 mb-4 max-w-md">
          I am currently looking for a job as a web developer, mobile developer
          or UI/UX designer. If you are interested in working with me, please
          contact me.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.linkedin.com/in/elyass-hafidi-837a2a220/">
            <FiLinkedin className="inline-block text-2xl text-primary-950 hover:text-second-700  mr-2" />
          </Link>
          <Link href="https://github.com/DCCXVII">
            <FiGithub className="inline-block text-2xl text-primary-950 hover:text-second-700 mr-2 " />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col ">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-primary-950 block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              className="text-primary-950  bg-second-100 placeholder-primary-900  text-sm rounded-lg block w-full p-2.5"
              type="email"
              id="email"
              required
              placeholder="example@mail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-primary-950 block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              className="text-primary-950  bg-second-100 placeholder-primary-900  text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              required
              placeholder="just saying hi "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-primary-950 block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              className="text-primary-950  bg-second-100 placeholder-primary-900  text-sm rounded-lg block w-full p-2.5"
              type="text"
              name="message"
              id="message"
              required
              placeholder="Let's talk together..."
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 w-full  rounded-lg mt-3 text-white-50 bg-second-500 hover:bg-second-600 active:bg-second-700 flex items-center justify-center"
          >
            Send Message
            <EnvelopeIcon className="w-5 h-5 ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
