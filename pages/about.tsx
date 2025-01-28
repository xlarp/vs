import Info from "@/components/Info";

function About() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start px-20 py-18 flex-grow bg-cover bg-center">
        <div className="flex-grow relative pt-24">
          <div className="relative mt-5">
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
