import * as icons from "../icons/index";
console.log(icons);

export default function Icons() {
  return (
    <div className="grid grid-cols-10 gap-4 mt-4">
      {Object.keys(icons)
        .filter((icon) => icon.endsWith("Sm"))
        .map((icon) => {
          const Icon = icons[icon];
          return <Icon key={icon} />;
        })}
    </div>
  );
}
