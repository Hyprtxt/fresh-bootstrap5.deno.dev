import sass from "sass";

const compiler = sass([
  "plugins/bootstrap/style.scss",
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
      const bootstrap = Deno.readTextFileSync(
        "./plugins/bootstrap/bootstrap.css",
      );
      const liveSASS = sassCompiler.get("style");
      const cssText = bootstrap + "\n" + liveSASS;
      const styles = [{ cssText, id: "bootstrap" }];
      ctx.render();
      return {
        scripts,
        styles,
      };
    },
  };
}
