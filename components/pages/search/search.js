import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../../search-form/search-form';
import SearchResults from '../../search-results/search-results-container';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';

export default function Search ({ onSearchSubmitted, onInfiniteScroll }) {

  return (
    <div>
      <SearchForm onSearchSubmitted={onSearchSubmitted}/>
      <InfiniteScroll
        isLoading={false}
        onTrigger={ () => onInfiniteScroll() }>
        <SearchResults />
      </InfiniteScroll>
    </div>
  )
}

Search.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired
};
