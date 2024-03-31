
##### Error Handling:

**Error:**
```
<i> [webpack-dev-middleware] wait until bundle finished
ERROR in ./src/polyfills.ts
Module build failed (from ./node_modules/@ngtools/webpack/src/ivy/index.js):
Error: /Users/srikanthvudharapu/Desktop/project-one/2.StoryBook/storybook--ng-ionic/myApp/src/polyfills.ts is missing from the TypeScript compilation. Please make sure it is in your tsconfig via the 'files' or 'include' property.
    at /Users/srikanthvudharapu/Desktop/project-one/2.StoryBook/storybook--ng-ionic/myApp/node_modules/@ngtools/webpack/src/ivy/loader.js:64:26

preview compiled with 1 error
WARN DefinePlugin
WARN Conflicting values for 'process.env.NODE_ENV'
=> Failed to build the preview
99% end closing watch compilationWARN Force closed preview build
SB_BUILDER-WEBPACK5_0003 (WebpackCompilationError): There were problems when compiling your code with Webpack.
Run Storybook with --debug-webpack for more information.
    at starter (./node_modules/@storybook/builder-webpack5/dist/index.js:1:8088)
    at starter.next (<anonymous>)
    at Module.start (./node_modules/@storybook/builder-webpack5/dist/index.js:1:10083)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Broken build, fix the error above.
```

**Solution:**

You need to manually update your `.storybook/tsconfig.json` to correctly include your TypeScript files, specifically your `polyfills.ts` file for this error. The `include` array in this file should look something like this:

```js
{
  "include": [
		// ...other imports
		"../src/polyfills.ts"  // added 'polyfills.ts'
	]
}
```

---

**Error**:

```
Parsing error: ESLint was configured to run on `<tsconfigRootDir>/src/app/tab1/product-card/product-card.component.ts` using `parserOptions.project`: /users/srikanthvudharapu/desktop/project-one/2.storybook/storybook--ng-ionic/myapp/tsconfig.json
However, that TSConfig does not include this file. Either:
- Change ESLint's list of included files to not include this file
- Change that TSConfig to include this file
- Create a new TSConfig that includes this file and include it in your parserOptions.project
See the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-fileeslint
```

**Solution**:
- In your `tsconfig.json` file, add `"**/*.ts"` to the `include` array.
```js
{
    "include": [
        "**/*.ts" // includes *.interface.ts, *.component.ts, ...
    ]
}
```
- This tells TypeScript to include all `.ts` files in the current directory and its subdirectories. If your TypeScript files are in a different directory, adjust the path accordingly.

