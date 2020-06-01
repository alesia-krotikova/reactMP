import React, {ErrorInfo} from 'react';

import css from './ErrorBoundary.scss';

type ErrorBoundaryType = {
  error: Error,
  errorInfo: ErrorInfo,
  hasError: boolean
};

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryType> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
      hasError: false
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={css.container}>
          <div className={css.wrap}>
            <h2>Something went wrong</h2>
            <p>
              {this.state.error?.toString()}
              <span>
                {this.state.errorInfo?.componentStack}
              </span>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
