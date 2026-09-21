export default function Loading() {
  return (
    <div className="space-y-4 py-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="rounded-xl bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />

            <div className="space-y-2">
              <div className="h-3 w-28 animate-pulse rounded bg-gray-200" />
              <div className="h-2 w-20 animate-pulse rounded bg-gray-200" />
            </div>
          </div>

          <div className="mb-2 h-3 w-full animate-pulse rounded bg-gray-200" />
          <div className="mb-4 h-3 w-2/3 animate-pulse rounded bg-gray-200" />

          <div className="h-64 w-full animate-pulse rounded-lg bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
