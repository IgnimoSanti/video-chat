import Navbar from "@/components/navbar/index";
import {
  CreateMeetingWidget,
  JoinMeetingWidget,
  RecentMeetingsWidget,
} from "./_components/widgets";
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <Navbar />
      <div className="grid grow gap-5 p-3 md:grid-cols-[1.7fr,1fr]">
        <div className="bg-light-primary dark:bg-dark-primary p5 rounded-xl">
          <h2 className="px-2 text-xl font-bold">Join or create meeting</h2>
          <h3 className="mb-2 mt-5 px-2 text-lg">Joing meeting with code</h3>
          <JoinMeetingWidget />
          <h3 className="mb-2 mt-5 px-2 text-lg">Create new meeting</h3>
          <CreateMeetingWidget />
          <Separator orientation="horizontal" className="my-5" />
          <h2 className="px-2 text-xl font-bold">Recent meetings</h2>
          <RecentMeetingsWidget />
        </div>
        <div className="bg-light-primary dark:bg-dark-primary flex items-center justify-center rounded-xl p-5">
          <div className="p-5 text-center text-xl">
            Video chat app using Next.js
          </div>
        </div>
      </div>
    </main>
  );
}
