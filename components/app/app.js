import React from 'react';
import Navigation from '../navigation/navigation-container';
import styles from './app.css';
//import SearchForm from './search-form/search-form-container';
//import SearchResults from './search-results/search-results-container';

// can get children of component through special prop called children
// here we extract it, and then render below
// makes sure only 'page' getting navigated to get shown when navigated to as rendered via children
export default ({children}) => (
	<div>
		<h1 className={styles.header}>Giphy Master</h1>
		<Navigation / >
		{/*once routing gets implemented, this component will just render prop as
			parent component of everything (no need to include components like <SearchForm />)*/}
    {children}
		{/*mapDispatchToProps to props action performs passing the props to SearchForm
		<SearchForm  />
		<SearchResults /> {/* gets props from redux store*/}
	</div>
);
