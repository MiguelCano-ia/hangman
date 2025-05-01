interface Props {
  wrongLetters: string[];
}

export const WrongLetters = ({ wrongLetters }: Props) => {
  return (
    <div className="mt-4 self-start">
      <div className="text-sm font-semibold mb-1">Letras incorrectas:</div>
      {wrongLetters.length ? (
        <div className="flex gap-2">
          {wrongLetters.map((letter) => (
            <span
              key={letter}
              className="w-6 h-6 bg-red-200 text-red-500 text-center rounded-sm"
            >
              {letter}
            </span>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-1">
          <span className="text-gray-600 text-sm">
            Ninguna letra incorrecta todavía
          </span>
        </div>
      )}
    </div>
  );
};
