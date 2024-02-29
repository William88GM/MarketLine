import React, { useState } from "react";

export default function Search({ setValueSearch, valueSearch }) {
  function handleSearch(evt) {
    setValueSearch(evt.target.value);
  }

  return (
    <div className=" bg-slate-700 flex  flex-[6] items-center ">
      <div className="relative flex-[3] size-full p-1 items-center">
        <input
          className="size-full "
          placeholder="Buscar gifs"
          onChange={handleSearch}
          value={valueSearch}
        />
        <button
          onClick={() => setValueSearch("")}
          className="absolute right-0 top-1/2 right-4 -translate-y-1/2"
        >
          X
        </button>
      </div>
      <button className="flex-[1]" type="submit">
        Buscar
      </button>
    </div>
  );
}
