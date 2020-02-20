import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

class ErrorBoundary extends PureComponent {

  static getDerivedStateFromError (error) {
    return { hasError: true, error: error };
  }

  constructor (props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch (error, info) {
    // @TODO actually log this somewhere meaningful?
    console.error(error);
  }

  render () {
    if (this.state.hasError) {
      return <h1>You done goofed! <span role="img" aria-label="Sad Face">😭</span></h1>;
    }

    return this.props.children;
  }
}

// ErrorBoundary.propTypes = {
//   children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
// };

export default ErrorBoundary;
