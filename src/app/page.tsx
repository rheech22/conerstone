import Link from "next/link";
import { Fonts } from "./components/fonts";

const Home = () => {
  return (
    <div className="py-12">
      <main className="flex flex-col items-center">
        <Link href="./blog/welcome" className="underline">
          MARKDOWN EXAMPLE
        </Link>
        <Fonts />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        FOOTER
      </footer>
    </div>
  );
};

export default Home;
