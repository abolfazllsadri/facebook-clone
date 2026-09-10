import Image from "next/image";

type StoryCardProps = {
  name?: string;
  avatar: string;
  story: string;
};

function StoryCard({ name, avatar, story }: StoryCardProps) {
  return (
    <div aria-label={`${name}'s story`}>
      <button className="group shadow-box relative h-42 w-28 cursor-pointer overflow-hidden rounded-xl">
        <Image
          className="absolute top-3 left-3 z-50 rounded-full border-4 border-blue-500 opacity-0 group-hover:brightness-90 lg:opacity-100"
          src={avatar}
          width={40}
          height={40}
          alt={name ?? ""}
        />

        <Image
          className="h-auto w-auto object-cover filter transition group-hover:scale-103 group-hover:brightness-80"
          src={story}
          width={110}
          height={160}
          alt=""
          loading="eager"
        />

        {name && (
          <span className="absolute bottom-2 left-1/2 z-50 -translate-x-1/2 text-xs font-semibold whitespace-nowrap text-gray-50">
            {name}
          </span>
        )}
      </button>
    </div>
  );
}

export default StoryCard;
