import { useState } from "react";

export default function Menu() {
  const [menuIsActive, setMenuIsActive] = useState(""); /// !!! Estado global
  function handleMenu() {
    setMenuIsActive(!menuIsActive);
  }
  return (
    <button
      type="button"
      className="flex-[1] bg-slate-600"
      onClick={handleMenu}
    >
      Menú
    </button>
  );
}
