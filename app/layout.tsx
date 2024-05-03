import Link from "next/link";
import { menu } from "./menu";

import "../styles/globals.css";
import "../styles/vars.css";

//import "./layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[300px_auto] gap-8 h-screen">
      <div className="border-r-1 border-eds-color-global-neutral-200 p-8">
        <Link href="/">
          <h1 className="font-bold text-4xl mb-6">EDS</h1>
        </Link>
        <div>
          {menu.map((section, i) => (
            <>
              <h2 className="font-semibold mb-2" key={i}>
                {section.title}
              </h2>
              <div className="mb-8">
                {section.items.map((item, j) => (
                  <Link key={j} href={item.file}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="p-8">{children}</div>
    </div>
  );
}
