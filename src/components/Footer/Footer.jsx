"use client";

import Image from "next/image";
import Link from "next/link";

import instagramIcon from "@/app/assets/instagram.png";
import facebookIcon from "@/app/assets/facebook.png";
import twitterIcon from "@/app/assets/twitter.png";

const socialLinks = [
  { href: "#", label: "Instagram", icon: instagramIcon },
  { href: "#", label: "Facebook", icon: facebookIcon },
  { href: "#", label: "X (Twitter)", icon: twitterIcon },
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies"];

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e4035] text-white">

    
      <div className="flex flex-col items-center pt-14 pb-12 gap-4">
        <h2 className="text-5xl font-bold tracking-tight text-white m-0" style={{ fontFamily: "Georgia, serif" }}>
          KeenKeeper
        </h2>
        <p className="text-sm text-[#c8d8d0] w-9/11 text-center leading-relaxed m-0" style={{ fontFamily: "Georgia, serif" }}>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="flex flex-col items-center gap-4 mt-4">
          <span className="text-sm text-white" style={{ fontFamily: "Georgia, serif" }}>
            Social Links
          </span>

          <div className="flex gap-3">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white hover:opacity-85 hover:scale-105 transition-all duration-200"
              >
                <Image
                  src={icon}
                  alt={label}
                  width={52}
                  height={22}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 py-5 px-8 flex justify-between items-center flex-wrap gap-3">
        <span className="text-xs text-[#a8bfb5]" style={{ fontFamily: "Georgia, serif" }}>
          © 2026 KeenKeeper. All rights reserved.
        </span>

        <nav className="flex gap-7">
          {legalLinks.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-xs text-[#a8bfb5] hover:text-white transition-colors duration-200 no-underline"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

    </footer>
  );
};

export default Footer;