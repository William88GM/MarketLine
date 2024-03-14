"use client";

import { useOfflineHistory } from "@/hooks/useOfflineHistory";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default function Nav() {
  const [historyList, setHistoryList] = useState(""); // !!! Eliminar
  const [valueSearch, setValueSearch] = useState("");
  const router = useRouter();
  const { pushHistoryItem, deleteHistoryItem } = useOfflineHistory(
    historyList,
    setHistoryList //Estados globales de next por definir !!!
  );

  function handleHistoryLogged() {
    // adaptar segun el back !!!
    axios
      .put(
        `${baseURL}/api/historial`,
        { historyElement: valueSearch },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setListUser(res.data.history);
      });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    router.push(`/${valueSearch}`);
    if (sesion) {
      // Sesion por definir !!!
      handleHistoryLogged(valueSearch);
    } else {
      pushHistoryItem(valueSearch);
    }
    setMenuIsActive(false);
    window.scroll(0, 0);
  }

  return (
    <nav className="bg-slate-900 h-[100%]">
      <form className="flex h-[100%]" onSubmit={handleSubmit}>
        <Logo />
        <Search setValueSearch={setValueSearch} valueSearch={valueSearch} />
        <div className="flex-[1] text-white">Op1</div>
        <div className="flex-[1] text-white">Op2</div>
        <div className="flex-[1] text-white">Op3</div>
        <Menu />
      </form>
      {/* <Menu /> */}
    </nav>
  );
}
