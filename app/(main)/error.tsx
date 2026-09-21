"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-xl bg-transparent p-6 text-center">
      <h2 className="mb-2 text-2xl font-semibold">Something went wrong</h2>

      <p className="mb-4 text-lg text-gray-500">
        We couldn&apos;t load the posts.
      </p>

      <button
        onClick={() => reset()}
        className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-lg font-medium text-white hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
