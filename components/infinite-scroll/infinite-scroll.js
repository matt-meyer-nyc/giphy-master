import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ComponentName
 */
export class InfiniteScroll extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(...args) {
    super(...args);
    this.container = null;
    this.scrollListener = this.scrollListener.bind(this); // bind scroll listener in constructor function to current instance of the class
  }                                               // need to do this b/c when browser fires the scroll event and calls out this.scrollListener callback
                                                // it will try to execute it in a different context if it isn't bound to the current instance of InfiniteScroll
                                              // which means the context of the scroll listener function would be wrong, so all the reference to 'this'
                                            // within the scrollListener would no longer work, and the function would break




  // called when React makes it an actual element added to the DOM
  componentDidMount() {

    document.addEventListener('scroll', this.scrollListener);

  }

  componentWillUnmount() {

    document.removeEventListener('scroll', this.scrollListener);

  }

  scrollListener () {

    const { isLoading, onTrigger } = this.props;
    const viewportHeight = document.documentElement.clientHeight;
    const { bottom } =  this.container.getBoundingClientRect();

    if (!isLoading && (bottom <= viewportHeight)) {

      onTrigger();

    }

  }

  render() {
    const { children, isLoading } = this.props;

    return (

        <div ref={(el) => this.container = el}>
          {children}
          { isLoading && <div>Loading...</div> }
        </div>

    );
  }
}


InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onTrigger: PropTypes.func.isRequired
};


export default InfiniteScroll;
