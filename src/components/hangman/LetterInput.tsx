import removeAccents from "remove-accents";

import { useState } from "react";

interface Props {
  correctLetters: string[];
  wrongLetters: string[];
  addCorrectLetter: (letter: string) => void;
}

export const LetterInput = ({
  addCorrectLetter,
  correctLetters,
  wrongLetters,
}: Props) => {
  const [letterInput, setLetterInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (letterInput.trim() === "") return;
    if (
      correctLetters?.includes(removeAccents(letterInput).toLowerCase()) ||
      wrongLetters?.includes(removeAccents(letterInput).toLowerCase())
    ) {
      setLetterInput("");
      return;
    }
    addCorrectLetter(removeAccents(letterInput).toLowerCase());
    setLetterInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-10 w-full">
      <input
        type="text"
        value={letterInput}
        placeholder="Ingresa una letra"
        className="border-1 p-2 rounded-md w-full border-gray-500 focus:outline-none"
        maxLength={1}
        pattern="[A-Za-zñÑáéíóúÁÉÍÓÚüÜ]"
        onChange={(e) => {
          setLetterInput(e.target.value);
        }}
        autoFocus
      />
      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 text-white rounded-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Probar
      </button>
    </form>
  );
};
