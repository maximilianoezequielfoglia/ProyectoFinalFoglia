import "./Home.css";

const Home = (greeting) => {
  return (
    <div className="home-banner">
      <div className="home-banner-title">
        <h2>{greeting.tit1}</h2>
        <h1>{greeting.tit2}</h1>
        <p>{greeting.tit3}</p>
      </div>
    </div>
  );
};

export default Home;
