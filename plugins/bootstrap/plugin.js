import sass from "sass";

const compiler = sass([
  "plugins/bootstrap/scss/bootstrap.scss",
], {
  load_paths: ["plugins/bootstrap/"],
});

export default function plugin() {
  console.log(compiler);
  return {
    name: "bootstrap",
    render(ctx) {
      const scripts = [];
      const sassCompiler = compiler.to_string();
      const cssText = sassCompiler.get("bootstrap");
      const styles = [{ cssText, id: "bootstrap" }];
      ctx.render();
      return {
        scripts,
        styles,
      };
    },
  };
}
