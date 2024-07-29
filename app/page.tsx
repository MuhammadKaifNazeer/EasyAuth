import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
        <Link
          href="#"
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
        >
          Follow along on GitHub{" "}
          <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
        </Link>
        <h1 className="text-3xl font-bold mb-4 sm:text-5xl lg:text-7xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#41FB1B] to-[#0DDD50]">
            Effortlessly Integrate Secure{" "}
          </span>{" "}
          Authentication into Your Project
        </h1>
        <p className="mb-6 sm:mb-8 sm:text-lg lg:text-xl max-w-[800px] text-muted-foreground">
          Pre-built authentication systems ready to copy, paste, and customize,
          making security integration fast and hassle-free.
        </p>
        <div className="flex flex-row items-center justify-center gap-5 w-full">
          <Link
            href={`/docs/${page_routes[0].href}`}
            className="w-full sm:w-max"
          >
            <Button className="bg-gradient-to-r from-[#41FB1B] to-[#0DDD50] text-white text-md sm:text-lg lg:text-xl font-semibold px-10 sm:px-12 lg:px-14 py-6 sm:py-7 md:py-8 rounded-full hover:shadow-xl transition duration-200 w-full sm:w-max">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
