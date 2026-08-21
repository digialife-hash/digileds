import React, { useEffect, useState } from "react";

function HeroHeading() {
  const words = [
    "Your Trusted Development Partner",
    "Your Digital Growth Partner",
    "Your Technology Partner",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const speed = isDeleting ? 200 : 200;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <h1 
    // style={{color:'#0D2C4D'}} 
    className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight  sm:text-6xl md:text-7xl lg:text-7xl text-[#2f9e6f]">
      {text}
      <span className=" ml-1 inline-block h-[0.9em] w-[3px] animate-pulse bg-[#2f9e6f] align-middle" />
    </h1>
  );
}

export default HeroHeading;
