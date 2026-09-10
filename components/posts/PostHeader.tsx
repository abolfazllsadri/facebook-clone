import Avatar from "@/components/Avatar";
import Tooltip from "@/components/Tooltip";
import type { User } from "@/lib/types";
import { formatFullDate, formatPostTime } from "@/lib/utils";
import {
  EllipsisHorizontalIcon as DotsIcon,
  GlobeAltIcon as EarthIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

type PostHeaderProps = {
  user: User;
  createdAt: string;
};

export default function PostHeader({ user, createdAt }: PostHeaderProps) {
  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-2">
        <Avatar user={user} />

        <div className="flex flex-col gap-0.5 leading-none">
          <h3 className="text-[15px] font-semibold text-gray-900">
            <Link href="/profile" className="hover:underline">
              {user?.name || ""}
            </Link>
          </h3>

          <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
            <Tooltip content={formatFullDate(createdAt)}>
              <span className="cursor-pointer font-semibold hover:underline">
                {formatPostTime(createdAt)}
              </span>
            </Tooltip>

            <span className="text-lg leading-none font-semibold">·</span>

            <Tooltip content="Public">
              <button
                type="button"
                className="cursor-pointer rounded-full p-0.5 hover:bg-gray-300"
              >
                <EarthIcon className="h-3.5 w-3.5 stroke-2" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      <button className="cursor-pointer rounded-full p-1.5 hover:bg-gray-100">
        <DotsIcon className="h-6.5 w-6.5 stroke-2 text-gray-600" />
      </button>
    </div>
  );
}
