import React from "react";
import EachNotification from './EachNotification'

const FriendsSidebar = () => {
  return (
    <div className="p-2 space-y-2 flex flex-col h-[100%] Scroll">
      <div className="h-[100%] flex flex-col justify-center ">
        <EachNotification props="" />
      </div>
      {/* <EachNotification props="Name"/>
      <EachNotification props="Name"/> */}
    </div>
  );
};

export default FriendsSidebar;
