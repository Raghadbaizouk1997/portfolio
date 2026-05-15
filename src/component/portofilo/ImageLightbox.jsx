import React, { useEffect } from "react";
import "./ImageLightbox.css";

const ImageLightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    if (!src) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="image-lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt || "Project image preview"}
    >
      <button
        type="button"
        className="image-lightbox__close"
        onClick={onClose}
        aria-label="Close preview"
      >
        ×
      </button>
      <div
        className="image-lightbox__content"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className="image-lightbox__img" />
      </div>
    </div>
  );
};

export default ImageLightbox;
