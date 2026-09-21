"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-xl bg-white p-6 text-center shadow-sm">
      <h2 className="mb-2 text-lg font-semibold">Something went wrong</h2>

      <p className="mb-4 text-sm text-gray-500">
        We couldn&apos;t load the posts.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
