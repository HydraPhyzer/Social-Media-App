import React from "react";
import AddPost from "./AddPost";
import Stories from "./Stories";
const MainPage = () => {
  return (
    <div className="sm:w-[80%] w-[95vw] p-2 flex flex-col mx-auto relative">
      <div className="bg-white my-5 w-[100%] rounded-md overflow-x-scroll flex Scroll">
        <Stories />
      </div>

      <div className="w-[100%]">
        <AddPost />
      </div>
    </div>
  );
};

export default MainPage;
