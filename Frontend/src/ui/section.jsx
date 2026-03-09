import { clsx } from "clsx";

export function Section({ className, children }) {
  return <section className={clsx("w-full", className)}>{children}</section>;
}
