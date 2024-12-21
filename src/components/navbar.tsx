import Link from "next/link";
import AnimatedButton from "./ui/animated-button";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full dark:bg-black/40 shadow-sm dark:border border-neutral-900 z-50 backdrop-blur-lg flex justify-between items-center p-4">
      {/* logo */}
      <aside>
        <p className="text-2xl font-bold">Triggerflow</p>
      </aside>
      {/* link */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 font-light">
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/clients"}>Clients</Link>
          </li>
          <li>
            <Link href={"/resources"}>Resources</Link>
          </li>
          <li>
            <Link href={"/documentation"}>Documentation</Link>
          </li>
          <li>
            <Link href={"/enterprise"}>Enterprise</Link>
          </li>
        </ul>
      </nav>
      {/* action area */}
      <aside className="flex items-center gap-4">
        <Link href={"/dashboard"}>
          <AnimatedButton>Dashboard</AnimatedButton>
        </Link>
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
}
