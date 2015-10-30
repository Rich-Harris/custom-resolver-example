In response to [this tweet](https://twitter.com/BetaLighting/status/659916799064997888), this is one possible solution to the `../../../../../` problem that often happens in complex apps: prefix paths with an `@` symbol (or whatever), and implement a custom ID resolver that replaces that with the `src` folder. You can see it in rollup.config.js.

```bash
# this will create dist/index.js
npm install
npm run build
```

Needless to say, **you do this at your own risk**, having weighed the headache of using longwinded relative paths versus the headache of migrating the codebase if you decided to use a different tool in future!
