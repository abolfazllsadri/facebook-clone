import Image from "next/image";
import spinner from "@/public/spinner.gif";

export default function Loading() {
  return (
    <div
      aria-label="Loading..."
      role="status"
      className="shadow-facebook fixed top-20 left-[48%] z-1000 flex h-14 w-14 items-center justify-center rounded-full bg-white select-none"
    >
      <div className="h-8 w-8">
        <Image
          src={spinner}
          width={32}
          height={32}
          alt="Loading"
          referrerPolicy="origin-when-cross-origin"
          unoptimized
        />
      </div>
    </div>
  );
}
