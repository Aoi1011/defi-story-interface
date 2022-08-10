import axios from "axios";

import blogData from "../blogs.json";

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
      data = res.data;
      // console.log(data);
      return data;
    })
    .catch((e) => {
      console.error(e);
      return [];
    });
}

export const formatUtcDate = (date: string) => {
  const formatDate = new Date(date);

  return `${formatDate.getFullYear()} ${formatDate.toLocaleString("en-us", {
    month: "short",
  })} ${formatDate.getDate()}`;
};
