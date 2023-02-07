import sass from "sass";

const compiler = sass([
  "plugins/sass/style.scss",
], {
  // load_paths: [],
});

export default function plugin() {
  console.log(compiler);
  return {
    name: "sass",
    render(ctx) {
      const scripts = [];
      const sassCompiler = compiler.to_string();
      const cssText = sassCompiler.get("style");
      const styles = [{ cssText }];
      ctx.render();
      return {
        scripts,
        styles,
      };
    },
  };
}
