import React from "react";
import AddPost from "./AddPost";
import Stories from "./Stories";
const MainPage = () => {
  return (
    <div className="md:w-[80%] sm:w-[95%] w-[95vw] px-0 flex flex-col mx-auto relative">
      <div className="my-2 w-[100%] rounded-md overflow-x-scroll flex Scroll">
        <Stories />
      </div>

      <div className="w-[100%]">
        <AddPost />
      </div>
    </div>
  );
};

export default MainPage;
