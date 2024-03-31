# storybook--ng-ionic

```
I have a blank folder and want to run ionic project with angular to learn storybook, provide a beginner-friendly steps with commands with a clear document on how to do this
```

#### Setup:

**Prerequisites:**
- `npm install -g @ionic/cli`
- `npm install -g @angular/cli`

**Initialize Ionic Project*:*
- `ionic start myApp tabs --type=angular`
- `cd myApp`

**Add `storybook`:**
-`npx -p @storybook/cli sb init --type angular`
- Enable `Compodoc` when prompted.

**Run `storybook`:**
- `npm run storybook`
- For any errors, check this [document](./guides/error-handling.md) for possible solutions.


#### Resources:
- https://storybook.js.org/blog/storybook-for-angular-12/
- https://www.digitalocean.com/community/tutorials/angular-storybook-angular#building-a-storybook-for-deployment
- https://storybook.js.org/tutorials/intro-to-storybook/angular/en/get-started/
- https://storybook.js.org/docs/get-started/angular#requirements

---

https://www.componentdriven.org/
