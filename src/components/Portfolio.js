import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Navigation, Pagination } from "swiper/modules"; 

function Portfolio() {
  const projects = [
    {
      img: "assets/imgs/mi-ho.jpeg",
      title: "Mi-Ho Project",
      description: "A brief description of the Mi-Ho project.",
      link: "https://mi-ho.com/",
    },
    {
      img: "assets/imgs/acordaselva.jpeg",
      title: "Acordaselva",
      description: "A brief description of the Acorda Selva project.",
      link: "https://acordaselva.com/",
    },
    {
      img: "assets/imgs/setecore.jpeg",
      title: "Sete Cores",
      description: "A brief description of the Sete Cores project.",
      link: "https://setecores.netlify.app/",
    },
    {
        img: "assets/imgs/taskmanager.jpeg",
        title: "Task Manager",
        description: "A brief description of the Sete Cores project.",
        link: "https://task-manager-mh.netlify.app/",
      },
      {
        img: "assets/imgs/ai.jpeg",
        title: "AI image generator",
        description: "A brief description of the Sete Cores project.",
        link: "https://ai-img-generator-app.netlify.app/",
      },
      {
        img: "assets/imgs/pokemon.jpeg",
        title: "Pokemon Memory Game",
        description: "A brief description of the Sete Cores project.",
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
