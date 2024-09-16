import { cN } from "@/lib/utils";

type SkeletenProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletenProps) {
  return (
    <div
      className={cN(
        "animate-pulse h-4 w-[550px] rounded-md bg-white/5",
        className
      )}
    />
  );
}
