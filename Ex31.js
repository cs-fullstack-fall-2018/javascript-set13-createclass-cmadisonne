class Movie{
    constructor(movieName, rating, yearReleased){
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }

    printAllAttributes()
    {
        alert(this.movieName + this.rating + this.yearReleased);
        return(this.movieName + this.rating + this.yearReleased);
    }

}

function main()
{
    var favmovie = new Movie("Love Jones", 10000, 1998);
    var anotherfavmovie = new Movie("Jason's Lyric", 1000, 1994);
    console.log(favmovie.printAllAttributes());
    console.log(anotherfavmovie.printAllAttributes());
}

main();