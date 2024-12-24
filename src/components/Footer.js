import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer container text-center">
        {/* Logo */}
        <img src="/assets/imgs/logo2.png" alt="Logo" className="logo2" />

        {/* Title */}
        <p className="footer-title">{t("footer.title")}</p>

        {/* Subtitle */}
        <p className="footer-subtitle">{t("footer.subtitle")}</p>

        {/* Footer Text */}
        <p className="footer-text">{t("footer.text")}</p>
      </div>
    </footer>
  );
}

export default Footer;
