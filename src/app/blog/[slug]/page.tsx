import { allBlogs } from "contentlayer/generated";
import BlogLayer from "../../../components/BlogLayer";

export const generateStaticParams = async () =>
  allBlogs.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: any }) => {
  const post = allBlogs.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post?.title };
};

export default function PostLayout({ params }: { params: any }) {
  const post = allBlogs.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return <BlogLayer content={post} />;
}
