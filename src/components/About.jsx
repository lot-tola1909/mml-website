import Home from "./Home";
function About() {
  return (
    <>
      <Home />
      <section className="about-section">
        <div className="who-are-we">
          <h1>Who Are We?</h1>
          <div className="who-are-we-content">
            <div className="who-are-we-content-item ">
              <img
                className="mb"
                src="./images/tick_mark.png"
                alt="Tick Mark"
              />
              <p>
                With over decades of experience in the power generation
                industry, we specialize in delivering high-quality products and
                comprehensive technical solutions tailored to our customers’
                needs.
              </p>
            </div>
            <div className="who-are-we-content-item">
              <img src="./images/engineer_team.png" alt="Two Engineer" />
              <p>
                Our team of highly qualified professionals is committed to
                providing exceptional service, adhering to international
                standards, and ensuring customer satisfaction through expert
                consultation and reliable solutions.
              </p>
            </div>
            <div className="who-are-we-content-item">
              <img src="./images/globe_gear.png" alt="Globe" />
              <p>
                We build national-level power plants, supply heavy industry
                equipment, and offer turn-key solutions for power generation and
                control systems.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-wrapper">
          <div className="second-carousel">
            <div className="second-group">
              <img src="./images/Card1.png" alt="Carousel Picture" />
              <img src="./images/Card2.png" alt="Carousel Picture" />
              <img src="./images/Card3.png" alt="Carousel Picture" />
              <img src="./images/Card4.png" alt="Carousel Picture" />
            </div>
            <div aria-hidden className="second-group">
              <img src="./images/Card1.png" alt="Carousel Picture" />
              <img src="./images/Card2.png" alt="Carousel Picture" />
              <img src="./images/Card3.png" alt="Carousel Picture" />
              <img src="./images/Card4.png" alt="Carousel Picture" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
