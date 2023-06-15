import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";

export const revalidate = 0;
export default async function Home() {
  const songs = await getSongs();
  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header>
        <div className="mb-2">
          <h1 className="text-white font-semibold text-3xl">Welcome back!</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/images/liked.png"
              name="Liked songs"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-semibold text-2xl">Newest songs</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}
