import { AlertCircle, RefreshCcw } from "lucide-react";
import {
  HangmanDrawing,
  Keyboard,
  LetterInput,
  WrongLetters,
} from "./components/hangman";
import { ResultMessage } from "./components/hangman/ResultMessage";
import removeAccents from "remove-accents";
import { useHangman } from "./hooks/useHangman";

export const Hangman = () => {
  const {
    correctLetters,
    wrongLetters,
    gameStatus,
    randomWord,
    addCorrectLetter,
    resetGame,
  } = useHangman();

  return (
    <>
      <main className="min-h-screen flex items-center justify-center px-4 py-2 bg-gray-200">
        <div className="flex flex-col items-center w-full max-w-3xl bg-white rounded-xl shadow-xl p-6 md:p-8 gap-2">
          <div className="flex flex-col items-center">
            <h1 className="text-blue-600 text-3xl font-bold">Ahorcado</h1>
            <p className="text-gray-600 max-sm:text-sm">
              Adivina la palabra antes de las 6 equivocaciones
            </p>
          </div>
          <HangmanDrawing errors={wrongLetters.length} />
          <p className="text-gray-600 text-md ml-2 mt-2">
            Errores: {wrongLetters.length}/6
          </p>
          <div className="flex max-sm:gap-1 gap-3 mt-5">
            {Array.from(randomWord).map((letter, idx) => (
              <span key={idx} className="w-4 h-4 text-2xl sm:text-3xl ">
                {correctLetters.includes(removeAccents(letter).toLowerCase())
                  ? `${letter}`
                  : letter !== " " && "_"}
              </span>
            ))}
          </div>
          {gameStatus !== "playing" ? (
            <ResultMessage word={randomWord} gameStatus={gameStatus} />
          ) : (
            <LetterInput
              addCorrectLetter={addCorrectLetter}
              correctLetters={correctLetters}
              wrongLetters={wrongLetters}
            />
          )}
          <WrongLetters wrongLetters={wrongLetters} />
          <Keyboard
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
            gameStatus={gameStatus}
            addCorrectLetter={addCorrectLetter}
          />
          <button
            className="flex items-center gap-2 mt-5 border-1 py-1 text-sm px-3 border-gray-400 rounded-sm hover:bg-gray-200 transition-colors cursor-pointer font-medium"
            onClick={resetGame}
          >
            <RefreshCcw className="h-4 w-4" />
            {gameStatus === "playing" ? "Reiniciar juego" : "Jugar de nuevo"}
          </button>

          <div className="mt-6 text-center text-sm text-gray-500">
            <div className="flex items-center justify-center gap-1">
              <AlertCircle className="h-4 w-4" />
              <span>
                Tip: También puedes usar el teclado virtual para jugar
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
