import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Info from "@/components/Info";
import StarryBackground from "@/components/Stars";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col items-start px-20 py-18 flex-grow bg-cover bg-center">
        <StarryBackground />
        <Header />

        <div className="flex-grow relative pt-24">
          <div className="relative mt-5">
            <Info />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
