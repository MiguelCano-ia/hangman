import { useEffect, useState } from "react";
import { getWord } from "../helpers/getWords";

export const useHangman = () => {
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<"playing" | "win" | "lose">(
    "playing"
  );
  const initialWord = getWord();
  const [randomWord, setRandomWord] = useState(initialWord.original);
  const [word, setWord] = useState(initialWord.normalized);

  const addCorrectLetter = (letter: string) => {
    if (word.toLowerCase().includes(letter)) {
      setCorrectLetters([...correctLetters, letter]);
      return;
    }
    setWrongLetters([...wrongLetters, letter]);
  };

  const resetGame = () => {
    setCorrectLetters([]);
    setWrongLetters([]);
    const newWord = getWord();
    setRandomWord(newWord.original);
    setWord(newWord.normalized);
    setGameStatus("playing");
  };

  useEffect(() => {
    if (word === "") return;

    const correctWord = Array.from(word)
      .filter((letter) => letter !== " ")
      .every((letter) => correctLetters.includes(letter));

    if (correctWord) {
      setGameStatus("win");
    }

    if (wrongLetters.length === 6) {
      setGameStatus("lose");
    }
  }, [correctLetters, wrongLetters, word]);

  return {
    correctLetters,
    wrongLetters,
    gameStatus,
    randomWord,
    addCorrectLetter,
    resetGame,
  };
};
