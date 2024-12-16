import { useState, useEffect } from "react";
import f1 from "../assets/f1.jpg"; 
import f2 from "../assets/f2.jpg"
import f3 from "../assets/f3.jpg"
import f4 from "../assets/f4.jpg"
import '../index.css'

const Feedback = () => {
  const image = [f1, f2, f3,f4]; 
  const delay = 2500;
  
  const Slideshow = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timeout = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === image.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => clearTimeout(timeout); 
    }, [index]);

    return (
      <div className="slideshow py-20">
        <div
          className="slideshowSlider " 
          style={{
            transform: `translate3d(${-index * 100}%, 0, 0)`,
            display: "flex", 
            transition: "transform 0.5s ease-in-out", 
            backgroundSize:'cover'
          }}
        >
          {image.map((color, idx) => (
            <div
              className="slide"
              key={idx}
              style={{
                background: `url(${color}) no-repeat center/cover`, 
                width: "100%", 
                height: "400px", 
              }}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {image.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                margin: "5px",
                borderRadius: "50%",
                backgroundColor: index === idx ? "#000" : "#ccc",
                cursor: "pointer",
              }}
              onClick={() => setIndex(idx)} 
            ></div>
          ))}
        </div>
      </div>
    );
  };

  return <Slideshow />;
};

export default Feedback;

