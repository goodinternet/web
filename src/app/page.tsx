import Image from "next/image";

export default function Home() {
  return (
    <main
      className="blank-slate"
      aria-label="Good Internet blank slate"
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100dvh",
        padding: "24px",
      }}
    >
      <Image
        className="center-mark"
        src="/gi-001.svg"
        alt="Good Internet"
        width="5054"
        height="611"
        priority
        style={{
          display: "block",
          width: "clamp(280px, 31vw, 320px)",
          height: "auto",
        }}
      />
    </main>
  );
}
