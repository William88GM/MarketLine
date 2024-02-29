import { useEffect } from "react";

export function useOfflineHistory(historyOffline, setHistoryOffline) {
  //Recibe el valor de un estado y como actualizarlo
  //El hook actualiza tanto el estado como el localStorage

  useEffect(() => {
    if (localStorage.getItem("HS")) {
      const array = localStorage.getItem("HS").split(",");
      setHistoryOffline(array);
    }
  }, []); //eslint-disable-line

  function pushHistoryItem(newElement) {
    if (newElement) {
      setHistoryOffline([newElement, ...historyOffline]);
      localStorage.setItem("HS", [newElement, ...historyOffline]);
    }
  }

  function deleteHistoryItem(index) {
    setHistoryOffline((prev) => prev.filter((e, i) => !(e === index)));
    localStorage.setItem(
      "HS",
      historyOffline.filter((e, i) => !(e === index))
    );
  }

  return {
    pushHistoryItem, //El parametro que se les pase debe ser un string
    deleteHistoryItem,
  };
}
