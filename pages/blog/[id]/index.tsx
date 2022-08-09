import React from "react";

import { useRouter } from "next/router";

import blogs from "../../../blogs.json";
import Link from "next/link";
import PostTitle from "../../../components/PostTitle";
import { GetStaticProps } from "next";

const Blog = ({ blog, blogs }) => {
  const router = useRouter();

  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading...</PostTitle>
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
                {blog.created_at}
              </p>
            </div>
            {blog.content}
          </div>

          <div className="text-base md:text-sm text-gray-500 px-4 py-6">
            Tags:{" "}
            <a
              href="#"
              className="text-base md:text-sm text-green-500 no-underline hover:underline"
            >
              Link
            </a>{" "}
            .{" "}
            <a
              href="#"
              className="text-base md:text-sm text-green-500 no-underline hover:underline"
            >
              Link
            </a>
          </div>

          <hr className="border-b-2 border-gray-400 mb-8 mx-4" />

          <div className="font-sans flex justify-between content-center px-4 pb-12">
            <div className="text-left">
              <span className="text-xs md:text-sm font-normal text-gray-600">
                &lt; Previous Post
              </span>
              <br />
              <p>
                <a
                  href="#"
                  className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
                >
                  Blog title
                </a>
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs md:text-sm font-normal text-gray-600">
                Next Post &gt;
              </span>
              <br />
              <p>
                <a
                  href="#"
                  className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
                >
                  Blog title
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// export const getStaticProps: GetStaticProps = async ({
//   params,
//   preview = false,
//   previewData,
// }) => {
//   const data =
// }

export default Blog;
