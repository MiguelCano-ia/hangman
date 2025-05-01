import { memo } from "react";

interface Props {
  word: string;
  gameStatus: "playing" | "win" | "lose";
}

export const ResultMessage = memo(({ word, gameStatus }: Props) => {
  return (
    <div className="w-full text-center mt-10">
      {gameStatus === "win" && (
        <div className="bg-green-100 text-green-800 p-3 rounded-lg font-bold animate-pulse">
          ¡Felicidades! ¡Has ganado!
        </div>
      )}

      {gameStatus === "lose" && (
        <div className="bg-red-100 text-red-800 p-3 rounded-lg font-bold">
          <p>¡Has perdido!</p>
          <p className="text-sm mt-1">
            La palabra era: <span className="font-bold">{word}</span>
          </p>
        </div>
      )}
    </div>
  );
});
