import { contactsData, groupsData } from "@/lib/data";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function RightSidebar() {
  return (
    <aside className="scroll sticky top-14 hidden max-h-[calc(100dvh-56px)] w-72 shrink-0 flex-col gap-1 self-start overflow-y-auto py-4 pr-4 lg:flex xl:w-80">
      <ul className="flex flex-col">
        {contactsData.map(({ id, avatarUrl, isOnline, name }) => (
          <li key={id}>
            <button className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 text-left hover:bg-gray-200">
              <div className="relative">
                <Image
                  src={avatarUrl}
                  width={36}
                  height={36}
                  alt={name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                {isOnline ? (
                  <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                ) : (
                  <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500" />
                )}
              </div>

              <span className="text-base font-medium text-gray-900">
                {name}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Group conversations */}
      <h4 className="mt-4 mb-1 px-2 text-lg font-semibold text-gray-600">
        Group conversations
      </h4>

      <ul className="flex flex-col">
        {groupsData.map(({ id, members, name }) => (
          <li key={id}>
            <button className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 text-left hover:bg-gray-200">
              <div className="relative h-9 w-9 shrink-0">
                {members
                  .slice(0, 2)
                  .map(({ name, avatarUrl }, index: number) => (
                    <Image
                      key={avatarUrl}
                      src={avatarUrl}
                      alt={name}
                      width={24}
                      height={24}
                      className={`absolute h-6 w-6 rounded-full border-2 border-white object-cover ${
                        index === 0 ? "top-0 left-0" : "right-0 bottom-0"
                      }`}
                    />
                  ))}
              </div>

              <span className="text-base font-medium text-gray-900">
                {name}
              </span>
            </button>
          </li>
        ))}

        <li>
          <button className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 text-left hover:bg-gray-200">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
              <UserGroupIcon className="h-4.5 w-4.5 text-gray-600" />
            </div>

            <span className="text-sm font-medium text-gray-900">
              Create group chat
            </span>
          </button>
        </li>
      </ul>
    </aside>
  );
}
