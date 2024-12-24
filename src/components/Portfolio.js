import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    {
      img: "assets/imgs/mi-ho.jpg",
      title: t("portfolio.projects.miho.title"),
      description: t("portfolio.projects.miho.description"),
      link: "https://mi-ho.com/",
    },
    {
      img: "assets/imgs/flor.webp",
      title: t("portfolio.projects.acordaselva.title"),
      description: t("portfolio.projects.acordaselva.description"),
      link: "https://acordaselva.com/",
    },
    {
      img: "assets/imgs/verena.jpg",
      title: t("portfolio.projects.verena.title"),
      description: t("portfolio.projects.verena.description"),
      link: "https://verenaeichner.de/",
    },
    {
      img: "assets/imgs/setecores.jpg",
      title: t("portfolio.projects.setecores.title"),
      description: t("portfolio.projects.setecores.description"),
      link: "https://setecores.netlify.app/",
    },
    {
      img: "assets/imgs/taskmanager.jpeg",
      title: t("portfolio.projects.taskmanager.title"),
      description: t("portfolio.projects.taskmanager.description"),
      link: "https://task-manager-mh.netlify.app/",
    },
    {
      img: "assets/imgs/ai.jpg",
      title: t("portfolio.projects.ai.title"),
      description: t("portfolio.projects.ai.description"),
      link: "https://ai-img-generator-app.netlify.app/",
    },
    {
      img: "assets/imgs/pokemon.jpg",
      title: t("portfolio.projects.pokemon.title"),
      description: t("portfolio.projects.pokemon.description"),
      link: "https://pokemon-memo-game.netlify.app/",
    },
  ];

  return (
    <section id="portfolio" className="portfolio py-5">
      <div className="container">
        <h2 className="text-center title">{t("portfolio.title")}</h2>
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
