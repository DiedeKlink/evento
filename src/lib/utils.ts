import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cN(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
