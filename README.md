# Grommet Rollup Side Effects

There is currently an issue to build for production a React application using Grommet
through Rollup.

## Getting started
```bash
# Install dependencies
npm install

# Build project
npm run build

# Run build project
npm run preview
```

## The issue

When using the module `ThemeContext.Extend` provided by Grommet, the production build
is broken with the following error:

```bash
Error: Minified React error #130;
visit https://reactjs.org/docs/error-decoder.html?invariant=130&args[]=undefined&args[]= for the
full message or use the non-minified dev environment for full errors and additional helpful warnings.
```
