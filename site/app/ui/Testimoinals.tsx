import React from 'react';
import "../styles/Testimonials.css";
import { TwitchIcon, Twitter } from 'lucide-react';

const testimonials = [
  {
    name: "Hikmet Atçeken",
    username: "@hiatceken",
    image: "/avatars/1.jpg",
    text: "Pulsefy's our daily tool to bypass averages and reveal true insights, for the whole team!"
  },
  {
    name: "Arda Guler",
    username: "@ardaguler_",
    image: "/avatars/2.jpg",
    text: "Pulsefy levels the analytics field for our team, enabling both beginners and pros to easily bypass average data and uncover the actionable insights that truly shape our marketing strategies."
  },
  {
    name: "Maria Ancelotti",
    username: "@maria_ancelotti",
    image: "/avatars/3.jpg",
    text: "From novice to pro, Pulsefy helps our team uncover the extraordinary in our marketing data!"
  },
  {
    name: "Ragip Diler",
    username: "@rgdiler",
    image: "/avatars/4.jpg",
    text: "Pulsefy empowers our whole team, techies or not, to dive into marketing analytics and spot the insights that really matter—no more average data!"
  },
  {
    name: "Jenny Wilson",
    username: "@wilson_jenny_19",
    image: "/avatars/5.jpg",
    text: "Pulsefy’s user-friendly analytics let our whole team, regardless of skill, bypass averages to unearth and act on true, game-changing marketing insights every day."
  },
  {
    name: "Guy Hawkins",
    username: "@ghawkins",
    image: "/avatars/6.jpg",
    text: "Pulsefy is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It's our daily ally in unearthing those pivotal marketing insights that really drive strategy!"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h1>Public Cheers for Us!</h1>
        <p className="subtitle">Find out how our users are spreading the word!</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <img src={item.image} alt={item.name} className="avatar" />
              <div>
                <h4>{item.name}</h4>
                <p className="username">{item.username}</p>
              </div>
              <span className="close-btn"><Twitter/></span>
            </div>
            <p className="testimonial-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
