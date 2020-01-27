import Typography from "typography"

export default {
  "1989": {
    label: "1989",
  },
  "2019": {
    label: "2019",
    typography: new Typography({
      headerFontFamily: ["Roboto", "sans-serif"],
      bodyFontFamily: ["Roboto", "sans-serif"],
      googleFonts: [
        {
          name: "Roboto",
          styles: ["400", "700"],
        },
      ],
    }),
    highlightNavOnScroll: true,

    containerWidth: "60rem",
    containerPadding: "1rem",
    containerHalfWidthMinusPadding: "29rem",
    containerCss: `
      max-width: 60rem;
      margin: 0 auto;
      padding: 0 1rem;
    `,

    boxShadowSm: "0 5px 10px rgba(0,0,0,0.12);",
    boxShadow: "0 8px 30px rgba(0,0,0,0.12);",
    boxShadowLg: "0 30px 60px rgba(0,0,0,0.12);",
    cardRadius: "1em",
    primaryDark: "#000758",
    primary: "#109b9b",
    secondary: "#0051C1",
    black1: "#0e1e25",
    black2: "#333",
    black3: "#666",
    white1: "hsla(0,0%,100%,100%)",
    white2: "hsla(0,0%,100%,90%)",
    white3: "hsla(0,0%,100%,80%)",
  },
  rad: {
    label: "Rad",
  },
  mono: {
    label: "Geek Chic",
  },
  paper: {
    label: "⌘+P",
  },
  handwriting: {
    label: "Note To Self",
  },
  editor: {
    label: "Better Than Vim",
  },
}