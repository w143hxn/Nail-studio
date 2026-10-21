
import './HomePage.css';
import homepagePic from './assets/images/Homepage-Picture.png';

function HomePage() {
  return (
    <div className="homepage">

      {/* Navigation Bar */}
      <header>
        <nav className="navbar">
          <h1>Luxury Nail Spa</h1>

          <div className="nav-links">
            <a href="website">Website</a>
            <a href="facebook">Facebook</a>
            <a href="instagram">Instagram</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>

        {/* Hero Image */}
        <section className="HomePage-Pic">
          <img src={homepagePic} />
        </section>

        {/* Introduction */}
        <section className="intro">
          <p>THE ART OF BEAUTIFUL NAILS</p>
          <h1>Your Style. Your Signature.</h1>

          <p className="description">
            Huy Handsome
          </p>

          <a href="#explore" className="explore-button">
            EXPLORE DESIGNS →
          </a>
        </section>

        {/* Features */}
        <section className="features">
          <div className="feature">Nail Gallery</div>
          <div className="feature">Color Match</div>
          <div className="feature">Find Service</div>
        </section>

      </main>

    </div>
  );
}

export default HomePage;
