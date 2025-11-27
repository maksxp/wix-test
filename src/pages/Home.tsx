import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold underline mb-4">HOME WIX</p>
      <Link
        to="/card"
        className="text-blue-500 hover:underline text-xl"
      >
        Go to Card
      </Link>
    </div>
  );
};

export default Home;