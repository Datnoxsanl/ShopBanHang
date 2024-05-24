import { useEffect,useRef,useState } from "react";


export default function useFetching(api){
    const [data,setData] = useState()
    const isMounted = useRef(true)
    useEffect(()=>{
        isMounted.current= true;
        const Controller = new AbortController()
        api()
        .then(res=>{
           if(isMounted.current){
            let product = res.data;
            setData(product.data)
           }
        })
        .catch(err=>{
            console.log('loi',err)
        })
        .finally(()=>{

        })
        return ()=>{
            Controller.abort();
            isMounted.current = false;
        }
    },[])
   
    return{data,setData}
}