import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import { type Dispatch, type SetStateAction } from "react";

type SearchInputProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  isFocused: boolean;
  onIsFocused: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
  autoFocus?: boolean;
};

export default function SearchInput({
  id,
  value,
  onChange,
  autoFocus = false,
  isFocused,
  onIsFocused,
}: SearchInputProps) {
  return (
    <label
      htmlFor={id}
      className="flex h-10 w-64 min-w-0 items-center rounded-full bg-gray-200/70 px-4"
    >
      {!isFocused && (
        <SearchIcon className="mr-2 h-4 w-4 shrink-0 stroke-2 text-gray-500 xl:h-4.5 xl:w-4.5" />
      )}

      <input
        id={id}
        name={id}
        type="search"
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => onIsFocused(true)}
        onBlur={() => onIsFocused(false)}
        placeholder="Search Facebook"
        className="min-w-0 flex-1 border-none bg-transparent text-sm outline-none sm:text-[15px]"
      />
    </label>
  );
}
