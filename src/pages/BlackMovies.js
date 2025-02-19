import React from "react";
import "./BlackMovies.css";

const movies = [
  {
    id: 1,
    title: "Black Panther (2018)",
    imdb: "https://www.imdb.com/title/tt1825683/",
    poster: "/images/movie/1.jpg",
    description:
      "A groundbreaking celebration of African culture and Black excellence in mainstream cinema.",
  },
  {
    id: 2,
    title: "Malcolm X (1992)",
    imdb: "https://www.imdb.com/title/tt0104797/",
    poster: "/images/movie/2.jpg",
    description:
      "Denzel Washington delivers a powerful performance in this biopic of the revolutionary leader.",
  },
  {
    id: 3,
    title: "Selma (2014)",
    imdb: "https://www.imdb.com/title/tt1020072/",
    poster: "/images/movie/3.jpg",
    description:
      "A moving retelling of Dr. Martin Luther King Jr.’s fight for voting rights.",
  },
  {
    id: 4,
    title: "12 Years a Slave (2013)",
    imdb: "https://www.imdb.com/title/tt2024544/",
    poster: "/images/movie/4.jpg",
    description:
      "A harrowing true story of Solomon Northup’s fight for freedom.",
  },
  {
    id: 5,
    title: "Judas and the Black Messiah (2021)",
    imdb: "https://www.imdb.com/title/tt9784798/",
    poster: "/images/movie/5.jpg",
    description:
      "The true story of Fred Hampton, chairman of the Black Panther Party.",
  },
  {
    id: 6,
    title: "The Hate U Give (2018)",
    imdb: "https://www.imdb.com/title/tt5580266/",
    poster: "/images/movie/6.jpg",
    description:
      "A powerful film about police brutality and finding one’s voice.",
  },
  {
    id: 7,
    title: "Hidden Figures (2016)",
    imdb: "https://www.imdb.com/title/tt4846340/",
    poster: "/images/movie/7.jpg",
    description:
      "The untold story of three Black women mathematicians at NASA.",
  },
  {
    id: 8,
    title: "One Night in Miami (2020)",
    imdb: "https://www.imdb.com/title/tt10612922/",
    poster: "/images/movie/8.jpg",
    description:
      "A fictionalized account of a historic meeting between Malcolm X, Muhammad Ali, Jim Brown, and Sam Cooke.",
  },
  {
    id: 9,
    title: "Moonlight (2016)",
    imdb: "https://www.imdb.com/title/tt4975722/",
    poster: "/images/movie/9.jpg",
    description:
      "A poetic coming-of-age story about identity and Black masculinity.",
  },
  {
    id: 10,
    title: "The Color Purple (1985)",
    imdb: "https://www.imdb.com/title/tt0088939/",
    poster: "/images/movie/10.jpg",
    description: "A deeply moving story about resilience and Black womanhood.",
  },
  {
    id: 11,
    title: "The Butler (2013)",
    imdb: "https://www.imdb.com/title/tt1327773/",
    poster: "/images/movie/11.jpg",
    description:
      "A Black butler’s story through multiple presidential administrations.",
  },
  {
    id: 12,
    title: "Marshall (2017)",
    imdb: "https://www.imdb.com/title/tt5301662/",
    poster: "/images/movie/12.jpg",
    description:
      "The story of Thurgood Marshall, the first Black Supreme Court Justice.",
  },
  {
    id: 13,
    title: "Harriet (2019)",
    imdb: "https://www.imdb.com/title/tt4648786/",
    poster: "/images/movie/13.jpg",
    description: "An inspiring biopic of Harriet Tubman’s journey to freedom.",
  },
  {
    id: 14,
    title: "Fruitvale Station (2013)",
    imdb: "https://www.imdb.com/title/tt2334649/",
    poster: "/images/movie/14.jpg",
    description:
      "The tragic true story of Oscar Grant, a young Black man killed by police in Oakland.",
  },
  {
    id: 15,
    title: "42 (2013)",
    imdb: "https://www.imdb.com/title/tt0453562/",
    poster: "/images/movie/15.jpg",
    description:
      "The inspiring story of Jackie Robinson breaking Major League Baseball’s color barrier.",
  },
  {
    id: 16,
    title: "Just Mercy (2019)",
    imdb: "https://www.imdb.com/title/tt4916630/",
    poster: "/images/movie/16.jpg",
    description:
      "The true story of Bryan Stevenson, a lawyer fighting wrongful convictions.",
  },
];

const BlackHistoryMovies = () => {
  return (
    <div className="movies-container">
      {/* Hero Section */}
      <header className="blood-drive-hero">
        <h1 className="blood-drive-text">Top Black History Month Movies</h1>
      </header>

      {/* Movie Grid */}
      <section className="movies-list">
        <p className="movies-subtext">
          These films inspire, educate, and support the Black experience. 
          Some highlight issues that need awareness, some celebrate Black excellence and others tell 
          stories from Black History. 
           Watch and share
          them with others! xo wolf
        </p>

        <div className="movies-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <a href={movie.imdb} target="_blank" rel="noopener noreferrer">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="movie-image"
                />
              </a>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <a
                href={movie.imdb}
                target="_blank"
                rel="noopener noreferrer"
                className="watch-button"
              >
                View on IMDb
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="/" className="cta-button">
          ← Back to Home
        </a>
        <p>&copy; 2025 The Gamers Haven | Black Lives Matter</p>
      </footer>
    </div>
  );
};

export default BlackHistoryMovies;
