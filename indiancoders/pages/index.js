import MidPage from "../components/MidPage";
import Head from "next/head";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Indian Coders: Platform For In Depth Coding Courses</title>{" "}
        <meta
          name="description"
          content="Welcome to Indian Coders, Platform to Learn Coding and Programming with in depth courses"
        />
      </Head>
      <Cards />
    </>
  );
}
