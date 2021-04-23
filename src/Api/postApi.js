<<<<<<< Updated upstream
import axios from 'axios' 
const url = 'http://localhost:4000/forum' ;
const url1 = 'http://localhost:4000/forum/like' ;
const url3 = 'http://localhost:4000/forum/rate' ;
const url4 = 'http://localhost:4000/forum/unlike' ;
const url5 = 'http://localhost:4000/forum/search' ;
const url6 = 'http://localhost:4000/forum/sort' ;
const url7= 'http://localhost:4000/forum/sortByRate' ;
const url8= 'http://localhost:4000/forum/sortByViews' ;
const url9 ='http://localhost:4000/forum/topPost'; 

export const fetchViral =() => axios.get(url9)
export const fetchSorted =  () =>   axios.get(url6);
export const fetchSortedByRate =  () =>   axios.get(url7);
export const fetchSortedByViews =  () =>   axios.get(url8);
export const fetchPosts =  () =>   axios.get(url);
export const CreatePost =  (newPost) => axios.post(url , newPost);
export const UpdatePosts = (id , updatedPost) => axios.patch(`${url}/${id}` , updatedPost);
export const deletePosts = (id ) => axios.delete(`${url}/${id}` );
export const fetchOnePost = (id ) => axios.get(`${url}/${id}` );
export const AddLike= (id) => axios.patch(`${url1}/${id}`) ;
export const rating =(id, newRate) => axios.post(`${url3}/${id}` , newRate) ; 
export const removeLike= (id) => axios.patch(`${url4}/${id}`) ;
export const search =(search) => axios.get(`${url5}/${search}`)
=======
import { Axios } from '../features/AppBase/user/axiosfile';
const url = '/forum' ;
const url1 = '/forum/like' ;
const url3 = '/forum/rate' ;
const url4 = '/forum/unlike' ;
const url5 = '/forum/search' ;
const url6 = '/forum/sort' ;
const url7= '/forum/sortByRate' ;
const url8= '/forum/sortByViews' ;



export const fetchSorted =  () =>   Axios.get(url6);
export const fetchSortedByRate =  () =>   Axios.get(url7);
export const fetchSortedByViews =  () =>   Axios.get(url8);
export const fetchPosts =  () =>   Axios.get(url);
export const CreatePost =  (newPost) => Axios.post(url , newPost);
export const UpdatePosts = (id , updatedPost) => Axios.patch(`${url}/${id}` , updatedPost);
export const deletePosts = (id ) => Axios.delete(`${url}/${id}` );
export const fetchOnePost = (id ) => Axios.get(`${url}/${id}` );
export const AddLike= (id) => Axios.patch(`${url1}/${id}`) ;
export const rating =(id, newRate) => Axios.post(`${url3}/${id}` , newRate) ; 
export const removeLike= (id) => Axios.patch(`${url4}/${id}`) ;
export const search =(search) => Axios.get(`${url5}/${search}`)
>>>>>>> Stashed changes



