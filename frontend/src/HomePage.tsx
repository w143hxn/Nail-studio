
import './HomePage.css';
import homepagePic from './assets/images/Homepage-Picture.png';
import { Paintbrush, Scan, Search } from 'lucide-react';
import Navbar from './components/Navbar';

function HomePage() {
  return (
    <div className="homepage">

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main>

        {/* HomePage Image */}
        <section className="HomePage-Pic">
          <img src={homepagePic} alt="Luxury Nail Spa" />
        </section>

        {/* Introduction */}
        <section className="intro">
          <p>THE ART OF BEAUTIFUL NAILS</p>
          <h1>Your Dream Nails, Just a Click Away.</h1>

          <a href="#explore" className="explore-button">
            EXPLORE OUR BEAUTIFUL ARTS →
          </a>
        </section>

        {/* Features */}
        <section className="features">

          <a href="#nail-gallery" className="feature">
            <Paintbrush size={26} color="#d8b46a" />
            Find Nail Color
          </a>

          <a href="#color-match" className="feature">
            <Scan size={26} color="#d8b46a" />
            Scan Your Designs
          </a>

          <a href="#find-service" className="feature">
            <Search size={26} color="#d8b46a" />
            Find Your Services
          </a>

        </section>

      </main>
    </div>
  );
}

export default HomePage;
