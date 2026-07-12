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
      <div className="hero">
      <div className="lockup" role="img" aria-label="Good Internet">
        <span className="lockup-mark" aria-hidden="true">
          <span className="lockup-squash">
            <span className="lockup-spin">
              <Image
                src="/gi-001-mark.svg"
                alt=""
                width="620"
                height="611"
                priority
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </span>
          </span>
        </span>
        <span className="lockup-gap" aria-hidden="true" />
        <Image
          className="lockup-word"
          src="/gi-001-word.svg"
          alt=""
          width="4292"
          height="611"
          priority
          style={{ display: "block", height: "auto" }}
        />
      </div>
      <p className="tagline">A considered community</p>
      </div>
    </main>
  );
}
