import GoogleLogo from "@/components/login/GoogleLogo";

export default function GoogleButton() {
  return (
    <button
      className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-[0px_0px_10px_-3px_rgba(0,0,0,0.2)] transition-all hover:bg-gray-700 hover:text-white/90"
      type="submit"
    >
      <GoogleLogo />
      Continue with Google
    </button>
  );
}
