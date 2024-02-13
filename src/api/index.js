import axios from 'axios';

const axiosConfig = {headers: {"Content-Type": 'application/json'}};
// 사용 예시
//  callApi(uri, method)
//   .then(function(response) {
//     this.products = response.data;
//   }).catch(function(error) {
//     alert(error);
//   });
const callApi = (uri, data, method = 'get') => {
  if(method != null && method.toLowerCase() == 'post'){
    return axios.post(uri, data, axiosConfig);
  } else {
    return axios.get(uri, data, axiosConfig);
  }
};

export const fetchTestData = (data) => {
  return callApi('/test1', data);
}

export const doLogin = (form) => {
  // TODO : 공통 프로퍼티화 
  const loginUri = '/api/login';
  const data = new FormData(form);
  return callApi(loginUri, data, 'post')
};

export const getCardList = (pageNumber = 1) => {
  const uri = '/api/card/readAll'
  const params = {
    pageNumber
  }
  return callApi(uri, params);
};

export const saveCard = (card) => {
  const uri = '/api/card/create'
  const params = {
      ...card
  }
  return callApi(uri, params, 'post');
};

export const deleteCard = (id) => {
  const uri = '/api/card/delete'
  // const params = {
  //     id
  // }
  return callApi(uri, id, 'post');
};
