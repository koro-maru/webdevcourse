

class Movie{
    title;
    actors;
    grossEarnings;
    rating;
    release; 
    #dateAdded;

    constructor(title, actors, grossEarnings, rating, release){
        this.title = title;
        this.actors = actors;
        this.grossEarnings = grossEarnings;
        this.rating = rating;
        this.release = release;
        this.#dateAdded = Date.now();
    }

    printMovie(){
        console.log(`========================================\n${this.title}\n=======`)
        console.log("ACTORS\n=======")
        this.actors.forEach(actor => {
            console.log(actor);
        });
        console.log(`=======\nGROSS EARNINGS\n=======\n$${this.grossEarnings}`)
        console.log(`=======\nRATING\n=======\n${this.rating}`)
        console.log(`=======\nRELEASE\n=======\n${this.release}`)
    }
}

let movie = "Blade Runner"
let actors = ["Harrison Ford","Rutger Hauger", "Sean Young", "Edgar James Olmos"];
let releaseDate = 1982;
let earnings = 41000000
let rating = 5;

let bladeRunner = new Movie(movie,actors,earnings,rating,releaseDate);

bladeRunner.printMovie();

console.log("========================================\n")
class ARSupportedMovie extends Movie {
    static displaySupport = true;
    ARType;
    AREffect;
    ARWarnings;
    constructor(title, actors, grossEarnings, rating, release, type, effect, warnings){
        super(title, actors, grossEarnings, rating, release);
        this.ARType = type;
        this.AREffect = effect;
        this.ARWarnings = warnings;
    }

    displayType(){
        console.log(`${this.title} has ${this.ARType} viewing support.`)
    }

    displayEffects(){
        console.log(`${this.title} has ${this.AREffect} movement.`)
    }

    displayWarning(){
        console.log(`${this.title} ${this.ARWarnings}.`)
    }
}

let bladeRunnerAR = new ARSupportedMovie(movie,actors,earnings,rating,releaseDate, "haptic", "shaking", "may cause seizures");



bladeRunnerAR.displayType();
bladeRunnerAR.displayEffects();
bladeRunnerAR.displayWarning();

console.log(ARSupportedMovie.displaySupport)