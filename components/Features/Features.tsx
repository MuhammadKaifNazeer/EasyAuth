"use client";

import React, { useState, useEffect, useRef } from "react";

const featuresData = [
  {
    title: "JWT Authentication",
    description:
      "JSON Web Token (JWT) is a popular method for securing APIs and managing user authentication in modern web applications.",
  },
  {
    title: "OAuth Authentication",
    description:
      "OAuth allows users to log in using their existing accounts from other services, such as Google, Facebook, and GitHub.",
  },
  {
    title: "Session Based Authentication",
    description:
      "Session-based authentication stores user session data on the server, providing a secure way to manage user sessions.",
  },
  {
    title: "Passwordless Authentication",
    description:
      "Passwordless authentication allows users to log in without a password, typically using a magic link sent to their email.",
  },
  {
    title: "Social Authentication",
    description:
      "Social authentication allows users to log in using their social media accounts, such as Google, Facebook, and Twitter.",
  },
  {
    title: "Coming Soon",
    description: "We are working hard to bring to more Authentication systems.",
  },
];

const Features = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const gradientRef = useRef(gradientPosition);

  useEffect(() => {
    const updateGradient = () => {
      setGradientPosition(gradientRef.current);
      requestAnimationFrame(updateGradient);
    };
    requestAnimationFrame(updateGradient);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;
    gradientRef.current = { x, y };
  };

  return (
    <div
      id="features"
      className="max-w-7xl mx-auto antialiased py-10 md:py-20 px-6 lg:px-8 my-10"
    >
      <div className="mx-auto max-w-3xl sm:text-center pb-10">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white">
          Comprehensive Authentication Solutions for Next.js
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-white/90">
          Discover a wide range of ready-to-use, secure, and customizable
          authentication systems tailored for seamless integration with your
          Next.js projects.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
      >
        {featuresData.map((item, index) => (
          <li
            key={index}
            className="group rounded-2xl border p-8 relative overflow-hidden bg-background"
            onMouseMove={handleMouseMove}
          >
            <div className="pointer-events-none">
              <div className="absolute inset-0 rounded-2xl transition duration-300 group-hover:opacity-50">
                <svg
                  aria-hidden="true"
                  className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-zinc-900/40 dark:stroke-zinc-900/40"
                >
                  <defs>
                    <pattern
                      id={`pattern-${index}`}
                      width="72"
                      height="56"
                      patternUnits="userSpaceOnUse"
                      x="50%"
                      y="16"
                    >
                      <path d="M.5 56V.5H72" fill="none"></path>
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                    fill={`url(#pattern-${index})`}
                  ></rect>
                  <svg x="50%" y="16" className="overflow-visible">
                    <rect
                      strokeWidth="0"
                      width="73"
                      height="57"
                      x="0"
                      y="56"
                    ></rect>
                    <rect
                      strokeWidth="0"
                      width="73"
                      height="57"
                      x="72"
                      y="168"
                    ></rect>
                  </svg>
                </svg>
              </div>
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#41FB1B] to-[#0DDD50] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  maskImage: `radial-gradient(300px at ${gradientPosition.x}px ${gradientPosition.y}px, white, transparent)`,
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                style={{
                  maskImage: `radial-gradient(300px at ${gradientPosition.x}px ${gradientPosition.y}px, white, transparent)`,
                }}
              >
                <svg
                  aria-hidden="true"
                  className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70"
                >
                  <defs>
                    <pattern
                      id={`overlay-${index}`}
                      width="72"
                      height="56"
                      patternUnits="userSpaceOnUse"
                      x="50%"
                      y="16"
                    >
                      <path d="M.5 56V.5H72" fill="none"></path>
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                    fill={`url(#overlay-${index})`}
                  ></rect>
                  <svg x="50%" y="16" className="overflow-visible">
                    <rect
                      strokeWidth="0"
                      width="73"
                      height="57"
                      x="0"
                      y="56"
                    ></rect>
                    <rect
                      strokeWidth="0"
                      width="73"
                      height="57"
                      x="72"
                      y="168"
                    ></rect>
                  </svg>
                </svg>
              </div>
            </div>
            <div className="relative z-10">
              <span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-8 w-8 text-gray-500 dark:text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
              </span>
              <h3 className="mt-6 font-semibold text-gray-900 dark:text-white tracking-wide leading-6 antialiased">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-white/80 tracking-wide leading-6 antialiased">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
