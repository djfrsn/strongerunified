import Prismic from 'prismic-javascript';
const getContentTypeAPI = async ({ content_type }) => {
  try {
    console.log('process.env.PRISMIC_API_URL', process.env.NODE_ENV);

    // We initialise the API with Prismic's kit
    const API = await Prismic.api(
      'https://stronger-unified.cdn.prismic.io/api/v2'
    );
    // Here we just query the documents with a filter of only returning
    // the type of blog_post and order them. Full docs can be found here:
    // https://github.com/prismicio/prismic-javascript#query-the-content
    console.log('start');

    const response = await API.query(
      Prismic.Predicates.any('document.type', content_type),
      {
        // params will be extra parameters we can pass through with api calls
        // such as how many documents to return
      }
    );
    console.log(response);

    return response.results;
  } catch (error) {
    return error;
  }
};

export { getContentTypeAPI };
