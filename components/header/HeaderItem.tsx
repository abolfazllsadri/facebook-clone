import Link from "next/link";
import Tooltip from "@/components/Tooltip";
import type { SVGProps } from "react";

type HeroIcon = React.ComponentType<SVGProps<SVGSVGElement>>;

type HeaderItemProps = {
  icons: {
    outline: HeroIcon;
    solid: HeroIcon;
  };
  isActive: boolean;
  title?: string;
  href: string;
};

const iconSizeClasses =
  "mx-auto h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7";

function HeaderItem({ icons, isActive, href, title }: HeaderItemProps) {
  const Icon = isActive ? icons.solid : icons.outline;
  const iconColor = isActive ? "text-blue-500" : "text-gray-500";
  const hoverClasses = !isActive ? "md:hover:bg-gray-100" : "";

  return (
    <li className="relative flex items-center">
      <Tooltip content={title ?? ""}>
        <Link
          href={href}
          aria-label={title}
          className={`flex cursor-pointer items-center justify-center rounded-xl transition delay-50 md:px-8 md:py-2.5 xl:px-10 ${hoverClasses}`}
        >
          <Icon className={`${iconSizeClasses} ${iconColor}`} />
        </Link>
      </Tooltip>

      {isActive && (
        <div className="absolute inset-x-0.5 -bottom-1 h-0.75 rounded-s-xs bg-blue-500"></div>
      )}
    </li>
  );
}

export default HeaderItem;
