import Link from "next/link";
import Avatar from "@/components/Avatar";
import type { User } from "@/lib/types";

const linkClasses =
  "w-full group flex cursor-pointer items-center gap-3 rounded-tl-md rounded-bl-md px-2 py-3 text-base font-medium text-gray-600 transition sm:hover:bg-blue-50 hover:text-blue-500";

function ProfileNavItem({ user }: { user: User }) {
  const name = user?.name;

  return (
    <li>
      <Link href="/profile" className={linkClasses}>
        <Avatar user={user} size="sm" />
        {name && <span className="hidden sm:inline-block">{name}</span>}
      </Link>
    </li>
  );
}

export default ProfileNavItem;
