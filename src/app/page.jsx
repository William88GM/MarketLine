import Banner from "@/components/Pages/Home/Banner/index.jsx";
import HistoryCarrusel from "@/components/Pages/Home/ProductsCarrusel";
import PromosCarrusel from "@/components/Pages/Home/ProductsCarrusel";
import PromosBySection from "@/components/Pages/Home/PromosBySection";
import RecomendatedBySection from "@/components/Pages/Home/RecomendatedBySection";

export default function Home() {
  let historyProducts = {
    section: 1,
    name: "Busquedas recientes",
    products: [
      {
        name: `Product 1`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 2`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 3`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 4`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 5`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 6`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 7`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 8`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 9`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 10`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 11`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
    ],
  };

  let promoProducts = {
    section: 1,
    name: "Busquedas recientes",
    products: [
      {
        name: `Product 1`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 2`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 3`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 4`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 5`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 6`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 7`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 8`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 9`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 10`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
      {
        name: `Product 11`,
        image: "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
      },
    ],
  };
  return (
    <article className="p-6 flex flex-col gap-28">
      <Banner />
      <PromosBySection />
      <HistoryCarrusel arraySections={historyProducts} />
      <PromosCarrusel arraySections={promoProducts} />
      <RecomendatedBySection />
    </article>
  );
}
