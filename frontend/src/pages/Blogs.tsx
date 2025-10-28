import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";
import { BlogSkelton } from "../components/BlogSkelton";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  console.log("blogstsx", blogs);
  console.log("loading", loading);

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-ce">
          <BlogSkelton />
          <BlogSkelton />
          <BlogSkelton />
          <BlogSkelton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              authorName={"Anonmoyus"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd feb 2024"}
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
