import {useState, useEffect} from 'react';
import {News} from '../Types/News'
import Article from './Article';

const MyFetch = () =>{
    const[news,setNews] = useState<News[]>([]);


    useEffect(() =>{
        fetchNews();        
    },[])

    const fetchNews = async () =>{
        try{
            let response = await fetch(https://api.spaceflightnewsapi.net/v3/articles);
            if(response.ok){
                const newsArray = await response.json();
                setNews(newsArray);
            }
        }catch(error){
            console.log(error);
        }
    };

    return(
        <>
        {news.map((article,i)=>{
            <Article key={i} articleData={article}/>
        })}
        </>
    )
    

}
export default MyFetch