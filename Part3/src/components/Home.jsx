import React from 'react';

const Home = () => (
  <section className="home">
    <div className="home-content">
      <h3>Hi</h3>
      <h1>I'm <span>Ishu Padsala</span><br />a Software Developer</h1>
      <p>
        I am a dedicated and passionate front-end developer with a keen eye for design and a strong foundation in HTML, CSS, and JavaScript.
        I am currently seeking opportunities to work on various projects and contribute to the development community.
      </p>
      <div className="btn-box">
        <button className="btn-1">Hire ME</button>
        <button className="btn-2">Experience</button>
      </div>
    </div>
    <div className="img-box">
      <img src="images/profile.jpg" alt="Profile" />
    </div>
  </section>
);

export default Home;
