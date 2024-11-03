import React, { useState, useEffect } from "react";
import { themes } from "../data/themes";
import { useTheme } from "../context/useThemeContext";

const allWords = [
  "take",
  "into",
  "your",
  "good",
  "some",
  "could",
  "them",
  "see",
  "other",
  "than",
  "then",
  "now",
  "look",
  "only",
  "come",
  "its",
  "over",
  "think",
  "also",
  "back",
  "after",
  "use",
  "two",
  "how",
  "our",
  "work",
  "first",
  "well",
  "way",
  "even",
  "new",
  "want",
  "because",
  "any",
  "these",
  "give",
  "day",
  "most",
  "us",
  "the",
  "be",
  "to",
  "of",
  "and",
  "a",
  "in",
  "that",
  "have",
  "I",
  "it",
  "for",
  "not",
  "on",
  "with",
  "he",
  "as",
  "you",
  "do",
  "at",
  "this",
  "but",
  "his",
  "by",
  "from",
  "they",
  "we",
  "say",
  "her",
  "she",
  "or",
  "an",
  "will",
  "my",
  "one",
  "all",
  "would",
  "there",
  "their",
  "what",
  "so",
  "up",
  "out",
  "if",
  "about",
  "who",
  "get",
  "which",
  "go",
  "me",
  "when",
  "make",
  "can",
  "like",
  "no",
  "just",
  "him",
  "know",
];

function generateRandomWords() {
  const randomWords: any = [];
  for (let i = 0; i <= allWords.length - 1; i++) {
    const randomNumber = Math.floor(Math.random() * allWords.length);
    randomWords.push(allWords[randomNumber]);
  }
  return randomWords;
}

const words = generateRandomWords();
const Typebox = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [typedCharacters, setTypedCharacters] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Prevent the default space behavior (scrolling down)
      if (event.key === " ") {
        event.preventDefault();
        return; // Exit function
      }

      if (event.key === "Backspace") {
        setCurrentCharIndex((prev) => (prev > 0 ? prev - 1 : 0));
        return;
      }

      const currentWord = words[currentWordIndex];
      const currentChar = currentWord[currentCharIndex];

      if (event.key === currentChar) {
        setTypedCharacters((prev) => [...prev, currentChar]);
        setCurrentCharIndex((prev) => prev + 1);
        setIsError(false);

        if (currentCharIndex + 1 === currentWord.length) {
          setCurrentWordIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }
      } else {
        setIsError(true);
        setTypedCharacters((prev) => [...prev, event.key]);
        console.log("Incorrect character");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentWordIndex, currentCharIndex]);

  return (
    <section className="tw-flex tw-mt-20 tw-flex-col  tw-justify-center tw-items-center">
      <div className="lg:tw-mx-0 tw-mx-12 tw-max-w-[1200px] tw-h-[300px] tw-flex tw-gap-2 tw-flex-wrap">
        {words.map((word, wordIndex) => {
          const isCurrentWord = wordIndex === currentWordIndex;
          const underlineColor = themes[theme].colors[1];

          return (
            <span
              className={`tw-text-3xl tw-mb-4 tw-underline-offset-8 ${
                isCurrentWord ? "tw-opacity-60 tw-underline" : ""
              }`}
              key={wordIndex}
              style={{
                textDecorationColor:
                  wordIndex === currentWordIndex && isError
                    ? "red"
                    : underlineColor,
              }}
            >
              {word.split("").map((character, charIndex) => (
                <span key={charIndex}>{character}</span>
              ))}
            </span>
          );
        })}
      </div>

      <button
        className="tw-border tw-rounded-md tw-px-4 tw-py-2 tw-mt-12"
        onClick={() => {
          setCurrentWordIndex(0);
          setCurrentCharIndex(0);
        }}
      >
        Refresh{" "}
      </button>
    </section>
  );
};

export default Typebox;
