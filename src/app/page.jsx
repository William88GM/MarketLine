import PromoSection from "@/app/components/PromoSection/index";
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
        {
          name: `Product 6`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
        {
          name: `Product 7`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
        {
          name: `Product 8`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
        {
          name: `Product 9`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
        {
          name: `Product 10`,
          image:
            "https://i1.sndcdn.com/avatars-000613810602-q3mzoi-t500x500.jpg",
        },
        {
          name: `Product 11`,
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
    <article className="bg-slate-500 p-6 flex flex-col">
      {arraySections &&
        arraySections.map((e, i) => (
          <PromoSection key={i} arraySections={arraySections[i]} />
        ))}
    </article>
  );
}
