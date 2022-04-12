import * as Sentry from "@sentry/browser";
import React from "react";

export default class ErrorBoundary extends React.Component {
  state = {
    error: {},
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  componentDidMount() {
    if (import.meta.hot) {
      import.meta.hot.accept((newModule) => {
        this.setState({ hasError: false });
      });
    }
  }

  componentDidCatch(error, info) {
    console.log("error catched", error, info);
    Sentry.withScope((scope) => {
      scope.setContext("stack", {
        stack: info.componentStack,
      });

      Sentry.captureException(error);
    });
  }

  render() {
    const { hasError } = this.state;
    return hasError ? (
      <div>sorry, something went wrong</div>
    ) : (
      this.props.children
    );
  }
}
