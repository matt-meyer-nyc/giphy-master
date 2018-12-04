import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './app';

               // pass connect a mapStateToProps function (don't have one here, so will pass function that return empty object)
               //then that gets called with App
               // all wrapped inside withRouter, which will make components within it work properly
               // every page in the app stems from root compoent that is a child of the App component
export default withRouter(connect(() => ({}))(App));
