import clipboard from "clipboardy";

const colors = ["red", "green", "blue", "yellow", "pink"];

const generateRandomValues = () => {
  const twClasses = [];
  const cssStyles = [];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  twClasses.push(`bg-${randomColor}-500`);
  cssStyles.push(`background-color: ${randomColor}`);

  const attributes = [
    ["max-w", "max-width"],
    ["w", "width"],
    ["h", "height"],
    ["p", "padding"],
    ["m", "margin"],
  ];

  attributes.forEach(([tw, css]) => {
    // multiple of 4 between 0 and 64
    const randomValue = [0, 2, 4, 6, 8, 12, 16, 18, 20, 24, 32, 64, 96][
      Math.floor(Math.random() * 13)
    ];
    twClasses.push(`${tw}-${randomValue}`);
    cssStyles.push(`${css}: ${randomValue}px`);
  });

  return { twClasses, cssStyles };
};

let twHtml = "";
let cssHtml = "";
let cssStyle = "";

for (let i = 0; i < 1000; i++) {
  const { twClasses, cssStyles } = generateRandomValues();
  twHtml += `<div class="${twClasses.join(" ")}"></div>\n`;
  cssHtml += `<div class="card-${i}"></div>\n`;
  cssStyle += `.card-${i} { ${cssStyles.join(";\n")} }\n`;
}

clipboard.writeSync(cssStyle);
