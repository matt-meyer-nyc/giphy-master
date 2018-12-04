import PropTypes from 'prop-types';

// export a new custom type
// from PropTypes properties, define SearchResults with 'shape'
// function allows for defining the shape of object passed in via props
export const SearchResult = PropTypes.shape({
  //new search results prop PropTypes
  thumbNail: PropTypes.string.isRequired,
  full: PropTypes.string.isRequired
});
