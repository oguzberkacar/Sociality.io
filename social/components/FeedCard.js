import {
  TrashIcon,
  EllipsisHorizontalCircleIcon,
  NoSymbolIcon,
  HandThumbUpIcon,
  ChatBubbleLeftRightIcon,
  ArrowUpOnSquareIcon,
  EyeIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import Moment from "react-moment";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// Function to render post stats
function PostStat(Icon, count) {
  return (
    <div className="flex items-center">
      <Icon className="w-3 h-3 xl:h-4 xl:w-4 mr-2 text-gray-500 cursor-pointer hover:text-black" />
      <p className="text-xs xl:text-sm">{count}</p>
    </div>
  );
}

function FeedCard({
  publishedAt,
  isPublished,
  Status,
  Entry,
  Update,
  Created,
  Linkhref,
  Channel,
  Account,
}) {
  // removing https:// link from entrey message
  const message = Entry.message.replace(/https?:\/\/\S+/g, "");
  // geting the link from entry message
  let matches = Entry.message.match(/\bhttp?:\/\/\S+/gi);

  // link state for handling error
  const [link, setLink] = useState(Entry.image[0]);

  return (
    <div className="flex w-full border-2 max-w-xs  overflow-hidden rounded-xl ">
      <div
        className={`w-2/12 text-4xl flex items-center justify-center
      ${Status === 0 && "bg-[#eec054]"}
        ${Status === 1 && "bg-[#65be88]"}
        ${Status === 2 && "bg-[#74a7e1]"}
        ${Status === 3 && "bg-[#acacac]"}
        ${Status === 4 && "bg-[#e96e58]"}
      `}
      >
        {Account.channel === "facebook" && <FaFacebookF />}
        {Account.channel === "instagrambusiness" && <FaInstagram />}
        {Account.channel === "twitter" && <FaTwitter />}
      </div>
      <div className="w-10/12 p-5 flex flex-col bg-white space-y-2">
        <div className="flex items-center justify-between text-zinc-400">
          <p className="text-xs">
            <Moment format="DD MMMM YYYY - hh:mm" withTitle={true}>
              {Status === 3 ? publishedAt : Update}
            </Moment>
          </p>
          <div className="flex items-center space-x-2">
            {Status === 0 && <CheckIcon className="w-6 h-6 cursor-pointer" />}
            {Status === 1 && (
              <NoSymbolIcon className="h-6 w-6 cursor-pointer" />
            )}
            <TrashIcon className="w-6 h-6 cursor-pointer" />
            <EllipsisHorizontalCircleIcon className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
        <div className="">
          <h2 className="text-xs text-zinc-600 pt-4">
            {message}
            <a
              className="cursor-pointer text-blue-600"
              target={"_blank"}
              href={matches}
            >
              {matches}
            </a>
          </h2>
        </div>
        <div className="w-full h-44 relative" >
          <Image
            src={link}
            objectFit="cover"
            layout="fill"
            onError={() => {
              setLink("/no-post-image.png");
            }}
          />
        </div>
        <div className="flex justify-start items-center mb-4 ">
          <div className="flex space-x-2  py-4">
            {Status === 3 ? PostStat(HandThumbUpIcon,332) : PostStat(HandThumbUpIcon,0)} 
            {Status === 3 ? PostStat(ChatBubbleLeftRightIcon,32) : PostStat(ChatBubbleLeftRightIcon,0)}
            {Status === 3 ? PostStat(ArrowUpOnSquareIcon,312) : PostStat(ArrowUpOnSquareIcon,0)}
            {Status === 3 ? PostStat(EyeIcon,2) : PostStat(EyeIcon,0)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
