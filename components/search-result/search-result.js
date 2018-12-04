import React from 'react';
import * as CustomTypes from '../../lib/custom-types';

export default function SearchResult ({ result }) {

  //destructures thumbNail key from the full object passes in as props
  //which includes thumbNail and full
  const { thumbNail } = result;

  return (

    <img src={thumbNail} />

  );

}

SearchResult.propTypes = {
  result: CustomTypes.SearchResult.isRequired
}
