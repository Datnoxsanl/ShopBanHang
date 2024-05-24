import axios from "axios";

export function getProdcuts(){
    return axios({
        url: `/products?${query}&populate=*&pagination[pageSize]=${size}&pagination[page]=${page}&sort=${fSort}:desc`
    })
}