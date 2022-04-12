import * as Sentry from '@sentry/browser';
import { BrowserTracing } from "@sentry/tracing";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import "./index.css";

function init() {
  Sentry.init({
    dsn: "https://770f6f67c2b44253ae6b5f35812e9eba@o246019.ingest.sentry.io/6325031",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });

  setTimeout(() => {
    ReactDOM.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }, 3000)
  
}

init();
