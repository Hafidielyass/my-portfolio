"use client"
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import Link from "next/link";
import React, { useState } from "react";

const EmailSection = () => {
  const [status, setStatus] = useState({ sending: false, ok: null, error: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    try {
      setStatus({ sending: true, ok: null, error: "" });
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus({ sending: false, ok: true, error: "" });
      form.reset();
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        error: "Failed to send. Try again.",
      });
    }
  }

  return (
    <section
      className=" grid md:grid-cols-2  py-24 gap-4  px-12 bg-background"
      id="contact"
    >
      <div>
        <h5 className="text-5xl font-bold text-foreground my-2">
          Let&apos;s work together
        </h5>

        <div className="socials flex flex-row gap-2 mt-5">
          <div className="p-2 bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:ease-out transition-colors duration-300">
            <Link href="https://www.linkedin.com/in/elyass-hafidi-837a2a220/">
              <FaLinkedinIn className="inline-block text-2xl hover:text-second-700   " />
            </Link>
          </div>
          <div className="p-2 bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:ease-out transition-colors duration-300">
            <Link href="https://github.com/DCCXVII">
              <FaGithub className="inline-block text-2xl  hover:text-second-700 " />
            </Link>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none select-none block mt-2 text-[clamp(2.5rem,10vw,8rem)] font-extrabold uppercase tracking-tight text-foreground opacity-10 leading-none"
        >
          {"< Contact me />"}
        </span>
      </div>
      <div>
        <form onSubmit={onSubmit} className="flex flex-col bg-muted/60 p-7">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-foreground block mb-2 text-lg font-medium"
            >
              Email
            </label>
            <input
              className="text-foreground  border-b-2 border-b-muted placeholder-primary-900  text-sm  block w-full p-2.5 focus:outline-none focus:border-b-accent focus:ease-in-out duration-300"
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@mail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-foreground block mb-2 text-lg font-medium"
            >
              Subject
            </label>
            <input
              className="text-foreground  border-b-2 border-b-muted placeholder-primary-900  text-sm  block w-full p-2.5 focus:outline-none focus:border-b-accent focus:ease-in-out duration-300"
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="just saying hi "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-foreground block mb-2 text-lg font-medium"
            >
              Message
            </label>
            <textarea
              className="text-foreground  border-b-2 border-b-muted placeholder-primary-900  text-sm  block w-full p-2.5 focus:outline-none focus:border-b-accent focus:ease-in-out duration-300"
              type="text"
              name="message"
              id="message"
              rows={7}
              required
              placeholder="Let's talk together..."
            />
          </div>
          <button
            type="submit"
            disabled={status.sending}
            className="px-6 py-3 w-fit self-end mt-3 bg-muted text-pretty text-primary hover:bg-second-600 active:bg-second-700 flex items-center justify-center disabled:opacity-60"
          >
            {status.sending
              ? "Sending..."
              : status.ok
              ? "Sent!"
              : "Send Message"}
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
          {status.ok === false && (
            <p className="mt-2 text-sm text-destructive">{status.error}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
