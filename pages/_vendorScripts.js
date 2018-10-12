import scriptLoader from 'react-async-script-loader';

export default PageComponent =>
  scriptLoader(
    '/static/js/jquery.min.js',
    '/static/js/jquery-plugin-collection.js',
    '/static/js/bootstrap.min.js',
    '/static/js/script.js'
  )(PageComponent);
