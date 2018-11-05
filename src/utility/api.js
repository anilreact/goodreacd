import axios from "axios";
import {apiKey} from '../config/config';

class Api{

    constructor(ApiURL){
        this.ApiURL = ApiURL;
        this.resultData={};

    }

    bookDetail(bookId){
        const requestUri =
        `https://cors-anywhere.herokuapp.com/` +
        `${this.ApiURL}/${bookId}?key=${apiKey}`;
      
        try {
            return axios.get(requestUri);
          } catch (error) {
            console.error(error)
          }
    } 
    
    searchData(keyWord){

        const requestUri =
        `https://cors-anywhere.herokuapp.com/` +
        `${this.ApiURL}?key=${apiKey}&q=${keyWord}`;
      
        try {
            return axios.get(requestUri);
          } catch (error) {
            console.error(error)
          }   
    }
}

export default Api;