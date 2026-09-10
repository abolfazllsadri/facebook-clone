import { auth } from "@/auth";
import HeaderActions from "@/components/header/HeaderActions";
import HeaderNav from "@/components/header/HeaderNav";
import SearchBox from "@/components/search/SearchBox";

export default async function Header() {
  const session = await auth();

  return (
    <header className="fixed top-0 z-50 flex h-14 w-full items-center justify-between bg-white px-4 py-1 shadow-md">
      <SearchBox />
      <HeaderNav />
      <HeaderActions user={session?.user} />
    </header>
  );
}
