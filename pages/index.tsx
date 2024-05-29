import Bio from "@/components/Bio";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Head>
        <title>nya!~</title>
        <meta name="description" content="uwu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="flex flex-col items-start px-20 py-18 flex-grow bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/spiral.jpg")',
        }}
      >
        <Header />
        <main className="flex-grow relative pt-24">
          <div className="relative mt-5">
            <Bio />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
