import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-gray-100">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500" />

        <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white">
          <Image
            src="/logo.svg"
            width={48}
            height={48}
            alt="Facebook logo"
            className="h-full w-full object-contain"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
