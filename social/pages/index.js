import Head from "next/head";
import Link from "next/link";

function NavigationCard({ title, description, link }) {
  return (
    <div className="mx-auto w-10/12">
      <div className="flex flex-col w-full justify-between p-8  bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-all">
        <Link href={link}>
          <div className="text-center">
            <h3 className="text-2xl font-bold my-2 uppercase">
              {title}
            </h3>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oğuz Berk Açar</title>
        <meta
          name="description"
          content="This is a demo project for sociality.io"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-zinc-50/50 dark:bg-zinc-800 dark:text-white h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-center items-center w-full">
          <div className="w-full">
            <NavigationCard
              link="/presentation"
              title="Presentation"
              description={"Presentation for Sociality.io"}
            />
          </div>
          <div className="w-full">
            <NavigationCard
              link="/posts"
              title="deneme"
              description={"deneme for Sociality.io"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
