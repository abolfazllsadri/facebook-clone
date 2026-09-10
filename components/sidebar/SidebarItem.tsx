import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

type NavItemProps = {
  label: string;
  href?: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  isActive: boolean;
};

const navItemClasses =
  "w-full group flex cursor-pointer items-center gap-3 rounded-tl-md rounded-bl-md px-2 py-3 text-base font-medium transition sm:hover:bg-blue-50 hover:text-blue-500";

const iconClasses = "h-8 w-8 transition group-hover:text-blue-500";

const labelClasses = "hidden sm:inline-block";

function SidebarItem({ href, Icon, label, isActive }: NavItemProps) {
  return (
    <li>
      {href ? (
        <Link
          href={href}
          className={`${navItemClasses} ${isActive ? "sm:bg-blue-50 sm:text-blue-500" : "text-gray-600"}`}
        >
          {Icon && (
            <Icon
              className={`${iconClasses} ${isActive ? "text-blue-500" : "text-gray-400"}`}
            />
          )}
          <span className={labelClasses}>{label}</span>
        </Link>
      ) : (
        <button className={`${navItemClasses} text-gray-600`}>
          {Icon && <Icon className={`${iconClasses} text-gray-400`} />}
          <span className={labelClasses}>{label}</span>
        </button>
      )}
    </li>
  );
}

export default SidebarItem;
