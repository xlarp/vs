import Info from "@/components/Info";
import { Repo } from "@/typings/repos";
import { fetchReposFromGitHub } from "./api/projects";

export const runtime = "experimental-edge";

function About({ repos }: { repos: Repo[] }) {
  return (
    <div className="flex flex-col pt-2">
      <div className="flex flex-col items-start px-20 py-18  bg-cover bg-center">
        <div className="relative pt-4">
          <div className="relative">
            <Info repos={repos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const repos = await fetchReposFromGitHub();
  return { props: { repos } };
}

export default About;
