import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import parse from "html-react-parser";

import { BlogItems, formatUtcDate } from "../../../utils/Content";

const Blog = () => {
  const router = useRouter();
  const [blog, setBlog] = useState<BlogItems>({} as BlogItems);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function getBlogById() {
      const baseURL = process.env.NEXT_PUBLIC_HOST;
      const id = router.query.id;
      console.log(router.query.id);

      await axios
        .get(`${baseURL}/blog/${id}`)
        .then((res) => {
          let data = res.data;
          console.log(data);
          setBlog(data);
          setIsVisible(true);
        })
        .catch((e) => {
          console.error(e);
          setBlog({} as BlogItems);
          setIsVisible(true);
        });
    }

    getBlogById();
  }, []);

  return (
    <>
      {!isVisible ? (
        <h1>Loading</h1>
      ) : (
        <div className="container w-full md:max-w-3xl mx-auto pt-20">
          <div
            className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
            style={{ fontFamily: "Georgia,serif;" }}
          >
            <div className="font-sans">
              <p className="text-base md:text-sm text-green-500 font-bold">
                &lt;{" "}
                <Link href="/">
                  <a className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">
                    BACK TO BLOG
                  </a>
                </Link>
              </p>
              <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                {blog.title}
              </h1>
              <p className="text-sm md:text-base font-normal text-gray-600">
                {formatUtcDate(blog.created_at)}
              </p>
            </div>
            {parse(blog.content)}
          </div>
          <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
        </div>
      )}
    </>
  );
};

export default Blog;
