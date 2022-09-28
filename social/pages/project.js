import React, { useState } from "react";
import FeedCard from "../components/FeedCard";
import Sidebar from "../components/Sidebar";
import Moment from "react-moment";
import Image from 'next/image';
// creating another comp for status

function Status({ title, color }) {
  return (
    <div className="flex items-center space-x-2">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <p>{title}</p>
    </div>
  );
}

function project(props) {
  const post = props.posts.posts_by_date;
  const dates = Object.keys(post);
  const values = Object.values(post);

  console.log(values[0]);
  return (
    <div className="flex relative">
      <Sidebar />
      <div className="bg-[#f6f7f8] w-full flex flex-col">
       <div className="flex items-center justify-between">
       <div className="flex items-center space-x-4 m-5">
          <Status title="Published" color="bg-[#acacac]" />
          <Status title="Scheduled" color="bg-[#65be88]" />
          <Status title="Need Approval" color="bg-[#eec054]" />
          <Status title="Error" color="bg-[#e96e58]" />
          <Status title="Notes" color="bg-[#74a7e1]" />
        </div>
        <div className="mr-5 relative h-12 w-12 rounded-full overflow-hidden m-2 cursor-pointer">
          <Image src='/avatar.jpeg' layout="fill" objectFit="cover" />
        </div>
       </div>
        <div className="flex flex-col">
          {dates.map((i, index) => (
            <div key={index}>
              <h2 className="text-xl text-zinc-500 m-5"><Moment format="DD MMMM YYYY" withTitle={true}>
              {i}
            </Moment></h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mx-5 ">
                {values[index].map((j, index) => (
                  <div key={index}>
                    <FeedCard
                      publishedAt={j.published_at}
                      isPublished={j.is_published}
                      Status={j.status}
                      Entry={j.entry}
                      Update={j.updated_at}
                      Created={j.created_at}
                      Linkhref={j.link}
                      Channel={j.channel}
                      Account={j.account}
                    />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default project;

export async function getStaticProps(context) {
  const posts = {
    posts_by_date: {
      "2021-06-17": [
        {
          published_at: "2021-06-17 08:40:52",
          is_published: true,
          status: 3,
          entry: {
            type: "photo",
            message:
              "Lorem ipsum dolor sit amet, consecteturat\r\n adipiscing elit, sed do eiusmod tempor \r\nincididunt? http://bit.ly/145HD7S ",
            image: [
              "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab486274592018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg",
            ],
            video: null,
          },
          updated_at: "2021-06-17 08:41:13",
          created_at: "2021-06-17 08:40:52",
          link: "https://www.instagram.com/p/CQNwbu4K7DU/",
          account: {
            name: "Social Orientation",
            username: "socialorientation_test",
            image: "cfe8008ac103ab6686983a449d1a7c3e.jpg",
            link: "https://www.instagram.com/socialorientation_test",
            channel: "instagrambusiness",
          },
        },
        {
          published_at: "2021-06-17 08:40:52",
          is_published: true,
          status: 3,
          entry: {
            type: "photo",
            message:
              "Lorem ipsum dolor sit amet, consecteturat\r\n adipiscing elit, sed do eiusmod tempor \r\nincididunt? http://bit.ly/145HD7S ",
            image: [
              "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg",
            ],
          },
          updated_at: "2021-06-17 08:41:15",
          created_at: "2021-06-17 08:40:52",
          link: "https://twitter.com/smorientation/status/1405445424404746242",
          account: {
            name: "Social Orientation",
            username: "smorientation",
            image: "4b20564176a222d0ed94b60c51c69490.jpg",
            link: "https://twitter.com/smorientation",
            channel: "twitter",
          },
        },
        {
          published_at: "2021-06-17 08:40:50",
          is_published: true,
          status: 3,
          entry: {
            type: "photo",
            message:
              "Lorem ipsum dolor sit amet, consecteturat\r\n adipiscing elit, sed do eiusmod tempor \r\nincididunt? http://bit.ly/145HD7S ",
            image: [
              "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg",
            ],
          },
          updated_at: "2021-06-17 08:41:01",
          created_at: "2021-06-17 08:40:50",
          link: "https://www.facebook.com/471462903187593/posts/1436830046650869",
          account: {
            name: "Social Orientation",
            username: "socialorientation",
            image: "79d84aa0c62f1b1985f940bca642bfb4.png",
            link: "https://www.facebook.com/471462903187593",
            channel: "facebook",
          },
        },
      ],
      "2021-07-01": [
        {
          published_at: "2021-07-01 00:00:00",
          is_published: false,
          status: 1,
          entry: {
            type: "photo",
            message:
              "Lorem ipsum dolor sit amet, consecteturat \r\nadipiscing elit, sed do eiusmod.",
            image: [
              "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_oD3qc1vlVTmg8pwWaJ.jpeg",
            ],
          },
          updated_at: "2021-06-17 08:42:18",
          created_at: "2021-06-17 08:42:18",
          account: {
            name: "Social Orientation",
            username: "socialorientation",
            image: "79d84aa0c62f1b1985f940bca642bfb4.png",
            link: "https://www.facebook.com/471462903187593",
            channel: "facebook",
          },
        },
        {
          published_at: "2021-07-01 00:00:00",
          is_published: false,
          status: 0,
          entry: {
            type: "photo",
            message:
              "Lorem ipsum dolor sit amet, consecteturat \r\nadipiscing elit, sed do eiusmod.",
            image: [
              "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_qPJUrz2XxgneyAplXE.jpeg",
            ],
          },
          updated_at: "2021-06-17 08:42:44",
          created_at: "2021-06-17 08:42:44",
          account: {
            name: "Social Orientation",
            username: "smorientation",
            image: "4b20564176a222d0ed94b60c51c69490.jpg",
            link: "https://twitter.com/smorientation",
            channel: "twitter",
          },
        },
      ],
    },
  };

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
