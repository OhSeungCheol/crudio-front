import axios from 'axios'

// 사용 예시
//  callApi(uri, method)
//   .then(function(response) {
//     this.products = response.data;
//   }).catch(function(error) {
//     alert(error);
//   });
const callApi = (uri, data, method = 'get') => {
  console.log(method);
  if(method != null && method.toLowerCase() == 'post'){
    console.log('asd');
    return axios.post(uri, data, {
      headers: { 'content-type': 'application/json' }
    });
  } else {
    console.log('asd12');
    return axios.get(uri, data);
  }
};

export const fetchTestData = (data) => {
  return callApi('/test1', data);
}

export const doLogin = (form) => {
  // TODO : 공통 프로퍼티화 
  // const loginUri = 'http://localhost:8080/api/login';
  const loginUri = '/api/login';
  form.action = loginUri;
  form.submit();
}

