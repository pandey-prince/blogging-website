import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}
export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b p-4 border-slate-200 pb-4 w-screen max-w-5xl cursor-pointer">
        <div className="flex">
          <Avatar authorName={authorName} />

          <div className="font-extralight flex justify-center flex-col pl-2 text-sm ">
            {authorName} .
          </div>
          <div className="pl-2 font-thin flex justify-center flex-col text-slate-500 text-sm">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">
          {content.slice(0, 100) + "...."}
        </div>
        <div className="text-slate-500 pt-4 text-sm font-thin">{`${Math.ceil(
          content.length / 100
        )}minutes`}</div>
        {/* <div className="bg-slate-200 h-1 w-full"></div> */}
      </div>
    </Link>
  );
};
