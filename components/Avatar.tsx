import type { User } from "@/lib/types";
import defaultUser from "@/public/default-user.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type AvatarProps = {
  user: User;
  size?: "sm" | "md" | "lg";
  showChevron?: boolean;
};

const sizes = {
  sm: {
    avatarClass: "h-8 w-8",
    iconClass: "h-3 w-3",
    sizes: "36px",
  },
  md: {
    avatarClass: "h-10 w-10",
    iconClass: "h-4 w-4",
    sizes: "40px",
  },
  lg: {
    avatarClass: "h-14 w-14",
    iconClass: "h-5 w-5",
    sizes: "56px",
  },
} as const;

function Avatar({ user, showChevron, size = "md" }: AvatarProps) {
  const profile = user?.image ?? defaultUser;
  const config = sizes[size];

  const avatarClasses = `relative ${config.avatarClass} cursor-pointer rounded-full transition active:scale-[0.96]`;
  const iconClasses = `absolute -right-0.5 -bottom-0.5 z-50 ${config.iconClass} rounded-full border-3 border-white bg-gray-200 stroke-3`;

  return (
    <button className={avatarClasses}>
      <Image
        fill
        src={profile}
        sizes={config.sizes}
        alt={`User ${user?.name ?? "logo"}`}
        className="rounded-full object-cover transition hover:brightness-95"
      />

      {showChevron && <ChevronDownIcon className={iconClasses} />}
    </button>
  );
}

export default Avatar;
