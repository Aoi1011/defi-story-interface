import axios from "axios";

export interface BlogItems {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

export function getAllPosts() {
  const baseURL = process.env.NEXT_PUBLIC_HOST;
  console.log(baseURL);
  let data: BlogItems[] = [];

  axios
    .get(`${baseURL}/blogs`)
    .then((res) => {
      data = res.data as BlogItems[];
    })
    .catch((e) => {
      console.error(e);
      return [];
    });

  return data;
}
