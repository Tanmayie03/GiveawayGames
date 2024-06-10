import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <Link to={`/CardId/${props.id}`}>
      <div className="text-white border-2 rounded-md shadow-md w-80 hover:bg-stone-950 border-stone-900 bg-stone-800 h-fit bg-opacity-70 card">
        <div key={props.id}>
          <img
            src={props.thumbnail}
            alt={props.title}
            className="w-full mb-2 rounded"
          />
          <div className="p-4">
            <div className="my-2 text-lg font-semibold line-clamp-1 text-ellipsis">
              {props.title}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center py-1 rounded w-fit ">
                <span className="text-gray-400 line-through ">
                  {props.worth}
                </span>
                <p className="pl-2 text-green-400 rounded-sm w-fit">Free</p>
              </div>
              <div className="px-4 py-[2px] mx-3 text-[15px] text-center rounded-full bg-gray-400 w-fit">
                {props.type}
              </div>
            </div>
            <div className="my-2 text-gray-300 line-clamp-2">
              {props.description}
            </div>
            <div className="flex items-center my-4 ">
              <div className="flex items-center px-4 py-1 border-2 rounded w-fit hover:bg-gradient-to-tr from-green-400 via-cyan-400 to-blue-400 border-cyan-500">
                <a href={props.open_giveaway} target="_blank">
                  <p className="rounded-sm w-fit">Claim now</p>
                </a>
              </div>
              <div className="flex items-center ml-2 text-gray-400 ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="25px"
                    viewBox="0 0 32 32"
                    className="w-5 mr-1 ">
                    <path
                      fill="currentColor"
                      d="M12 16.14h-.87a8.67 8.67 0 0 0-6.43 2.52l-.24.28v8.28h4.08v-4.7l.55-.62l.25-.29a11 11 0 0 1 4.71-2.86A6.59 6.59 0 0 1 12 16.14"
                      className="clr-i-solid clr-i-solid-path-1"
                    />
                    <path
                      fill="currentColor"
                      d="M31.34 18.63a8.67 8.67 0 0 0-6.43-2.52a10.47 10.47 0 0 0-1.09.06a6.59 6.59 0 0 1-2 2.45a10.91 10.91 0 0 1 5 3l.25.28l.54.62v4.71h3.94v-8.32Z"
                      className="clr-i-solid clr-i-solid-path-2"
                    />
                    <path
                      fill="currentColor"
                      d="M11.1 14.19h.31a6.45 6.45 0 0 1 3.11-6.29a4.09 4.09 0 1 0-3.42 6.33Z"
                      className="clr-i-solid clr-i-solid-path-3"
                    />
                    <path
                      fill="currentColor"
                      d="M24.43 13.44a6.54 6.54 0 0 1 0 .69a4.09 4.09 0 0 0 .58.05h.19A4.09 4.09 0 1 0 21.47 8a6.53 6.53 0 0 1 2.96 5.44"
                      className="clr-i-solid clr-i-solid-path-4"
                    />
                    <circle
                      cx="17.87"
                      cy="13.45"
                      r="4.47"
                      fill="currentColor"
                      className="clr-i-solid clr-i-solid-path-5"
                    />
                    <path
                      fill="currentColor"
                      d="M18.11 20.3A9.69 9.69 0 0 0 11 23l-.25.28v6.33a1.57 1.57 0 0 0 1.6 1.54h11.49a1.57 1.57 0 0 0 1.6-1.54V23.3l-.24-.3a9.58 9.58 0 0 0-7.09-2.7"
                      className="clr-i-solid clr-i-solid-path-6"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </span>
                <div className="text-xs">{props.users}+ Claimed </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  worth: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  users: PropTypes.number.isRequired,
  open_giveaway: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
