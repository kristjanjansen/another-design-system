import { Breadcrumbs, BreadcrumbItem } from "../../../components";

export default function Example() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/parent">Parent</BreadcrumbItem>
      <BreadcrumbItem>Page</BreadcrumbItem>
    </Breadcrumbs>
  );
}
