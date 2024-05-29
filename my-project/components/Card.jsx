import PropTypes from "prop-types";
export default function Card(props) {
  return (
    <div className="p-4 mx-4 text-white bg-gray-700 rounded-lg shadow-md w-80 card">
      <div key={props.id}>
        <img
          src={props.thumbnail}
          alt={props.title}
          className="w-full mb-2 rounded"
        />
        <div className="mb-2 text-lg font-semibold line-clamp-2 text-ellipsis">
          {props.title}
        </div>
        <div className="mb-2">{props.worth}</div>
        <div className="text-gray-300 line-clamp-3 text-ellipsis">
          {props.description}
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  worth: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
