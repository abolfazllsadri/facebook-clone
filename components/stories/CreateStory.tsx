import Image from "next/image";
import user from "@/public/user.png";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

function CreateStory() {
  return (
    <div className="group transition">
      <button className="relative h-42 w-28 cursor-pointer overflow-hidden rounded-xl bg-white shadow-box group-hover:brightness-95">
        <Image
          className="absolute top-0 h-auto w-full object-cover filter"
          src={user}
          loading="eager"
          referrerPolicy="origin-when-cross-origin"
          alt=""
        />

        <div className="absolute bottom-9 left-1/2 z-10 -translate-x-1/2">
          <PlusCircleIcon className="h-10 w-10 rounded-full bg-white text-blue-500" />
        </div>

        <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 text-[13px] font-semibold whitespace-nowrap">
          Create story
        </span>
      </button>
    </div>
  );
}

export default CreateStory;
