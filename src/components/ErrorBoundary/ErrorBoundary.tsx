import React from 'react';

import css from './ErrorBoundary.scss';

type ErrorBoundaryType = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryType> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={css.container}>
          <div className={css.wrap}>
            <h2>Something went wrong</h2>
          </div>
        </div>
      );
    }

    return children;
  }
}
