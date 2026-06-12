import ClaimField from "./ClaimField";

export default function Home() {
  return (
    <main className="doc">
      <span className="mark" role="img" aria-label="Good Internet" />

      <h1 className="wordmark">Good Internet</h1>
      <p className="tagline">
        A considered community where great things get found, shared, and argued over.
      </p>

      <div className="claim">
        <ClaimField />
        <p className="claim-note">Good @names won&rsquo;t last.</p>
      </div>
    </main>
  );
}
