import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

const Footer: React.FC = () => {
  const date: Date = new Date();

  return (
    <Fragment>
      <div className="static inset-x-0 bottom-0 content-center py-6 ">
        <div className="flex flex-auto px-6 text-slate-400 gap-1.5 font-semibold ">
          <div className="grow h-16 "> </div>
          <div className="flex flex-col gap-1.5 items-center content-between ">
            <div className="flex flex-auto items-center gap-2 ">
              <FontAwesomeIcon icon={faCopyright} style={{ fontSize: 20 }} />
              <span>{"   " + date.getFullYear().toString() + "  "}</span>
              <span>Aaditya Chapagain</span>
            </div>
            <div className="ml-2 ">All Rights Reserved</div>
          </div>

          <div className="grow h-16 "> </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
