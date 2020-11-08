import axios from "axios";


export default function getFetch(query, currentPage=1, itemsPerPage=12){
    
       return axios.get(
        
        `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${query}&page=${currentPage}&per_page=${itemsPerPage}&image_type=photo`
      )
      .then(resp=>resp.data.hits.map(({id,webformatURL,largeImageURL})=>({id,webformatURL,largeImageURL}))
      )
   
  };