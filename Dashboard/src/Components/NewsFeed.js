import { useEffect, useState } from "react";
import axios from "axios";


function NewsFeed() {
  const [articles , setarticles] = useState(null);

  useEffect(()=>
  {
        
    const options = {
method: 'GET',
url: 'https://crypto-news15.p.rapidapi.com/news',
headers: {
 'x-rapidapi-host': 'crypto-news15.p.rapidapi.com',
 'x-rapidapi-key': '5510fd612emsha783cb017505369p1798d1jsnd4811d4394b6'
}
};

axios.request(options).then(function (response) {
console.log(response.data);
setarticles(response.data)
}).catch(function (error) {
console.error(error);
});
  }, [])
  const sevenarticles = articles?.slice(8,14)

    return (
      <div className = "news-feed">
        <h2>NewsFeed</h2>
        {sevenarticles?.map((articles,_index) => (<div key = {_index}> <a href={articles.url}><p>{articles.title}</p></a></div>))}
      </div>
    );
  }
  
  export default NewsFeed
  