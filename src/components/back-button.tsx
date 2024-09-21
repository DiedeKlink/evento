"use client";

import { btnStyles, cN } from "@/lib/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function BackButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={() => history.back()}
      className={cN(
        "flex text-white items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm",
        className
      )}
    >
      <ArrowLeftIcon />
      {children}
    </button>
  );
}
