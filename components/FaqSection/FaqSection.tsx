"use client";

import React from "react";

const FAQSection = () => {
  return (
    <div className="" id="faqs">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-white/90">
              Can&rsquo;t find the answer you&rsquo;re looking for?{" "}
              <span className="font-semibold text-[#0DDD50]">
                Reach out to us
              </span>{" "}
              and we will get in touch with you
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-white/90">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

const faqs = [
  {
    question: "What is EasyAuth?",
    answer:
      "EasyAuth is a free and open-source collection of premade authentication systems for Next.js that you can easily copy and paste into your project.",
  },
  {
    question: "How do I integrate EasyAuth into my Next.js application?",
    answer:
      "Integrating EasyAuth is straightforward. Simply copy and paste the provided authentication system code into your Next.js project as per the documentation.",
  },
  {
    question: "Is EasyAuth secure?",
    answer:
      "Absolutely. EasyAuth uses best practices for authentication and security in Next.js applications to ensure user data is protected.",
  },
  {
    question: "What types of authentication does EasyAuth provide?",
    answer:
      "EasyAuth currently provides Basic JWT Authentication, Auth with Profile Management, Email Confirmation, OAuth Authentication, Passwordless Authentication, Session-Based Authentication, and Social Auth.",
  },
  {
    question: "Can EasyAuth scale with my application?",
    answer:
      "Yes, EasyAuth is designed to be scalable and can handle growing user bases efficiently.",
  },
  {
    question: "Is EasyAuth customizable?",
    answer:
      "Yes, EasyAuth systems are fully customizable to fit your specific needs. You can modify the authentication flow and user interface to match your application's requirements.",
  },
  {
    question: "Is EasyAuth free?",
    answer:
      "Yes, EasyAuth is completely free and open-source. You can use, modify, and distribute it without any cost.",
  },
];
