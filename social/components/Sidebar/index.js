import React, { useState } from "react";
import Channels from "./Channels";

import { BellAlertIcon } from "@heroicons/react/24/outline";
import Action from "./Action";

const DATA_CHANNEL = [
  { id: 1, image: "/dalle-1.webp" },
  { id: 2, image: "/dalle-2.webp" },
  { id: 3, image: "/dalle-1.webp" },
  { id: 4, image: "/dalle-2.webp" },
  { id: 5, image: "/dalle-1.webp" },
];

function index() {
  const [ActiveChannel, setActiveChannel] = useState(3);

  return (
    <div className="flex flex-col w-72 sticky h-screen top-0">
      <div className="bg-[#32363a] flex items-center justify-center text-3xl py-3">
        <b>Sociality</b>.io
      </div>
      <div className="flex h-screen">
        <div className="bg-[#2b2f33] w-20  space-y-5">
          {DATA_CHANNEL.map((i, index) => (
            <div key={index} className="flex">
              {ActiveChannel === i.id ? (
                <div className="border-r-8 my-2 rounded-r-lg"></div>
              ) : null}
              <Channels image={i.image} id={i.id} state={setActiveChannel} />
            </div>
          ))}
        </div>
        <div className=" w-52 bg-[#3a3d41] h-full">
          <div className="flex justify-between items-center my-6  ml-4">
            <div className="flex space-x-2 items-center">
              <BellAlertIcon className="w-6 h-6 text-red-400" />
              <h4 className="uppercase text-white text-sm">NOTIFICATIONS</h4>
            </div>
            <span className="border border-white mr-2 px-2 rounded-md text-white">
              24
            </span>
          </div>
          <div className="flex justify-between items-center my-6 px-4 space-x-2">
            <Action />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
