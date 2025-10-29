import { Appbar } from "../components/Appbar";
import { useNavigate } from "react-router-dom";
import homePhoto from "../assets/homePhoto.webp";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <Appbar />
      <div className="grid grid-cols-3  w-full ">
        <div className=" h-full  px-10  pt-20 pb-10 col-span-2">
          <div className="text-8xl text-black  ">
            <div className="mb-3 "> Humans </div>
            <div>Stories & Ideas</div>
          </div>
          <div className="py-10 text-3xl ">
            A place to read, write, and deepen your understanding
          </div>
          <button
            onClick={() => {
              navigate("/signin");
            }}
            type="button"
            className="text-white bg-green-700 cursor-pointer hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-md px-12  py-4 me-2 mb-2 mt-5 "
          >
            Start Reading
          </button>
        </div>
        <div className="pr-5">
          <img src={homePhoto} alt="Homepage img" />
        </div>
      </div>
    </div>
  );
};
