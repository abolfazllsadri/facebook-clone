import {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useRef,
} from "react";
import {
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  GifIcon,
  MapPinIcon,
  PhotoIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import Tooltip from "@/components/Tooltip";

type ModalPostActionsProps = {
  image: string;
  setImageFile: Dispatch<SetStateAction<File>>;
  setImagePreview: Dispatch<SetStateAction<string>>;
};

export default function ModalPostActions({
  image,
  setImageFile,
  setImagePreview,
}: ModalPostActionsProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleAddImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;

    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  return (
    <div className="flex items-center">
      <Tooltip position="top" content="Photo/video">
        <button
          type="button"
          onClick={() => inputRef.current.click()}
          className="cursor-pointer rounded-full p-1 hover:bg-gray-100"
        >
          <PhotoIcon className="h-7 w-7 text-green-500" />
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleAddImage}
            hidden
          />
        </button>
      </Tooltip>

      <Tooltip position="top" content="Tag people">
        <button
          type="button"
          className="cursor-pointer rounded-full p-1 hover:bg-gray-100"
        >
          <UserPlusIcon className="h-7 w-7 text-blue-500" />
        </button>
      </Tooltip>

      <Tooltip position="top" content="Feeling/activity">
        <button
          type="button"
          className="cursor-pointer rounded-full p-1 hover:bg-gray-100"
        >
          <FaceSmileIcon className="h-7 w-7 text-yellow-500" />
        </button>
      </Tooltip>

      <Tooltip position="top" content="Check in">
        <button
          type="button"
          className="cursor-pointer rounded-full p-1 hover:bg-gray-100"
        >
          <MapPinIcon className="h-7 w-7 text-red-500" />
        </button>
      </Tooltip>

      <Tooltip
        position="top"
        content={
          image
            ? "This can't be combined with what you've already added to your post."
            : "GIF"
        }
      >
        <button
          type="button"
          className="cursor-pointer rounded-full p-1 hover:bg-gray-100"
        >
          <GifIcon
            className={`h-7 w-7 ${image ? "cursor-not-allowed text-gray-400" : "text-teal-500"}`}
          />
        </button>
      </Tooltip>

      <Tooltip position="top" content="More post options">
        <button
          type="button"
          className="cursor-pointer rounded-full p-1 hover:bg-gray-100"
        >
          <EllipsisHorizontalIcon className="h-7 w-7 text-gray-500" />
        </button>
      </Tooltip>
    </div>
  );
}
