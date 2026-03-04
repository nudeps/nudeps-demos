# Nudeps Demos

A demo repository to showcase how nudeps works.

This is essentially a monorepo, containing multiple demos, each in a separate directory.

## How to try out locally

```bash
git clone https://github.com/nudeps/nudeps-demo.git
```

Then to e.g. try out the Vue demo run:

`cd vue && npm install`

That's it!

Then, start a local server and open the various `index.html` files in your browser.

You can try installing and uninstalling dependencies as needed, and see how the import map gets updated.

### Running a command across all demos

Use `each.sh` to run any command in every demo subdirectory:

```bash
./each.sh npm install
./each.sh npm link nudeps
./each.sh "npm install && npm link nudeps"
```

### Useful commands

Install all dependencies for all demos:

```bash
./each.sh npm install
```

Run Nudeps on all demos:

```bash
./each.sh npx nudeps
```

Run Nudeps from scratch on all demos:

```bash
./each.sh npx nudeps --init
```

Try demos with a local nudeps install:

```bash
./each.sh npm link nudeps
```
