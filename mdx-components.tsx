import type { MDXComponents } from "mdx/types";
import { Heading, Text } from "./components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="font-bold text-2xl">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-headline mb-4 mt-8 font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 mt-6 font-semibold">{children}</h3>
    ),
    p: ({ children }) => <p className="mb-4">{children}</p>,
    pre: ({ children }) => (
      <pre className="my-4 bg-gray-100 rounded-lg p-4">{children}</pre>
    ),

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
