import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Navigation, Pagination } from "swiper/modules"; 

function Portfolio() {
  const projects = [
    {
      img: "assets/imgs/mi-ho.jpg",
      title: "Mi-Ho Project",
      description: "A website showcasing MI°HO's offerings, with a focus on user experience and design. Creted with React and Bootstrap",
      link: "https://mi-ho.com/",
    },
    {
      img: "assets/imgs/flor.webp",
      title: "Acordaselva Project",
      description: "A family-run farm dedicated to agroecological practices, soil regeneration, and organic seedling production.",
      link: "https://acordaselva.com/",
    },
    {
      img: "assets/imgs/verena.jpg",
      title: "Verena Eichner Project",
      description: "Rebuild old website, to more mordern looking and code. Holistic health coaching website integrating Yoga and Ayurveda.",
      link: "https://verenaeichner.de/",
    },
    {
      img: "assets/imgs/setecores.jpg",
      title: "Sete Cores Project",
      description: "A project in Bahia, Brazil, focused on land rejuvenation through reforestation, cacao cultivation, and sustainable living initiatives",
      link: "https://setecores.netlify.app/",
    },
    {
        img: "assets/imgs/taskmanager.jpeg",
        title: "Task Manager",
        description: "A web application designed to help users manage and organize their tasks efficiently. Build with React and Redux Toolkit",
        link: "https://task-manager-mh.netlify.app/",
      },
      {
        img: "assets/imgs/ai.jpg",
        title: "AI image generator",
        description: "A web application that generates images using OpenAI's API, allowing users to create AI-powered visuals.",
        link: "https://ai-img-generator-app.netlify.app/",
      },
      {
        img: "assets/imgs/pokemon.jpg",
        title: "Pokemon Memory Game",
        description: "An engaging memory card game featuring Pokémon characters, designed to test and improve memory skills.",
        link: "https://pokemon-memo-game.netlify.app/",
      },
   
  ];

  return (
    <section id="portfolio" className="portfolio py-5">
      <div className="container">
        <h2 className="text-center title">My Work</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1} 
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
               <a
                href={project.link}
                className="card"
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={`${project.title} Project`}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Portfolio;
