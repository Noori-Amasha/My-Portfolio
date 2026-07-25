import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { Reveal, SectionTitle } from "./Toolkit";
import Button from "./common/Button";
import Section from "./common/Section";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amasha-kahandawa/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_noo__rii_?utm_source=qr&igsh=a3VyM3V6NGgxODlp",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/noori.amasha?rdid=zZYW6bmYJFfOSAjj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CmMjHvPiv%2F",
    icon: FaFacebookF,
  },
  {
    name: "GitHub",
    href: "https://github.com/Noori-Amasha",
    icon: FaGithub,
  },
];

function Contact() {
  const email = "nooriamashed@gmail.com";
  const navigate = useNavigate();

  const handleBackToTop = () => {
    navigate("/home");

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <Section
      id="contact"
      className="pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-[100px] lg:pt-14"
    >
      <SectionTitle
        label="Contact"
        title="Let’s build something sharp, modern and memorable."
        text="Feel free to contact me at any time."
      />

      <Reveal>
        <div
          className="
            relative max-w-[760px] overflow-hidden
            rounded-[1.5rem] border border-blue-200/80
            bg-white/80 p-6
            shadow-[0_25px_80px_rgba(30,64,175,0.12)]
            backdrop-blur-xl
            sm:p-8

            before:absolute before:inset-[-1px]
            before:-z-10 before:content-['']
            before:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_18rem)]

            dark:border-white/[0.13]
            dark:bg-white/[0.07]
            dark:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
            dark:before:bg-[radial-gradient(circle_at_top_left,rgba(244,63,140,0.22),transparent_18rem)]
            dark:hover:border-pink-400/50
          "
        >
          <h3
            className="
              mt-3 text-[clamp(1.6rem,4vw,3rem)]
              font-bold tracking-[-0.04em]
            "
          >
            Have a project idea?
          </h3>

          <p className="mt-3 max-w-[560px] text-[0.95rem] leading-[1.7] text-slate-600 dark:text-[#a6a6b8]">
            I am ready to create modern websites and mobile applications with
            unique solutions and professional interfaces.
          </p>

          <div className="mt-7">
            <p className="mb-3 text-sm font-medium text-slate-500 dark:text-[#a6a6b8]">
              Connect with me
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${name} profile`}
                  title={name}
                  className="
                    group flex size-10 items-center justify-center
                    rounded-full border border-slate-300/80
                    bg-white/60 text-slate-700
                    shadow-sm backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-400
                    hover:bg-blue-500
                    hover:text-white
                    hover:shadow-[0_12px_30px_rgba(37,99,235,0.25)]

                    dark:border-white/[0.14]
                    dark:bg-white/[0.06]
                    dark:text-white/80
                    dark:hover:border-cyan-300/70
                    dark:hover:bg-white/[0.12]
                    dark:hover:text-cyan-300
                    dark:hover:shadow-[0_12px_30px_rgba(34,211,238,0.14)]
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          <div
            className="
              mt-7 flex flex-col gap-3
              min-[621px]:flex-row
              min-[621px]:flex-wrap
            "
          >
            <Button href={`mailto:${email}`}>Send Email</Button>

            <button
              type="button"
              onClick={handleBackToTop}
              className="
                inline-flex min-h-10 w-full items-center justify-center
                rounded-full border border-white/[0.13]
                bg-white/[0.05]
                px-[18px] text-[0.9rem] font-bold
                text-[#f7f7ff]
                transition-[transform,border-color,background]
                duration-200
                hover:-translate-y-1
                min-[621px]:w-auto
              "
            >
              Back to Top
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default Contact;