import { memo } from "react";

interface Props {
  errors: number;
}

export const HangmanDrawing = memo(({ errors }: Props) => {
  return (
    <div className="relative w-40 h-44 sm:h-64 mt-5">
      <div className="absolute left-10 w-2 h-40 bg-blue-600 sm:bottom-0 sm:h-full" />
      <div className="absolute top-0 left-10 w-24 h-2 bg-blue-600" />
      <div className="absolute top-0 right-4 w-2 h-10 bg-blue-600" />
      <div className="absolute bottom-3 -left-5 bg-blue-600 w-32 h-2 sm:bottom-0"></div>
      {errors >= 1 && (
        <div className="absolute top-10 right-0 w-10 h-10 rounded-full border-4 border-blue-600" />
      )}
      {errors >= 2 && (
        <div className="absolute top-20 right-[18px] w-1 h-16 bg-blue-600" />
      )}
      {errors >= 3 && (
        <div className="absolute top-18 right-9 w-1 h-12 bg-blue-600 rotate-45" />
      )}
      {errors >= 4 && (
        <div className="absolute top-18 right-0 w-1 h-12 bg-blue-600 -rotate-45" />
      )}
      {errors >= 5 && (
        <div className="absolute top-[135px] left-[122px] w-1 h-12 bg-blue-600 rotate-45" />
      )}
      {errors >= 6 && (
        <div className="absolute top-[135px] left-[154px] w-1 h-12 bg-blue-600 -rotate-45 " />
      )}
    </div>
  );
});
