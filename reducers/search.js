import { SEARCH_SUCCESS, NEW_SEARCH } from '../actions/search'


const initialState = {
  results: [],
  currentOffset: 0,
  searchTerm: null,
}
                               // raw result from API
function searchResultTransformer(rawResult) {

  const { images } = rawResult;

  return {

    thumbNail: images.fixed_height_small_still.url,
    full: images.original.url

  }

}

export default (state,action) => {
  if (state === undefined) {
    return initialState;
  }
  switch(action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        results: state.results.concat(action.results.map(searchResultTransformer))
      };
      case NEW_SEARCH:
       return {
         ...state,
         results: [],
         currentOffset: 0,
         searchTerm: action.searchTerm,
       };
      default: return state;
  };
}
