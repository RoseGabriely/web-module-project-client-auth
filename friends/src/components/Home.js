import React from "react";

const Home = () => {
  const image =
    "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg";
  return (
    <div className="home">
      <h1>Home</h1>
      <p>Get Friends Contact Info Here</p>
      <img src={image} alt="Friends Show Poster" height="60%" />
    </div>
  );
};

export default Home;
