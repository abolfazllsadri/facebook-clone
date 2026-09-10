import Avatar from "@/components/Avatar";
import type { User } from "@/lib/types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function UserInfo({ user }: { user: User }) {
  return (
    <div className="flex items-end gap-3">
      <Link href="/profile">
        <Avatar user={user} />
      </Link>

      <div className="flex flex-col items-start gap-0.5">
        <h2 className="text-[15px] font-medium">{user?.name}</h2>

        <div className="flex items-center gap-1">
          <button className="flex cursor-pointer items-center gap-0.75 self-start rounded-md bg-gray-200 px-1.5 py-0.5 font-medium text-black">
            <GlobeAltIcon className="h-3.5 w-3.5" />
            <span className="text-[13px]">Public</span>
            <ChevronDownIcon className="h-3 w-3 stroke-3" />
          </button>

          <button className="flex cursor-pointer items-center gap-0.75 self-start rounded-md bg-gray-200 px-1.5 py-0.5 font-medium text-black">
            <PlusCircleIcon className="h-3.5 w-3.5" />
            <span className="text-[13px]">AI label off</span>
            <ChevronDownIcon className="h-3 w-3 stroke-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
