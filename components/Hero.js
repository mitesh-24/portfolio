"use client"
import { useEffect, useState } from 'react';

const Hero = () => {
  const words = ["Hello, World!!!", "I am Mitesh Kulkarni!!", "Welcome to my website!!", "This is my linux themed Portfolio  "];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  const [displayText, setDisplayText] = useState("_");

  useEffect(() => {
    function type() {
        currentWord = words[i];
      
        setDisplayText((prevText) => {
          let newText;
      
          if (isDeleting) {
            newText = currentWord.substring(0, j) + "_";
            j--;
      
            if (j < 0) {
              isDeleting = false;
              i++;
              if (i === words.length) {
                i = 0;
              }
            }
          } else {
            newText = currentWord.substring(0, j + 1) + "_";
            j++;
      
            if (j > currentWord.length) {
              isDeleting = true;
            }
          }
      
          return newText;
        });
      
        setTimeout(type, 200);
      }

    type();
  }, []);

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mt-20">
        <h1 id="typewriter" className="text-4xl font-bold text-white">
          {displayText}
        </h1>
    </div>
  );
};

export default Hero;
