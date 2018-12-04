import axios from 'axios';
import { put,call,select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { PERFORM_SEARCH, searchSuccess, searchError } from '../actions/search';

const apiKey = 'ziu7OTWwlqNfsBq6XAGvC7nj03L0pWq7';

const selectSearhState = (state) => state.search;

//generator function
function* doSearch() {

  const { currentOffset, searchTerm } = yield select(selectSearchState);

   // everything gets wrapped in try catch block to catch errors (generators can throw exceptions when something goes wrong)
  try {

                            // call saga effect function named 'call'
    const searchResults = yield call(
      // first argument is function (axios.get),
      // all other arguments will be arguments passed to the function we want to call
      axios.get,
      // first argument passed to axios.get
      'https://api.giphy.com/v1/gifs/search',
      //second object passed to axios.get
      {
        params: {
          apiKey,
          q: searchTerm,
          limit: 50,
          offset: currentOffset
        },
      }
    );
    // axios.get response object has data property which is htps get reponse body which has data property
    //that also has property data which is the array respone we want
    //put let's middleware know we want to dispatch object to redux store
    // then search results container will update with propss passed in here (.data)
    yield put(searchSuccess(searchResults.data.data))

  } catch (e) {

    yield put(searchError());

  }

}

export default function* () {
  //take latest search performed action, and when that action is dispatched
  // call doSearch and pass action itself to an argument to it
  yield takeLatest(PERFORM_SEARCH, doSearch)

}


//====**NOTE**=========
// the call function above doesn't actually call axios directly, instead,
//returns an object which is an instruction to call axios.get with the givn paramters (arguments),
// the object returned is the value generated when next is first called on this generator
// declaring which side effect we want to perform
