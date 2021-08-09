import axios from 'axios';

const APIKEY = '2UmOHOE0ZNNxgaxzeJhUIdWAPT45560T';

const queryUrlBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIKEY + '&q=';

export default {
  nytSearch : function (queryTerms) {
    return axios.get(`${queryUrlBase}${queryTerms}`);
  },
  saveArticle : function (articleData) {
    return axios.post('/api/saved', articleData);
  },
  getSavedArticles : function () {
    return axios.get("/api/saved");
  },
  deleteArticle : function (id) {
    return axios.delete(`/api/saved/${id}`);
  },
};
