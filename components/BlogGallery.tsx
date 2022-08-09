import React from "react";

import Link from "next/link";
import { format } from "date-fns";

import { Pagination, IPaginationProps } from "./Pagination";
import { BlogItems } from "../utils/Content";

export type IBlogGalleryProps = {
  posts: BlogItems[];
};

const BlogGallery = (props: IBlogGalleryProps) => {
  const formatUtcDate = (date: string) => {
    const formatDate = new Date(date);

    return `${formatDate.getFullYear()} ${formatDate.toLocaleString("en-us", {
      month: "short",
    })} ${formatDate.getDate()}`;
  };

  return (
    <>
      <ul>
        {props.posts.map((elt) => (
          <li key={elt.id} className="mb-3 flex justify-between">
            <Link href="/posts/[slug]" as={`/posts/${elt.id}`}>
              <a>
                <h2>{elt.title}</h2>
              </a>
            </Link>

            <div className="text-right">{formatUtcDate(elt.created_at)}</div>
          </li>
        ))}
      </ul>

      {/* <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    /> */}
    </>
  );
};

export { BlogGallery };
