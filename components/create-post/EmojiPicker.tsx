import Tooltip from "@/components/Tooltip";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FaceSmileIcon as EmojiIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";

const EmojiPickerLib = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

type EmojiPickerProps = {
  onEmojiSelect: (emoji: string) => void;
};

export default function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  return (
    <Popover className="relative">
      <Tooltip content="Emoji" position="top">
        <PopoverButton
          type="button"
          className="cursor-pointer transition active:scale-[0.97]"
        >
          <EmojiIcon className="h-7.5 w-7.5 text-gray-400 hover:text-gray-500/90" />
        </PopoverButton>
      </Tooltip>

      <PopoverPanel anchor="bottom end" className="z-50 mt-2">
        <EmojiPickerLib
          width={350}
          height={320}
          skinTonesDisabled
          previewConfig={{ showPreview: false }}
          onEmojiClick={(emojiData) => onEmojiSelect(emojiData.emoji)}
        />
      </PopoverPanel>
    </Popover>
  );
}
