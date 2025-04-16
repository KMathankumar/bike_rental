import React from 'react';

function Logo2() {
  return (
    <div className="flex items-center gap-0.5 sm:gap-1 p-2 rounded-md">
      {/* Large R */}
      <span className="text-orange-500 text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
        R
      </span>

      {/* ideOn rental stacked with further reduced vertical gap */}
      <div className="flex flex-col text-white">
        <span className="text-base sm:text-lg md:text-xl font-semibold leading-tight">
          ideOn
        </span>
        <span className="text-sm sm:text-base md:text-lg -mt-[0.1em] leading-tight">
          rental
        </span>
      </div>
      
    </div>
  );
}

export default Logo2;