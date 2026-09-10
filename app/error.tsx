"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-30 text-center text-xl">
      <h1 className="text-4xl font-semibold">Something went wrong...</h1>

      <button
        onClick={() => reset()}
        className="mt-5 cursor-pointer rounded-lg bg-blue-500 px-5 py-3 text-3xl font-medium text-white"
      >
        Try again
      </button>
    </div>
  );
}
