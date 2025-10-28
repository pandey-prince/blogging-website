import { useEffect, useState } from "react";

import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Blog {
  content: string;
  title: string;
  id: string;
  author: { name: string };
}
export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("response", response);
        setBlog(response.data.post);
        setLoading(false);
      });
    // console.log("blogs", blogs);
  }, [id]);
  return { loading, blog };
};
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("response", response);
        setBlogs(response.data.posts);
        setLoading(false);
      });
    console.log("blogs", blogs);
  }, []);
  return { loading, blogs };
};
