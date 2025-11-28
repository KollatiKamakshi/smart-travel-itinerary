'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong globally!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Reload</button>
      </body>
    </html>
  );
}
