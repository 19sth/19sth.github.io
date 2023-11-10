import Header from "@/components/Header";
import { allBlogs } from "contentlayer/generated";

export default function BlogPage() {
  const blogItems = allBlogs.map((blog) => (
    <div className="border-b-2 mb-5" key={"id_"+blog._id}>
      <a href={"/blog/" + blog._raw.flattenedPath}>
        <div className="flex justify-between items-begin">
          <div className="text-lg truncate">{blog.title}</div>
          <div className="text-xs text-gray-500 text-right min-w-fit">
            {new Date(blog.date).toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
        <div className="font-light text-sm py-3">{blog.summary}</div>
      </a>
    </div>
  ));
  return (
    <div className="mx-auto max-w-2xl px-4">
      <Header />
      <br></br>
      {blogItems}
    </div>
  );
}
