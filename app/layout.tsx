import Link from "next/link";
import { menu } from "./menu";

import "../styles/globals.css";
import "../styles/vars.css";

//import "./layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[250px_auto] gap-8 h-screen">
      <div className="border-r border-gray-200 p-8 text-neutral-500">
        <Link href="/">
          <h1 className="font-bold text-3xl mb-6">
            Another
            <br />
            Design
            <br />
            System
          </h1>
        </Link>
        <div>
          {menu.map((section, i) => (
            <>
              <h2 className="font-semibold mb-2" key={i}>
                {section.title}
              </h2>
              <div className="mb-8 flex flex-col gap-2">
                {section.items.map((item, j) => (
                  <Link key={j} href={item.file} className="block">
                    {item.title}
                  </Link>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="p-8 pb-32">{children}</div>
    </div>
  );
}
