import { auth } from "@/auth";
import SidebarNav from "@/components/sidebar/SidebarNav";

export default async function Sidebar() {
  const session = await auth();

  return (
    <aside className="scroll sticky top-14 hidden max-h-[calc(100dvh-56px)] w-72 shrink-0 self-start overflow-y-auto pt-4 pb-2 pl-2 md:block xl:w-80">
      <SidebarNav user={session?.user} />
    </aside>
  );
}
