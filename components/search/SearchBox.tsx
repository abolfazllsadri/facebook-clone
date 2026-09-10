"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "@heroicons/react/24/outline";

import Logo from "@/components/Logo";
import SearchInput from "@/components/search/SearchInput";
import SearchResults from "@/components/search/SearchResults";
import type { SearchPost } from "@/lib/types";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const queryValue = query.trim();

  function openSearch() {
    setIsSearchOpen(true);
  }

  function closeSearch() {
    setIsSearchOpen(false);
    setQuery("");
    setResults([]);
    setIsLoading(false);
  }

  function handleQueryChange(value: string) {
    setQuery(value);

    if (value.trim().length < 3) {
      setResults([]);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!isSearchOpen) return;

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          `/api/search?q=${encodeURIComponent(queryValue)}`,
          { signal: controller.signal },
        );

        if (!res.ok) throw new Error("Search request failed");

        const data: { posts: SearchPost[] } = await res.json();

        setResults(data.posts);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;

        console.error("Search error:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [queryValue, isSearchOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node))
        closeSearch();
    }

    if (!isSearchOpen) return;

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  return (
    <div className="flex items-center gap-2">
      <Logo width={40} height={40} />

      {/* DESKTOP */}
      <button
        type="button"
        onClick={openSearch}
        className="hidden h-10 w-60 cursor-text items-center rounded-full bg-gray-200/60 px-3 text-[15px] text-gray-500 xl:flex"
      >
        <SearchIcon className="h-4.5 w-4.5 stroke-2 text-gray-500" />
        <span className="ml-2 font-normal">Search Facebook</span>
      </button>

      {/* MOBILE */}
      <button
        type="button"
        onClick={openSearch}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-200/60 px-3 xl:hidden"
      >
        <SearchIcon className="h-4.5 w-4.5 stroke-2 text-gray-500" />
      </button>

      {isSearchOpen && (
        <div
          ref={searchRef}
          className="shadow-facebook fixed top-0 left-0 z-300 w-83 rounded-b-lg bg-white"
        >
          <div className="flex h-14 items-center gap-2 px-2">
            <button
              type="button"
              onClick={closeSearch}
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full transition hover:bg-gray-100"
            >
              <ArrowLeftIcon className="h-4.5 w-4.5 stroke-3 text-gray-500" />
            </button>

            <SearchInput
              id="search-overlay"
              value={query}
              onChange={handleQueryChange}
              autoFocus
              isFocused={isFocused}
              onIsFocused={setIsFocused}
              onClose={closeSearch}
            />
          </div>

          <SearchResults
            query={queryValue}
            results={results}
            isLoading={isLoading}
            onClose={closeSearch}
          />
        </div>
      )}
    </div>
  );
}
