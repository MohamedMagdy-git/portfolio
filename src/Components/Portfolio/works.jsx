import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import { filters, data } from './data';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [workData, setWorkData] = useState(data);
  const [animate, setAnimate] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  const handleFilter = (filterName) => {
  setActiveFilter(filterName);
  setAnimate(false);

  setTimeout(() => {
    if (filterName === 'All') {
      setWorkData(data);
    } else {
      setWorkData(
        data.filter(
          (item) => item.category === filterName.toLowerCase()
        )
      );
    }
    setAnimate(true);
  }, 200);
};


// for dark mode
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmo') === "true");

   useEffect(() => {
     const handleDarkModeChange = () => {
       setDarkMode(localStorage.getItem('darkmo') === "true");
     };

     //  استمع للحدث المخصص
     window.addEventListener("darkModeChanged", handleDarkModeChange);

     return () => {
       window.removeEventListener("darkModeChanged", handleDarkModeChange);
     };
   }, []);

  return (
    <div>
      {/* <div className="work_filter">
        {filters.map((filterItem) => (
          <span
            key={filterItem.id}
            className={`work_item_filter ${
              activeFilter === filterItem.name ? 'active-work' : ''
            }`}
            onClick={() => handleFilter(filterItem.name)}
          >
            {filterItem.name}
          </span>
        ))}
      </div> */}

      <div className={`work_container container grid ${animate ? 'fade-in' : 'fade-out'}`}>
        {workData.map((dataItem) => (
          <div key={dataItem.id} className={`work_item_card ${darkMode ? 'work_item_card-dark-mode' : ''}`}>
              
              <div className="image-wrapper">
                
                {!loadedImages[dataItem.id] && (
                  <div className="image-placeholder" />
                )}

                <img
                  src={dataItem.image}
                  className="work_image"
                  alt={dataItem.title}
                  loading="lazy"
                  width="400"
                  height="300"
                  onLoad={() =>
                    setLoadedImages(prev => ({
                      ...prev,
                      [dataItem.id]: true
                    }))
                  }
                  style={{
                    opacity: loadedImages[dataItem.id] ? 1 : 0
                  }}
                />
                
              </div>

              <h3 className={`work_title ${darkMode ? 'work_title-dark-mode' : ''}`}>
                {dataItem.title}
              </h3>

              <a
                href={dataItem.demo_link}
                className="work_button"
                target="_blank"
                rel="noreferrer"
              >
                Project link
                <i className="bx bx-right-arrow-alt work_button_icon"></i>
              </a>

            </div>
        ))}
      </div>
    </div>
  );
};

export default Works;