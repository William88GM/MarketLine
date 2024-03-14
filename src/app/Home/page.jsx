import React from "react";

// import tal as PromosCarrusel from "tal"
// import tal as HistoryCarrusel from "tal"
export default function Home() {
  return (
    <>
      <Banner />
      <PromosBySection />
      <HistoryCarrusel />
      <PromosCarrusel />
      <RecomendatedBySection />
    </>
  );
}
