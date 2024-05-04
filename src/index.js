import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "my dsn",
  integrations: [new Sentry.replayIntegration()],
});

console.log("Hello World!");
