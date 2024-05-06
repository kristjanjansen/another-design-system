import Link from "next/link";
import menu from "./menu.json" assert { type: "json" };

import "../styles/globals.css";
import "../styles/vars.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-[250px_auto] gap-8 h-screen">
          <div className="border-r border-gray-200 p-8 text-neutral-500">
            <Link href="/">
              <h1 className="font-bold text-xl mb-6">
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
                      <Link key={j} href={item.path} className="block">
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
      </body>
    </html>
  );
}
