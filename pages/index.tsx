import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

// Import common components
import AnimatedBackground from "../components/common/AnimatedBackgroud";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

// Import section components
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Certifications from "../components/sections/Certifications";
import Skills from "../components/sections/Skills";
import Blogs from "../components/sections/Blogs";
import Contact from "../components/sections/Contact";

// Import server-side data fetching functions
import { getAllPosts } from "../lib/getPost";
import markdownToHtml from "../lib/markdownToHtml";
import { getRandomTechImage } from "../lib/imageUtils";
import { BlogPost } from "../components/sections/Blogs/types";

// Define props type
interface HomePageProps {
  blogPosts: BlogPost[];
}

const HomePage: React.FC<HomePageProps> = ({ blogPosts }) => {
  return (
    <div className="bg-[#070717] text-white min-h-screen overflow-x-hidden w-full ">
      <Head>
        <title>
          Aaditya Chapagain | Machine Learning Engineer & Full Stack Developer
        </title>
        <meta
          name="description"
          content="Portfolio of Aaditya Chapagain, Machine Learning Engineer and Full Stack Developer specializing in NLP, Computer Vision, and web development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatedBackground
        particleCount={100}
        maxConnectionDistance={100}
        particleColors={[
          "rgba(137, 96, 223, 0.5)",
          "rgba(108, 78, 187, 0.3)",
          "rgba(79, 58, 138, 0.2)"
        ]}
        lineColor="rgba(90, 70, 150, 0.1)"
      />

      <NavBar />

      <main>
        <About />
        <Education />
        <Experience />
        <Certifications />
        <Skills />
        <Blogs blogPosts={blogPosts} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

// Server-side data fetching
export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();

  // Process each post to add required fields
  const blogPosts = await Promise.all(
    allPosts.map(async post => {
      const summary = await markdownToHtml(post.summary || "");

      return {
        slug: post.slug,
        title: post.title,
        summary: summary,
        date: post.date,
        author: post.authors || "Aaditya Chapagain",
        tags: post.tags ? post.tags.split(",").map(tag => tag.trim()) : [],
        // @ts-ignore
        coverImage: post.coverImage || getRandomTechImage()
      };
    })
  );

  // Sort by date (newest first)
  blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    props: {
      blogPosts: blogPosts.slice(0, 3) // Get the 3 most recent posts
    },
    // Re-generate the page at most once per day
    revalidate: 86400
  };
};

export default HomePage;
