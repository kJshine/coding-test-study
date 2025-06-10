function solution(genres, plays) {
    const genreTotal = new Map();
    genres.forEach((genre, i) => {
       genreTotal.set(genre, (genreTotal.get(genre) || 0) + plays[i]); 
    });
    
    const genreSongs = new Map();
    genres.forEach((genre, i) => {
        if (!genreSongs.has(genre)) {
            genreSongs.set(genre, []);
        }
        genreSongs.get(genre).push([plays[i], i]);
    });
    
    
    const sortedGenres = [...genreTotal.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([genre]) => genre);
    
    const result = [];
    
    sortedGenres.forEach(genre => {
        const songs = genreSongs.get(genre)
            .sort((a, b) => b[0] - a[0])
            .slice(0, 2);
        songs.forEach(song => result.push(song[1]));
    })
    
    return result;
}