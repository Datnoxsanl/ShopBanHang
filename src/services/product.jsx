import axios from "axios";

export function getProdcuts(page,size,fSoft){
    return axios({
        url: `/products?populate=*&pagination[pageSize]=${size}&pagination[page]=${page}&sort=${fSoft}:desc`
    })
}