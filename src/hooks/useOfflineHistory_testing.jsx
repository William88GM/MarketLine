import React, { useEffect } from "react";
// []
export function useOfflineHistory({ historyOffline, setHistoryOffline }) {
  //Recibe el valor de una variable o estado y como actualizarlo (opcional)
  //El hook actualiza tanto el estado como el localStorage
  let initialHistory = [];
  useEffect(() => {
    if (localStorage.getItem("HS")) {
      const array = localStorage.getItem("HS").split(",");
      setHistoryOffline && setHistoryOffline(array);
    }
  }, []); //eslint-disable-line

  function pushHistoryItem(newElement) {
    if (newElement) {
      setHistoryOffline && setHistoryOffline([newElement, ...historyOffline]);
      localStorage.setItem("HS", [newElement, ...historyOffline]);
    }
    const historyLS = localStorage.getItem("HS").split(",");
    return historyLS;
  }

  function deleteHistoryItem(index) {
    setHistoryOffline &&
      setHistoryOffline((prev) => prev.filter((e, i) => !(e === index)));
    localStorage.setItem(
      "HS",
      historyOffline.filter((e, i) => !(e === index))
    );
    const historyLS = localStorage.getItem("HS").split(",");
    return historyLS;
  }

  return {
    pushHistoryItem, //El parametro que se le pase debe ser un string
    deleteHistoryItem, //Ambos devuelven el array del local storage actualizado
  };
}
