import Image from "next/image";
import React from "react";
import {
  TrashIcon,
  DocumentDuplicateIcon,
  NoSymbolIcon,
  PencilSquareIcon,
  Bars4Icon,
  PhotoIcon,
  HandThumbUpIcon,
  ChatBubbleLeftRightIcon,
  ArrowUpOnSquareIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedinIn } from "react-icons/fa";

export function PostStat(Icon, count) {
  return (
    <div className="flex">
      <Icon className="w-6 h-6 mr-2 text-gray-500" />
      <p>{count}</p>
    </div>
  );
}

function  PostMockup() {
  const [status, setStatus] = React.useState("success");

  const changeStatus = () => {
    if (status === "success") {
      setStatus("success");
    } else if (status === "error") {
      setStatus("error");
    } else if (status === "alert") {
      setStatus("alert");
    } else if (status === "info") {
      setStatus("info");
    }

    // Alert amber 300 Information indigo-400
  };

  return (
    <div className="flex justify-center items-center px-20 space-x-10 bg-zinc-300/50 dark:bg-zinc-500">
      <div className="mb-5 mr-5">
        <div className="flex flex-col space-y-4">
          <h3 className="dark:text-white text-5xl">
            I used Hero Icons for new design.
          </h3>
          <p className="dark:text-white text-2xl">
            It&apos;s fits for all platforms and i used that set for few project.
          </p>
          <p className="dark:text-white text-2xl">
            Because of that i can find easily an icon that i need.
          </p>

          <div className="flex items-center justify-start space-x-2">
            <button
              className={`bg-green-400 w-32 py-4 p-2 rounded-md text-white`}
              onClick={() => setStatus("success")}
            >
              <p>Success</p>
            </button>
            <button
              className={`bg-red-400 w-32 py-4 p-2 rounded-md text-white`}
              onClick={() => setStatus("error")}
            >
              Error / Warning
            </button>
            <button
              className={`bg-amber-300 w-32 py-4 p-2 rounded-md text-white`}
              onClick={() => setStatus("alert")}
            >
              Alert
            </button>
            <button
              className={`bg-indigo-400 w-32 py-4 p-2 rounded-md text-white`}
              onClick={() => setStatus("info")}
            >
              Information
            </button>
          </div>
          <div className="flex items-center justify-start space-x-2">
            <p className="p-2 py-4 w-32 dark:text-white text-center border-2 border-gray-400 rounded-md">
              #4ade80
            </p>
            <p className="p-2 py-4 w-32 dark:text-white text-center border-2 border-gray-400 rounded-md">
              #f87171
            </p>
            <p className="p-2 py-4 w-32 dark:text-white text-center border-2 border-gray-400 rounded-md">
              #fcd34d
            </p>
            <p className="p-2 py-4 w-32 dark:text-white text-center border-2 border-gray-400 rounded-md">
              #818cf8
            </p>
          </div>
          <div>
            <p className="dark:text-white text-2xl pr-20">
              I choosed theese color tones for status<br/> Because they are describe
              what they have to do well, they look sweet.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[600px] h-full border-0 my-10 rounded-lg overflow-hidden bg-white">
        <div
          className={`flex justify-between items-center p-5 text-3xl  
          ${status === "success" && "bg-green-400"}
          ${status === "error" && "bg-red-400"}
          ${status === "alert" && "bg-amber-300"}
          ${status === "info" && "bg-indigo-400"}
          
          `}
        >
          <div className="text-white">
            <PhotoIcon className="h-6 w-6" />
          </div>
          <div
            className={`flex space-x-3 ${
              status === "success" && "text-gray-500"
            }
            ${status === "error" && "text-zinc-300"}
            ${status === "alert" && "text-gray-500"}
            ${status === "info" && "text-zinc-300"}
            `}
          >
            <TrashIcon className="h-6 w-6 " />

            <PencilSquareIcon className="h-6 w-6" />
            <NoSymbolIcon className="h-6 w-6" />
            <DocumentDuplicateIcon className="h-6 w-6" />
            <Bars4Icon className="h-6 w-6" />
          </div>
        </div>
        <div
          className={`border-x-2 border-black border-b-2 rounded-b-md dark:bg-zinc-400
         ${status === "success" && "border-green-400"}
         ${status === "error" && "  border-red-400"}
         ${status === "alert" && "  border-amber-300"}
         ${status === "info" && "   border-indigo-400"}
        `}
        >
          <div className="flex p-5">
            <div className="p-2  border  mr-5">
              <div className="w-16 h-16 relative">
                <Image src="/avatar.jpeg" objectFit="cover" layout="fill" />
                <div className="absolute -bottom-4 -right-4 bg-[#0072b1] rounded-full">
                  <FaLinkedinIn className="text-white  text-4xl w-8 h-8 px-2 py-1" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-2xl">Social Orientation</h1>
              <p className="text-gray-400 dark:text-gray-900">28 September 2022 00:37</p>
            </div>
          </div>
          <div className="px-5 flex flex-col flex-1">
            <h2 className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
              ornare arcu odio ut sem nulla pharetra. Natoque penatibus et
              magnis dis parturient montes nascetur ridiculus.
            </h2>
            <div className="relative  h-[400px] my-5">
              <Image src="/dalle-1.webp" objectFit="cover" layout="fill" />
            </div>
            <div className="flex justify-center items-center mb-4 ">
              <div className="border-y flex space-x-8 py-4 px-4 border-gray-300">
                {PostStat(HandThumbUpIcon, 10)}
                {PostStat(ChatBubbleLeftRightIcon, 2)}
                {PostStat(ArrowUpOnSquareIcon, 3)}
                {PostStat(EyeIcon, 23)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostMockup;
