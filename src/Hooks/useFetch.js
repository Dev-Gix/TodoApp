import  { useEffect, useRef, useState } from 'react';


const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setstate] = useState({data:null,loading:true,error:null});

    useEffect(() => {
       return()=>{
           isMounted.current = false;
       };
    }, [])

    useEffect(() => {
        setstate({data:null,loading:true,error:null})
      fetch(url)
      
            .then(request => request.json())
            .then(data =>{
                setTimeout(() => {
                    if(isMounted.current){
                setstate({
                    loading:false,
                    error:null,
                    data
                })
            }
            }, 4000);
            })
    }, [url])
    return state
};



export default useFetch;