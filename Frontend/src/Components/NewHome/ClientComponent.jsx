"use client";

export function ClientComponent({ children }) {
  return (
    <>
      <div className="relative z-10">
        <main>{children}</main>
      </div>
    </>
  );
}
