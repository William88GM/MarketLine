import Link from "next/link";

export default function Logo() {
  function handleReload() {
    window.scroll(0, 0);
  }
  return (
    <Link
      className="flex-[2] "
      translate="no"
      href={"/"}
      onClick={handleReload}
    >
      <img
        className=" rounded-full"
        src="https://i.postimg.cc/6qH5L1J7/Market-Logo.png"
        alt="logo"
      />
    </Link>
  );
}
