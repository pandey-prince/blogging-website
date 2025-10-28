import { Appbar } from "./Appbar";
import type { Blog } from "../hooks";
import { Avatar } from "./Avatar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full pt-5 max-w-screen-2xl">
          <div className="col-span-8 pl-20 ">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500">Post on 2nd Dec 2025</div>
            <div className="text-slate-500 pt-2">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-lg text-slate-600">Author</div>
            <div className="flex">
              <div className="flex flex-col justify-center">
                <Avatar authorName={blog.author.name || "Anonmyous"} />
              </div>
              <div>
                <div className="text-lg font-bold">{blog.author.name}</div>
                <div className="pt-2 pr-20 text-slate-500">
                  Random catch phrase to grab user attention Random catch phrase
                  to grab user attention{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
