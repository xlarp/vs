export type Repo = {
  id: number;
  name: string;
  description: string;
  fork: boolean;
  html_url: string;
  owner: { login: string; type: string };
};
