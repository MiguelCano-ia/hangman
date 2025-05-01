import removeAccents from "remove-accents";
import { WORDS } from "../data/words";

export const getWord = () => {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  const originalWord = WORDS[randomIndex];
  const normalizedWord = removeAccents(originalWord).toLowerCase();

  return {
    original: originalWord,
    normalized: normalizedWord,
  };
};
