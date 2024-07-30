import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CodeXml, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          <Link className="px-1 underline underline-offset-2" href="/">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#41FB1B] to-[#0DDD50]"></div>
          </Link>
          <p className="text-center">
            Build by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://muhammadkaifnazeer.netlify.app/"
            >
              Muhammad Kaif Nazeer
            </Link>
            .
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://github.com/MuhammadKaifNazeer/EasyAuth"
        target="_blank"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Github className="h-4 w-4 mr-2 text-primary fill-current" />
        Github
      </Link>
    </>
  );
}
