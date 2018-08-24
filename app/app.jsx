  var React = require('react');
  var ReactDOM = require('react-dom');
  var {Route, Router, hashHistroy} = require('react-router');
  var Main = require('Main');


  // Load foundation
  require('style!css!foundation-sites/dist/foundation.min.css');
  $(document).foundation();

  // App css
  require('style!css!sass!applicationStyles');

  ReactDOM.render(
    <Router histroy={hashHistroy}>
      <Route path="/" component={Main}/>
    </Router>,
    document.getElementById('app')
  );
