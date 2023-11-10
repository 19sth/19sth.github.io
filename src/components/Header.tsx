import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="border-b-2 border-yellow-300 h-16 flex items-end pb-1 px-2 justify-between">
      <a className="text-2xl" href="/">
        <span className="font-light">19</span>
        <span className="font-semibold">something</span>
      </a>
      <a
        className="text-sm flex"
        href="https://github.com/19sth"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hidden md:block">
          an open-source organization &nbsp;
        </span>
        <span>
          <FontAwesomeIcon
            icon={faCubes}
            className="w-6 md:w-4 pb-2 md:pb-0"
          />
        </span>
      </a>
    </div>
  );
}
