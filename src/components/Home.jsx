function Home() {
  return (
    <>
      <main className="landing-section">
        <div className="carousel">
          <div className="slogan group">
            <img src="./images/Slogan.png" alt="Empowering Every Moment" />
            <img src="./images/Slogan.png" alt="Empowering Every Moment" />
          </div>
          <div aria-hidden className="slogan group">
            <img src="./images/Slogan.png" alt="Empowering Every Moment" />
            <img src="./images/Slogan.png" alt="Empowering Every Moment" />
          </div>
        </div>
        <div className="sub-slogan">
          <h2>
            Inspiring a brighter future with
            <br />
            <span className="sub-slogan--highlight">innovative energy </span>
            solutions.
          </h2>
        </div>
      </main>
    </>
  );
}

export default Home;
