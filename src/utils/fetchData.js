export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e72d408050msh29e3ee3b761d565p1f7f88jsn8bb3f479fb9a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };
  


  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e72d408050msh29e3ee3b761d565p1f7f88jsn8bb3f479fb9a',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
