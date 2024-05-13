import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { Item } from "react-stately";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-bold mb-8 text-3xl text-neutral-500">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl mb-4 mt-16 font-bold text-neutral-500">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg mb-2 mt-10 font-semibold text-neutral-500">
        {children}
      </h3>
    ),
    p: ({ children }) => <p className="mb-4 text-neutral-600">{children}</p>,
    pre: ({ children }) => (
      <pre className="overflow-scroll mt-4 mb-8 bg-gray-100 rounded-lg p-4">
        {children}
      </pre>
    ),
    a: ({ children, href }) => (
      <a href={href} className="underline underline-offset-2" target="_blank">
        {children}
      </a>
    ),
    // eslint-disable-next-line jsx-a11y/alt-text
    Image: (props) => <Image {...props} />,
    Item: (props) => <Item {...props} />,
    ...components,
  };
}

// export function useMDXComponents(components: MDXComponents): MDXComponents {
//   return {
//     h1: ({ children }) => <Heading variant="h3">{children}</Heading>,
//     h2: ({ children }) => (
//       <Heading variant="h4" className="mt-8">
//         {children}
//       </Heading>
//     ),
//     h3: ({ children }) => <Heading variant="h5">{children}</Heading>,
//     p: ({ children }) => <Text>{children}</Text>,
//     pre: ({ children }) => <pre className="my-4 bg-gray-[100]">{children}</pre>,

//     ...components,
//   };
// }
