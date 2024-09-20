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
    <button onClick={() => history.back()} className={cN(btnStyles, className)}>
      <ArrowLeftIcon />
      {children}
    </button>
  );
}
