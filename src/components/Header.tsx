import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events/all">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
