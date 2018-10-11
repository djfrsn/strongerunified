import Prismic from 'prismic-javascript';
const getContentTypeAPI = async ({ content_type }) => {
  try {
    // We initialise the API with Prismic's kit
    const API = await Prismic.api(process.env.PRISMIC_API_URL);
    // Here we just query the documents with a filter of only returning
    // the type of blog_post and order them. Full docs can be found here:
    // https://github.com/prismicio/prismic-javascript#query-the-content
    const response = await API.query(
      Prismic.Predicates.any('document.type', content_type),
      {
        // params will be extra parameters we can pass through with api calls
        // such as how many documents to return
      }
    );
    return response.results;
  } catch (error) {
    return error;
  }
};

export { getContentTypeAPI };
