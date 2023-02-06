export default function css() {
  return {
    name: "css",
    render(ctx) {
      const scripts = [];
      const cssText = `body { background: #0cf; color: #fc0 }`;
      const styles = [{ cssText, id: "css" }];
      ctx.render();
      return {
        scripts,
        styles,
      };
    },
  };
}
