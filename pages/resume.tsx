import {
  faEnvelope,
  faGlobe,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";

const resumePage: React.FC = ({}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Tech, life, uprising , upbringing, futuristic logbook of aaditya chapagain made with love."
        />
        <meta property="og:title" content="My Personal website." />
        <meta
          property="og:description"
          content="my takes written all over in digital wallpaper."
        />
        <meta property="og:url" content="https://aadityachapagain.com/" />
        <meta property="og:type" content="website" />
        <title>Welcome to Aaditya Chapagain&apos;s notebook!</title>
      </Head>
      {/* Resume Content begins from here */}
      <div className="container min-screen-resume max-w-4xl m-auto px-4 font-serif ">
        <div className="text-2xl text-slate-700 tracking-wide">
          AADITYA CHAPAGAIN
        </div>
        <div className="font-semibold text-sm">
          Machine Learning Engineeer | Full Stack Developer
        </div>
        <div className="font-semibold text-sm ">
          Computer Science Student @ University of Wollongong
        </div>
        <div className="flex flex-auto gap-2  mt-2 ">
          <div className="flex flex-auto gap-3 ">
            <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: 20 }} />{" "}
            Wollongong, NSW, 2500
          </div>
          <Link
            className="flex flex-auto gap-3 "
            href={"mailto:aadityachapagain101@gmail.com"}
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 20 }} />{" "}
            aadityachapagain101@gmail.com
          </Link>
          <Link href={"https://aadityachapagain.com"}>
            <div className="flex flex-auto gap-3 ">
              <FontAwesomeIcon icon={faGlobe} style={{ fontSize: 20 }} />{" "}
              wwww.aadityachapagain.com
            </div>
          </Link>
        </div>
        <div className="flex flex-auto gap-2 mt-2 ">
          <Link
            href="https://www.linkedin.com/in/aadityachapagain/"
            className="flex flex-auto gap-3"
          >
            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 20 }} />{" "}
            https://www.linkedin.com/in/aadityachapagain/
          </Link>
          <Link
            href="https://github.com/aadityachapagain/"
            className="flex flex-auto gap-3"
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20 }} />{" "}
            aadityachapagain
          </Link>
        </div>
        <div className="h-2 p-2 ">{""}</div>
        <div className="flex flex-row gap-10 mt-2 ">
          <div className="w-1/2 ">
            <div className="flex flex-col gap-4 ">
              {/* Experience section */}
              <div className="">
                <div className="font-semibold text-xl mb-1 ">EXPERIENCE</div>
                <div className="h-0.5 bg-gray-500 "></div>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="flex flex-col gap-4 ">
              {/* Education section */}
              <div className="">
                <div className="font-semibold text-xl mb-1 ">EDUCATION</div>
                <div className="h-0.5 bg-gray-500 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default resumePage;
