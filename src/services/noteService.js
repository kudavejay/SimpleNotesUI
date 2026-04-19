import axios  from 'axios';

// const API_URL = 'http://localhost:3000//api/notes/';
const API_URL = `https://localhost:7159/api/notes`;

export const getNotes = (search) => {

    const query = search ? { search } : {};
    // return axios.get(`${API_URL}?search=${search}`)
    return axios.get(API_URL, { params: query });
    //in get () it takes 2 arguments first url and 2nd is param which expect object  therefore we use {} barxaket
};

export const createNote = (note) => {

    return axios.post(API_URL, note);
}

export const deleteNote=(id)=>{
    return axios.delete(`${API_URL}/${id}`);//this is for path style Api [{"id"}]
    
    // return axios.delete(`${API_URL}?id=${id}`);//this is for query style Api [FromQuery]
    // return axios.delete(API_URL,{params: id});//both commented styles are same...this params style automatically add ? id=value and make url
}