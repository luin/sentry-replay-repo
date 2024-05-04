## To Reproduce

```
npm run build
```

Drag the generated stats.json to https://statoscope.tech/


## Expected Behavior

Non-used bundles don't appear in the final bundle.

## Actual Behavior

It includes Feedback and Replay Canvas:

```
node_modules/@sentry-internal/feedback/esm/index.js 46.00 kb
node_modules/@sentry-internal/replay-canvas/esm/index.js 25.99 kb
```

