"use client"
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import Link from "next/link";
import React, { useState, useCallback } from "react";

const EmailSection = () => {
  const [status, setStatus] = useState({ sending: false, ok: null, error: "" });

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    if (!email || !subject || !message) return;
    setStatus({ sending: true, ok: null, error: "" });
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      setStatus({ sending: false, ok: true, error: "" });
      form.reset();
    } catch (err) {
      setStatus({ sending: false, ok: false, error: "Failed to send. Try again." });
    }
  }, []);

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
  <form onSubmit={onSubmit} className="flex flex-col bg-muted/60 p-7 relative" noValidate>
          {/* Status overlay when sending */}
          {status.sending && (
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center text-sm text-muted-foreground">
              Sending...
            </div>
          )}
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
              autoComplete="email"
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
              maxLength={140}
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
              maxLength={3000}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-end mt-2">
            <button
              type="submit"
              disabled={status.sending}
              className="px-6 py-3 bg-muted text-pretty text-primary hover:bg-accent hover:text-accent-foreground active:opacity-90 flex items-center justify-center disabled:opacity-50 transition-colors"
            >
              {status.sending
                ? "Sending..."
                : status.ok
                ? 'Sent!'
                : "Send Message"}
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
            {status.ok === true && (
              <span className="text-xs text-accent-foreground bg-accent px-2 py-1 rounded-sm">Thanks for your message!</span>
            )}
            {status.ok === false && (
              <p className="text-sm text-destructive">{status.error}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
