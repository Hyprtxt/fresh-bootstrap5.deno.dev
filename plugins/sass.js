import sass from "sass";

const compiler = sass(`
  body {
    background: orange;
    >.container {
      color: black;
      display:flex;
      &.some {
        content: "Some text content";
      }
    }
  }
`);

export default function plugin() {
  return {
    name: "sass",
    render(ctx) {
      const scripts = [];
      const cssText = compiler.to_string();
      const styles = [{ cssText, id: "sass" }];
      ctx.render();
      return {
        scripts,
        styles,
      };
    },
  };
}
