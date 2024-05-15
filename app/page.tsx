import Example from "./components/example";
import Hero from "./components/hero/Hero";
import AnimeList from "./components/list/AnimeList";

async function Home({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    page?: string;
  };
}) {
  const q = searchParams?.q || '';
  const currentPage = searchParams?.page || '';  

  return (
    <main>
      <Hero />
      <AnimeList q={q} currentPage={currentPage} />
    </main>
  );
}

export default Home
