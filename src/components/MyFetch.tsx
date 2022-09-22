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
            console.log("tried to fetch")
            let response = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
            if(response.ok){
                console.log("fetch ok")
                const newsArray = await response.json();
                setNews(newsArray);
            }
        }catch(error){
            console.log(error);
        }finally{console.log("fetch function done")}
    };

    return(
        <>
        {news.map((article,i)=>{
            console.log(article);
            <Article key={i} articleData={article}/>
        })}
        </>
    )
    

}
export default MyFetch