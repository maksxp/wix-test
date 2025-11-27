import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold underline mb-4">CARD WIX</p>
      <Link
        to="/"
        className="text-blue-500 hover:underline text-xl"
      >
        To Home
      </Link>
    </div>
  );
};

export default Card;