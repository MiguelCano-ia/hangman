const KEYBOARD_LETTERS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

interface Props {
  correctLetters: string[];
  wrongLetters: string[];
  gameStatus: "playing" | "win" | "lose";
  addCorrectLetter: (letter: string) => void;
}

export const Keyboard = ({
  correctLetters,
  wrongLetters,
  gameStatus,
  addCorrectLetter,
}: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 mt-5">
      {KEYBOARD_LETTERS.map((row, idx) => (
        <div className="flex gap-1 sm:gap-2" key={idx}>
          {row.map((word) => (
            <button
              key={word}
              type="button"
              disabled={
                correctLetters.includes(word) ||
                wrongLetters.includes(word) ||
                gameStatus !== "playing"
              }
              onClick={() => addCorrectLetter(word)}
              className={`w-6 h-6 sm:w-9 sm:h-9 rounded font-medium text-sm transition-colors 
                ${
                  gameStatus !== "playing"
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-300 cursor-pointer"
                } ${
                correctLetters.includes(word)
                  ? "bg-green-500 hover:bg-green-500 text-white cursor-not-allowed"
                  : wrongLetters.includes(word)
                  ? "bg-red-500 hover:bg-red-500 text-white cursor-not-allowed"
                  : "bg-gray-200"
              }`}
            >
              {word.toUpperCase()}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
