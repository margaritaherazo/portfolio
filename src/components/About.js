import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/imgs/foto.png"
              alt="About Me"
              className="img-fluid custom-img"
            />
          </div>
          <div className="col-md-6">
            <h2>{t('about.title1')}</h2>
            <h2>{t('about.title2')}</h2>
            <p>{t('about.description')}</p>
            <h5>{t('about.location')}</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
