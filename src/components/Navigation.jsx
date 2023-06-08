import React from "react";
import { useState } from "react";
import { FaSearch, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const [searchvideo, setSearchvideo] = useState("");
  const [currentTheme, setCurrentTheme] = useState("dark-theme");
  const [toggleIcon, setToggleIcon] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchvideo) {
      navigate(`/search/${searchvideo}`);
    }
    setSearchvideo("");
  };

  const changeBg = () => {
    if (toggleIcon) {
      setToggleIcon(false);
    } else {
      setToggleIcon(true);
    }
    if (currentTheme === "light-theme") {
      setCurrentTheme("dark-theme");
    } else {
      setCurrentTheme("light-theme");
    }
    document.body.className = currentTheme;
  };

  const handleValue = (e) => {
    e.preventDefault();
    setSearchvideo(e.target.value);
  };

  return (
    <section id="navigation">
      <div className="container">
        <div className="navigation-wrapper">
          {/* Navigation Item 1 */}
          <div className="navigation-item-1 navigation-item">
            <Link to="/">
              <div className="page-logo">
                <img
                  src="/images/youtube.png"
                  alt="youtubelogo"
                  className="logo"
                />
              </div>
            </Link>
          </div>
          {/* Navigation Item 2 */}
          <div className="navigation-item-2 navigation-item">
            <div className="page-searchbar">
              <form action="" className="searchbar-form">
                <input
                  type="text"
                  className="searchbar-input"
                  value={searchvideo}
                  onChange={handleValue}
                />
                <FaSearch className="search-icon icon" onClick={handleSubmit} />
              </form>
            </div>
          </div>
          {/* Navigation Item 3 */}
          <div className="navigation-item-3 navigation-item">
            <div className="page-toggle-icons" onClick={changeBg}>
              {toggleIcon ? (
                <FaToggleOff className="icon" />
              ) : (
                <FaToggleOn className="icon" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
