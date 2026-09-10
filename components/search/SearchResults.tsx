import SpinnerMini from "@/components/SpinnerMini";
import type { SearchPost } from "@/lib/types";
import { formatPostTime } from "@/lib/utils";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type SearchResultsProps = {
  query: string;
  isLoading: boolean;
  onClose: () => void;
  results: SearchPost[];
};

export default function SearchResults({
  query,
  results,
  isLoading,
  onClose,
}: SearchResultsProps) {
  function handlePostClick(id: string) {
    onClose();

    const postEl = document.getElementById(`post-${id}`);

    setTimeout(() => {
      postEl?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 0);
  }

  return (
    <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto px-2 py-4">
      {isLoading && <SpinnerMini />}

      {!isLoading && results.length === 0 && query.length > 0 && (
        <p className="text-center text-[15px] text-gray-500">No posts found</p>
      )}

      {!isLoading && query.length === 0 && (
        <p className="text-center text-[15px] text-gray-500">
          No recent searches
        </p>
      )}

      {!isLoading && results.length > 0 && (
        <ul className="flex flex-col gap-1">
          {results.map(({ id, content, createdAt, user, imageId }) => (
            <li
              key={id}
              onClick={() => handlePostClick(id)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1 transition hover:bg-gray-200/60"
            >
              {imageId ? (
                <Image
                  src={`/api/images/${imageId}`}
                  width={36}
                  height={36}
                  alt="Post image"
                  className="h-9 w-9 shrink-0 rounded-lg border-2 border-gray-200 object-contain"
                />
              ) : (
                <button
                  type="button"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100"
                >
                  <SearchIcon className="h-4.5 w-4.5 stroke-3 text-gray-500" />
                </button>
              )}

              <div className="flex flex-1 flex-col">
                <p className="text-sm font-semibold">{user?.name}</p>

                <p className="flex items-center gap-1 text-xs leading-none whitespace-nowrap text-gray-600">
                  <span className="leading-none">{content}</span>
                  <span className="pb-2 text-sm leading-none font-bold">.</span>
                  <span>{formatPostTime(createdAt)}</span>
                </p>
              </div>

              <Image
                src={user?.image || ""}
                alt="User avatar"
                width={36}
                height={36}
                className="rounded-lg object-contain"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
