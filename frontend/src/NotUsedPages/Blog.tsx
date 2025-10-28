import { useEffect, useState } from "react";
export const Blog = (id: string) => {
  const [blog, setBlog] = useState();
  useEffect(() => {}, []);
  return (
    <div className="flex-4 flex flex-row px-10 py-10 pb-55 w-full ">
      <div id="left-child" className="flex-3 flex flex-col">
        <div id="heading" className="text-5xl font-bold mb-5">
          Taxing Laugher: The Joke Tax Chronicles
        </div>
        <div id="content" className="text-xl pr-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          sequi, modi dolor fuga eaque culpa recusandae sapiente, perferendis
          nemo voluptates fugiat quod error amet temporibus! Voluptates sapiente
          sequi nam iure? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Qui cum totam similique quidem asperiores sed accusamus
          voluptate amet rerum sunt iste illum officia, sapiente, expedita quo
          aperiam provident, magni atque? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. At error praesentium necessitatibus non ab et animi
          eum a assumenda iusto, voluptatibus dolorum incidunt corporis. Ullam
          doloremque quidem corrupti natus dignissimos.
        </div>
      </div>
      <div id="right-child" className="flex-1 py-5">
        <p className="font-semibold">Author</p>
        <div className="  mt-10 px-5">
          <p className="text-2xl font-bold ">Jokester</p>
          <p>
            Master of mirth,purveyor of puns,and the funniest person in the
            kingdom{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
