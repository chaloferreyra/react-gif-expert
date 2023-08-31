export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=N2vlgnmtG8oeVoqv8HCH82qJWVs2qwgP&q=${category}&limit=10&lang=es`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs;
}