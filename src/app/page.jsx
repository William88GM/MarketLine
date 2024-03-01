/* eslint-disable @next/next/no-img-element */
import PromoCard from "@/app/components/PromoCard/index";
export default function Home() {
  let arraySections = [
    {
      section: 1,
      name: "Pepoclown",
      products: [
        {
          name: `Product 1`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
        {
          name: `Product 2`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
        {
          name: `Product 3`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
        {
          name: `Product 4`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
        {
          name: `Product 5`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
      ],
    },
    {
      section: 2,
      name: "Pepoclown",
      products: [
        {
          name: `Product 1`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
        {
          name: `Product 2`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
        {
          name: `Product 3`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
      ],
    },
    {
      section: 3,
      name: "Pepoclown",
      products: [
        {
          name: `Product 1`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
      ],
    },
    {
      section: 4,
      name: "Pepoclown",
      products: [
        {
          name: `Product 1`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
      ],
    },
    {
      section: 5,
      name: "Pepoclown",
      products: [
        {
          name: `Product 1`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
      ],
    },
    {
      section: 6,
      name: "Pepoclown",
      products: [
        {
          name: `Product 1`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
      ],
    },
  ];
  return (
    // <article className="bg-slate-500 grid"> alternativa
    <article className="bg-slate-500 flex flex-col">
      {arraySections &&
        arraySections.map((e, i) => (
          <PromoCard key={i} arraySections={arraySections[i]} />
        ))}
    </article>
  );
}
