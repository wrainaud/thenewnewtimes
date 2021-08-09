import axios from 'axios';

const APIKEY = '2UmOHOE0ZNNxgaxzeJhUIdWAPT45560T';

const queryUrlBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIKEY + '&q=';

export default {
  nytSearch : function (queryTerms) {
    return axios.get(`${queryUrlBase}${queryTerms}`);
  },
  getSavedArticles : function () {
    return axios.get('https://www.thenewnewtimes.com/api/saved/');
  },
  deleteArticle : function (id) {
    return axios.delete('https://www.thenewnewtimes.com/api/saved/' + id);
  },
  saveArticle : function (articleData) {
    return axios.post('https://www.thenewnewtimes.com/api/saved/', articleData);
  }
};
