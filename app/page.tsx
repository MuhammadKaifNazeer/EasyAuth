import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

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
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
          Effortlessly Integrate Secure Authentication into Your Project
        </h1>
        <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
          Pre-built authentication systems ready to copy, paste, and customize,
          making security integration fast and hassle-free.
        </p>
        <div className="flex flex-row items-center gap-5">
          <Link
            href={`/docs/${page_routes[0].href}`}
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            Get Stared
          </Link>
          <Link
            href="#"
            className={buttonVariants({
              variant: "outline",
              className: "px-6",
              size: "lg",
            })}
          >
            Templates
          </Link>
        </div>
      </div>
    </>
  );
}
