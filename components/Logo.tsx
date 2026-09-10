import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

type LogoProps = {
  width: number | `${number}`;
  height: number | `${number}`;
};

export default function Logo({ width, height }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src={logo}
        width={width}
        height={height}
        alt="Facebook logo"
        className="object-contain"
        loading="eager"
      />
    </Link>
  );
}
