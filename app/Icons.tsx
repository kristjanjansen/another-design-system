import * as icons from "../icons/index";

export default function Icons(props: any) {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {Object.keys(icons)
        .filter((icon) => icon.endsWith(props.size))
        .map((icon) => {
          const Icon = icons[icon];
          return (
            <a key={icon} title={icon}>
              <Icon />
            </a>
          );
        })}
    </div>
  );
}
