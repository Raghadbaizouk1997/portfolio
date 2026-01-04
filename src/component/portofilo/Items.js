import { motion } from "framer-motion";
import { useState } from "react";
import { FaCopy, FaEye, FaEyeSlash } from "react-icons/fa";
import shapeSecond from "../../assets/shape-2.png";

const Items = ({ PojectITems }) => {
  const [copied, setCopied] = useState({});
  const [showPassId, setShowPassId] = useState(null);

  const handleProjectNavigation = (path) => {
    // Navigate to the URL (You can use window.location.href or an anchor tag)
    window.open(path, "_blank"); // Opens the link in a new tab
  };

  const handleCopy = async (text, id, type) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied((prev) => ({
        ...prev,
        [id]: { ...(prev[id] || {}), [type]: true },
      }));
      setTimeout(() => {
        setCopied((prev) => ({
          ...prev,
          [id]: { ...(prev[id] || {}), [type]: false },
        }));
      }, 2000);
    } catch (e) {}
  };

  const parseCreds = (text = "") => {
    const emailMatch = text.match(
      /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
    );
    const passMatch = text.match(/password[:\s]*([^\s,;]+)/i);
    return {
      email: emailMatch ? emailMatch[0] : "",
      password: passMatch ? passMatch[1] : "",
    };
  };

  return (
    <>
      {PojectITems.map((PojectITem) => {
        const {
          id,
          img,
          category,
          title,
          description,
          path,
          description1,
          description2,
          description3,
          year,
          path1,
          path2,
          path3,
        } = PojectITem;
        const { email, password } = parseCreds(description2 || "");

        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two"
            key={id}
          >
            <div className="portfolio__img-wrapper">
              <img src={img} className="portfolio__img" alt={title} />
            </div>

            <span className="portfolio__category text-cs">{category}</span>

            <h3 className="portfolio__title">{title}</h3>

            <p className="portfolio__description">{description}</p>
            <p className="portfolio__description1">{description1}</p>
             <p className="portfolio__description1">{description3}</p>
            <p className="portfolio__description1">Year: {year}</p>
            {description2 && (
              <div className="portfolio__credentials">
                <strong>Test account</strong>
                <div className="cred-line">
                  <span className="label">Email</span>
                  <span className="value">
                    {email || <em className="muted">N/A</em>}
                  </span>
                  <div className="cred-actions">
                    <button
                      type="button"
                      className="cred-btn"
                      onClick={() => handleCopy(email, id, "email")}
                      aria-label="Copy email"
                    >
                      <FaCopy />
                    </button>
                  </div>
                </div>

                <div className="cred-line">
                  <span className="label">Password</span>
                  <span className="value">
                    {password ? (
                      showPassId === id ? (
                        password
                      ) : (
                        "••••••••"
                      )
                    ) : (
                      <em className="muted">N/A</em>
                    )}
                  </span>
                  <div className="cred-actions">
                    {password && (
                      <>
                        <button
                          type="button"
                          className="cred-btn"
                          onClick={() =>
                            setShowPassId(showPassId === id ? null : id)
                          }
                          aria-label="Toggle password"
                        >
                          {showPassId === id ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <button
                          type="button"
                          className="cred-btn"
                          onClick={() => handleCopy(password, id, "password")}
                          aria-label="Copy password"
                        >
                          <FaCopy />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="copy-notes">
                  {copied[id]?.email && (
                    <small className="copy-note">Email copied ✓</small>
                  )}
                  {copied[id]?.password && (
                    <small className="copy-note">Password copied ✓</small>
                  )}
                </div>
              </div>
            )}


            {/* "See Project" Button to navigate */}
            <div className="portfolio__project-links">
              {path && (
                <button
                  type="button"
                  className="see-project-btn"
                  onClick={() => handleProjectNavigation(path)}
                >
                  See Project (Website)
                </button>
              )}
              {path1 && (
                <button
                  type="button"
                  className="see-project-btn"
                  onClick={() => handleProjectNavigation(path1)}
                >
                  See Project (App Store)
                </button>
              )}
              {path2 && (
                <button
                  type="button"
                  className="see-project-btn"
                  onClick={() => handleProjectNavigation(path2)}
                >
                  See Project (Google Store)
                </button>
              )}
                            {path3 && (
                <button
                  type="button"
                  className="see-project-btn"
                  onClick={() => handleProjectNavigation(path3)}
                >
                  See Project (DashBoard)
                </button>
              )}
            </div>

            <img
              src={shapeSecond}
              className="shape c__shape"
              alt="shape decoration"
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
