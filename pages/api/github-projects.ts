import type { NextApiRequest, NextApiResponse } from "next";

interface Repo {
  id: number;
  name: string;
  description: string;
  fork: boolean;
  html_url: string;
  owner: { login: string; type: string };
}

let cachedRepos: Repo[] | null = null;
const sources = [
  { name: "xlarp", isOrg: false },
  { name: "xvht", isOrg: true },
];

async function fetchReposFromGitHub(): Promise<Repo[]> {
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (cachedRepos) return res.status(200).json(cachedRepos);
  try {
    const repos = await fetchReposFromGitHub();
    cachedRepos = repos;
    return res.status(200).json(repos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch repositories" });
  }
}
