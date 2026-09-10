export default function ModalLoading() {
  return (
    <div className="absolute inset-0 z-400 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-white/50 select-none">
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-400 border-t-black" />
        <span className="text-2xl font-medium text-gray-800">Posting...</span>
      </div>
    </div>
  );
}
