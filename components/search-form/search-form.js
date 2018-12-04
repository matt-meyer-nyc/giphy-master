import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './search-form.css';

export default function SearchForm ({ onSearchSubmitted }) {

  let textInput; // works, but best practice would be let textInput = null;

  const getTerm = (e) => {
    e.preventDefault();

    onSearchSubmitted(textInput.value); //passed up to app.js as 'term'
    // want to to make sure a search performed action is dispatched
    // with the search term whenever this function (onSearchSubmitted) is called


  }

  return (
    <form className={styles.container} onSubmit={getTerm}>
      <input className={styles.searchField}
        type="text"
        placeholder="Search for Giphies"
        ref={(el) => textInput = el }
        />
      <input
        type="submit"
        value="Search"
        className={styles.button}
        />
    </form>
  );

}





SearchForm.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired
}
