
import './FindColorPage.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import {
  Search,
  Grid2X2,
  TreePine,
  Ghost,
  Heart,
  Flower2,
  Sun,
  Leaf,
  Snowflake,
  Gem,
  Cake,
  PartyPopper,
  Egg,
  GraduationCap,
  Plane,
  Waves,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function FindColorPage() {
  const [page, setPage] = useState(0);

  let occasionButtons;

  if (page === 0) {
    occasionButtons = (
      <>
        <button>
          <Grid2X2 size={15} color="#d8b46a" />
          All
        </button>

        <button>
          <TreePine size={15} color="#d8b46a" />
          Christmas
        </button>

        <button>
          <Ghost size={15} color="#d8b46a" />
          Halloween
        </button>

        <button>
          <Heart size={15} color="#d8b46a" />
          Valentine's
        </button>

        <button>
          <Flower2 size={15} color="#d8b46a" />
          Spring
        </button>
      </>
    );
  } else if (page === 1) {
    occasionButtons = (
      <>
        <button>
          <Sun size={15} color="#d8b46a" />
          Summer
        </button>

        <button>
          <Leaf size={15} color="#d8b46a" />
          Fall
        </button>

        <button>
          <Snowflake size={15} color="#d8b46a" />
          Winter
        </button>

        <button>
          <Gem size={15} color="#d8b46a" />
          Wedding
        </button>

        <button>
          <Cake size={15} color="#d8b46a" />
          Birthday
        </button>
      </>
    );
  } else if (page === 2) {
    occasionButtons = (
      <>
        <button>
          <PartyPopper size={15} color="#d8b46a" />
          New Year
        </button>

        <button>
          <Egg size={15} color="#d8b46a" />
          Easter
        </button>

        <button>
          <GraduationCap size={15} color="#d8b46a" />
          Graduation
        </button>

        <button>
          <Plane size={15} color="#d8b46a" />
          Vacation
        </button>

        <button>
          <Waves size={15} color="#d8b46a" />
          Beach
        </button>
      </>
    );
  } else {
    occasionButtons = (
      <>
        <button>
          <Sparkles size={15} color="#d8b46a" />
          Everyday
        </button>
      </>
    );
  }

  let arrowIcon;

  if (page === 3) {
    arrowIcon = <ChevronLeft size={15} color="#d8b46a" />;
  } else {
    arrowIcon = <ChevronRight size={15} color="#d8b46a"/>;
  }

  function changePage() {
    if (page === 3) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  }

  return (
    <div className="find-color-page">

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main>

        {/* Introduction */}
        <section className="color-intro">
          <p>FIND YOUR PERFECT NAIL COLOR</p>
          <h1>Search by Color, Theme, or Occasion</h1>
        </section>

        {/* Color Search */}
        <section className="color-search">
          <Search size={22} color="#f5f0e8" />
          <input
            type="text"
            placeholder="Search a color (e.g. red, nude, glitter..."
          />
        </section>

        {/* Browse by Occasion */}
        <section className="browse-occasion">
          <h2>Browse by Occasion</h2>

          <div className="occasion-list">
            {occasionButtons}

            <button
              type="button"
              onClick={changePage}
            >
              {arrowIcon}
            </button>
          </div>
        </section>

      </main>

    </div>
  );
}

export default FindColorPage;
