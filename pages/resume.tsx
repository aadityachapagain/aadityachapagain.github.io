import {
  faEnvelope,
  faGlobe,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import distanceToNow from "../lib/dateRelative";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import NewTabLink from "../components/newtabLink";

const resumePage: React.FC = ({}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const PrintRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handlePrint = useReactToPrint({
    content: () => PrintRef.current
  });

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

      <div className="container max-w-4xl m-auto px-4 flex flex-row mb-10">
        <div>
          <button onClick={handlePrint} className="hover-blue-btn">
            Print My Resume
          </button>
        </div>
        <div className="grow h-full"></div>
      </div>
      {/* Resume Content begins from here */}
      <div
        ref={PrintRef}
        className=" py-8 min-screen-resume max-w-5xl m-auto px-12 font-serif "
      >
        <div className="text-2xl text-slate-700 tracking-wide">
          AADITYA CHAPAGAIN
        </div>
        <div className="font-semibold text-sm">
          Machine Learning Engineer | Full Stack Developer
        </div>
        <div className="font-semibold text-sm ">
          Computer Science Student @ University of Wollongong
        </div>
        <div className="flex flex-row gap-4 justify-start mt-2 ">
          <div className="flex gap-3 ">
            <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: 20 }} />{" "}
            Wollongong, NSW, 2500
          </div>
          <NewTabLink
            className="flex flex-auto gap-3 "
            href={"mailto:connect@aadityachapagain.com"}
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 20 }} />{" "}
            <p>connect@aadityachapagain.com</p>
          </NewTabLink>
          <NewTabLink
            href={"https://aadityachapagain.com"}
            className="flex flex-auto gap-3 "
          >
            <FontAwesomeIcon icon={faGlobe} style={{ fontSize: 20 }} />{" "}
            <p>wwww.aadityachapagain.com</p>
          </NewTabLink>
        </div>
        <div className="flex flex-auto gap-2 mt-2 ">
          <NewTabLink
            href="https://www.linkedin.com/in/aadityachapagain/"
            className="flex flex-auto gap-3"
          >
            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 20 }} />{" "}
            https://www.linkedin.com/in/aadityachapagain/
          </NewTabLink>
          <NewTabLink
            href="https://github.com/aadityachapagain/"
            className="flex flex-auto gap-3"
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20 }} />{" "}
            aadityachapagain
          </NewTabLink>
        </div>
        {/* summary section here */}
        <div className="text-sm font-sans mt-4 text-stone-700">
          <div>
            Machine Learning Engineer skilled in Natural Language Processing
            with {distanceToNow(new Date("2019-04-01 12:00"), false)} of
            experience of prototyping Intelligent machine learning platform and
            transforming any startup ideas into production grade solutions.
          </div>
          <div className="mt-1.5 ">
            Analytical, client-focused, detail-oriented, problem-solving
            professional with strong technical skills and the ability to grasp
            the concept very quickly.
          </div>
        </div>
        <div className="h-2 p-2 ">{""}</div>
        <div className="flex flex-row gap-10 mt-2 ">
          <div className="w-1/2 ">
            <div className="flex flex-col gap-4 ">
              {/* Experience section */}
              <div className="">
                <div className="font-semibold text-xl mb-1 ">EXPERIENCE</div>
                <div className="h-0.5 bg-gray-500 "></div>
                <div className="mb-1.5 ">
                  <div className="font-semibold mt-2 ">
                    Data Engineer - Cloud Shuttle{" "}
                  </div>
                  <div className="flex flex-row justify-around ">
                    <div className="flex flex-auto text-base items-center gap-4 ">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ fontSize: 16 }}
                      />
                      <span>Jan 2023 - Current </span>
                    </div>
                    <div className="flex flex-auto text-base items-center gap-4 ">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ fontSize: 16 }}
                      />
                      <span>Sydney, Australia</span>
                    </div>
                  </div>
                </div>
                <div className="h-0.5 border-b border-dashed border-zinc-500  "></div>
                <div className="mb-1.5 ">
                  <div className="font-semibold mt-2 ">
                    Software Developer - WebTec Solutions{" "}
                  </div>
                  <div className="flex flex-row justify-around">
                    <div className="flex flex-auto text-base items-center gap-4 ">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ fontSize: 16 }}
                      />
                      <span>July 2022 - Jan 2023 </span>
                    </div>
                    <div className="flex flex-auto text-base items-center gap-4 ">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ fontSize: 16 }}
                      />
                      <span>Canberra, Australia</span>
                    </div>
                  </div>
                </div>
                <div className="h-0.5 border-b border-dashed border-zinc-500  "></div>
                <div className="mb-1.5">
                  <div className="font-semibold mt-2 ">
                    Machine Learning Engineer III - Fusemachines Nepal{" "}
                  </div>
                  <div className="flex flex-row justify-around">
                    <div className="flex flex-auto text-base items-center gap-4 ">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ fontSize: 16 }}
                      />
                      <span>April 2019 - June 2022 </span>
                    </div>
                    <div className="flex flex-auto text-base items-center gap-4 ">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ fontSize: 16 }}
                      />
                      <span>Kathmandu, Nepal</span>
                    </div>
                  </div>
                </div>
                <div className="h-0.5 border-b border-dashed border-zinc-500  "></div>
                <div>
                  <div className="font-semibold mt-2 ">
                    ML Intern - Leapfrog Technology{" "}
                  </div>
                  <div className="flex flex-row justify-around ">
                    <div className="flex flex-auto text-base items-center gap-4 ">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ fontSize: 16 }}
                      />
                      <span>Jan 2019 - March 2019 </span>
                    </div>
                    <div className="flex flex-auto text-base items-center gap-4 ">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ fontSize: 16 }}
                      />
                      <span>Kathmandu, Nepal</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Technical Skills */}
              <div className="">
                <div className="font-semibold text-xl mb-1 ">Skills</div>
                <div className="h-0.5 bg-gray-500 "></div>
                <div className="mt-1.5 text-sm">
                  <ul className="list-disc">
                    <li>
                      <b>Python Machine Learning tools:</b> Keras, Pytorch, JIT,
                      HuggingFace, Pandas, Scikit-Learn, Spacy{" "}
                    </li>
                    <li>
                      <b>Backend Technologies:</b> FastAPI, Django, Golang
                    </li>
                    <li>
                      <b>Frontend Technologies:</b> Nextjs, React, tailwindcss,
                      Js
                    </li>
                    <li>
                      <b>Deep Learning Domain:</b> Natural Language Processing,
                      Computer Vision, Semi-Supervised Learning
                    </li>
                    <li>
                      <b>Databases:</b> MySQL, Bigquery, DynamoDB, MongoDB,
                      Postgres
                    </li>
                    <li>
                      <b>Devops Technologies: </b> Docker, Github actions,
                      terraform, aws-cdk,
                    </li>
                    <li>
                      <b>hobbyist technologies: </b> Rustlang, Golang,
                      DeepLearning
                    </li>
                    <li>
                      <b>Others: </b>Jira , Git, Github
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="flex flex-col gap-4 ">
              {/* Education section */}
              <div className="">
                <div className="font-semibold text-xl mb-1 ">EDUCATION</div>
                <div className="h-0.5 bg-gray-500 "></div>
                <div className="mb-2 ">
                  <div className="font-semibold mt-2 ">
                    Masters of Computer Science{" "}
                  </div>
                  <div className="my-1 ">University of Wollongong</div>
                  <div className="flex flex-row justify-between ">
                    <div className="flex flex-auto text-base items-center gap-4 ">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ fontSize: 16 }}
                      />
                      <span>July 2023 - Current </span>
                    </div>
                    <div className="flex flex-auto text-base items-center gap-2 ">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ fontSize: 16 }}
                      />
                      <span>Wollongong, NSW , Australia</span>
                    </div>
                  </div>
                </div>
                <div className="h-0.5 bg-neutral-200 "></div>
                <div className="mb-2 ">
                  <div className="font-semibold mt-2 ">
                    Bachelors of Electronics and Communication Engineering{" "}
                  </div>
                  <div className="my-1 ">Tribhuvan University Nepal</div>
                  <div className="flex flex-row justify-between ">
                    <div className="flex flex-auto text-base items-center gap-4 ">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ fontSize: 16 }}
                      />
                      <span>June 2014 - December 2018 </span>
                    </div>
                    <div className="flex flex-auto text-base items-center gap-2 ">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ fontSize: 16 }}
                      />
                      <span>Kathmandu, Nepal</span>
                    </div>
                  </div>
                </div>
                <div className="h-0.5 bg-neutral-200 "></div>
                <div>
                  <div className="font-semibold mt-2 ">
                    Intermediates of Science{" ( Biology Major )"}
                  </div>
                  <div className="my-1 ">
                    Sainik Awasiya Mahavidyalaya, Bhaktapur , Nepal
                  </div>
                  <div className="flex flex-row justify-between ">
                    <div className="flex flex-auto text-base items-center gap-4 ">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ fontSize: 16 }}
                      />
                      <span>2012 - 2014</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Certifications */}
              <div className="">
                <div className="font-semibold text-xl mb-1 ">
                  CERTIFICATIONS
                </div>
                <div className="h-0.5 bg-gray-500 "></div>
                <div className="mt-1.5 text-sm ">
                  <ul className="flex flex-col gap-2 list-disc ">
                    <li>
                      <div className="font-semibold">
                        Natural Language Processing
                      </div>
                      <div className="flex flex-col">
                        <NewTabLink
                          className="font-thin text-xs"
                          href={
                            "https://www.coursera.org/account/accomplishments/certificate/93Q9C9DEKG5C"
                          }
                        >
                          https://www.coursera.org/account/accomplishments/certificate/93Q9C9DEKG5C
                        </NewTabLink>
                        <NewTabLink
                          className="font-thin text-xs"
                          href={
                            "https://www.coursera.org/account/accomplishments/certificate/M69JGBDMTMWR"
                          }
                        >
                          https://www.coursera.org/account/accomplishments/certificate/M69JGBDMTMWR
                        </NewTabLink>
                        <NewTabLink
                          className="font-thin text-xs"
                          href={
                            "https://www.coursera.org/account/accomplishments/verify/AQR9YUCS4QPE"
                          }
                        >
                          https://www.coursera.org/account/accomplishments/verify/AQR9YUCS4QPE
                        </NewTabLink>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-1.5 text-sm ">
                  <ul className="flex flex-col gap-2 list-disc ">
                    <li>
                      <div className="font-semibold">
                        Machine Learning and Deep Learning
                      </div>
                      <div className="flex flex-col">
                        <NewTabLink
                          className="font-thin text-xs"
                          href={
                            "https://www.coursera.org/account/accomplishments/certificate/Z34F9TSHMAB9"
                          }
                        >
                          https://www.coursera.org/account/accomplishments/certificate/Z34F9TSHMAB9
                        </NewTabLink>
                        <NewTabLink
                          className="font-thin text-xs"
                          href={
                            "https://www.coursera.org/account/accomplishments/verify/WREGBKEZSPFB"
                          }
                        >
                          https://www.coursera.org/account/accomplishments/verify/WREGBKEZSPFB
                        </NewTabLink>
                        <NewTabLink
                          className="font-thin text-xs"
                          href={
                            "https://www.coursera.org/account/accomplishments/verify/YZAEL97XWQBP"
                          }
                        >
                          https://www.coursera.org/account/accomplishments/verify/YZAEL97XWQBP
                        </NewTabLink>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-1.5 text-sm ">
                  <ul className="flex flex-col gap-2 list-disc ">
                    <li>
                      <div className="font-semibold">
                        Databricks Certified Data Engineer Associate
                      </div>
                      <div className="flex flex-col">
                        <NewTabLink
                          className="font-thin text-xs"
                          href={
                            "https://credentials.databricks.com/6bec6b0c-d965-4111-ad18-416b5fbcbb70"
                          }
                        >
                          https://credentials.databricks.com/6bec6b0c-d965-4111-ad18-416b5fbcbb70
                        </NewTabLink>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-1.5 text-sm ">
                  <ul className="flex flex-col gap-2 list-disc ">
                    <li>
                      <div className="font-semibold">
                        TensorFlow Developer Certificate
                      </div>
                      <div className="flex flex-col">
                        <NewTabLink
                          className="font-thin text-xs"
                          href={
                            "https://www.credential.net/8b27ce74-5170-45a3-a5c5-91e5d8b5940b"
                          }
                        >
                          https://www.credential.net/8b27ce74-5170-45a3-a5c5-91e5d8b5940b
                        </NewTabLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default resumePage;
