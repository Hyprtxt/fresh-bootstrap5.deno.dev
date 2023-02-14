# fresh project

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### Bootstrap

Boostrap 5.2 is included and loaded by plugin, but is only compiled when the bootstrap task is run:

```
deno task bootstrap
```

You will need `sass` installed, `brew install sass/sass/sass` works for macOS

The sass compliation doesn't work on Deno Deploy. This is just a plaything, use at your own risk.

If you can figure out a good way to use SASS with Fresh, let me know!
