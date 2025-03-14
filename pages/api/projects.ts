import { Repo } from "@/typings/repos";
import { NextResponse } from "next/server";

export const runtime = "edge";

const sources = [
  { name: "xlarp", isOrg: false },
  { name: "xvht", isOrg: true },
];

export async function fetchReposFromGitHub(): Promise<Repo[]> {
  try {
    const fetches = sources.map((source) => {
      const url = source.isOrg
        ? `https://api.github.com/orgs/${source.name}/repos`
        : `https://api.github.com/users/${source.name}/repos`;
      return fetch(url).then((res) => res.json());
    });
    const results = await Promise.all(fetches);

    if (!results.length) return [];

    const combined = results.flat().filter((repo: Repo) => {
      if (repo.fork) return false;
      if (
        repo.owner &&
        repo.owner.type === "User" &&
        repo.name.toLowerCase() === repo.owner.login.toLowerCase()
      ) {
        return false;
      }
      return true;
    });

    if (!combined.length) return [];

    const randomSelected = combined.sort(() => 0.5 - Math.random()).slice(0, 5);
    const selected = randomSelected.sort(
      (a, b) => b.name.length - a.name.length
    );
    return selected;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function GET() {
  const fetchedRepos = await fetchReposFromGitHub();
  return NextResponse.json(fetchedRepos);
}
