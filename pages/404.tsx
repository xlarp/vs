import NotFound from "@/components/404";

function ErrorPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start px-20 py-18 flex-grow bg-cover bg-center">
        <div className="flex-grow relative pt-24">
          <div className="relative mt-5">
            <NotFound />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
