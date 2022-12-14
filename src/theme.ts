import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      base: "#C778DD",
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    org: {
      purple: "#C778DD",
      cyan: "#7CDBCB",
      red: "#E43777",
      navy: "#574EC1",
      grey: "#CECECE",
    },
  },
  components: {
    Divider: {
      defaultProps: { size: "md" },
      sizes: {
        lg: { borderWidth: "4px" },
        md: { borderWidth: "2px" },
        sm: { borderWidth: "1px" },
      },
    },
  },
  fonts: {
    heading: "'Roboto Mono',cursive;",
    body: "'Roboto Mono','Sawarabi Gothic','monospace',sans-serif;",
  },
  textStyles: {
    h1: {
      letterSpacing: "0.15rem",
    },
    h2: {
      position: "relative",
      letterSpacing: "0.2rem",
      noOfLines: 1,
      _before: { content: `"/"`, color: "org.red", paddingRight: "3" },
    },
    h3: {
      position: "relative",
      letterSpacing: "0.2rem",
      fontSize: "2xl",
      _before: {
        content: `"#"`,
        color: "org.cyan",
        paddingRight: "3",
      },
      _after: {
        position: "absolute",
        top: "calc(50% - 1px)",
        right: 0,
        content: `""`,
        height: "1px",
        width: { base: "0px", sm: "40%" },
        backgroundColor: "org.cyan",
      },
    },
    headingPrefix: {
      color: "#C778DD",
      paddingRight: "2",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        backgroundColor: props.colorMode === "dark" ? "#191919" : "#eaeaeb",
        color: props.colorMode === "dark" ? "white" : "#333333",
      },
    }),
  },
});

export default theme;
