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
      link: "https://github.com/username/mi-ho-project",
    },
    {
      img: "assets/imgs/acordaselva.jpeg",
      title: "Acorda Selva",
      description: "A brief description of the Acorda Selva project.",
      link: "https://github.com/username/acorda-selva",
    },
    {
      img: "assets/imgs/setecore.jpeg",
      title: "Sete Cores",
      description: "A brief description of the Sete Cores project.",
      link: "https://github.com/username/sete-cores",
    },
    {
        img: "assets/imgs/taskmanager.jpeg",
        title: "Sete Cores",
        description: "A brief description of the Sete Cores project.",
        link: "https://github.com/username/sete-cores",
      },
      {
        img: "assets/imgs/ai.jpeg",
        title: "Sete Cores",
        description: "A brief description of the Sete Cores project.",
        link: "https://github.com/username/sete-cores",
      },
      {
        img: "assets/imgs/pokemon.jpeg",
        title: "Sete Cores",
        description: "A brief description of the Sete Cores project.",
        link: "https://github.com/username/sete-cores",
      },
   
  ];

  return (
    <section id="portfolio" className="portfolio py-5">
      <div className="container">
        <h2 className="text-center">My Work</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1} // Adjust for desktop or mobile
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            // Adjust slides per view for responsiveness
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={`${project.title} Project`}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Portfolio;
