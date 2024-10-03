import { useState, useCallback } from "react";

const ScrambleText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scrambleText = useCallback(() => {
    const possibleChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsštuvwxyz";
    let iterations = 0;
    const maxIterations = 10;

    const interval = setInterval(() => {
      setDisplayText((current) =>
        current
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) return text[index];
            return possibleChars[
              Math.floor(Math.random() * possibleChars.length)
            ];
          })
          .join("")
      );

      iterations += 1 / 3;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  const handleMouseEnter = () => {
    if (!isScrambling) {
      setIsScrambling(true);
      scrambleText();
    }
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={className}
      style={{ cursor: "default" }}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
