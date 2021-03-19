

const addition = (num1, num2) =>{ 
    return num1 + num2;
}

console.log(addition(1, 2));

function subtraction(num1, num2){
    return num2 - num1;
}

console.log(subtraction(30,31))

class Dog{
    constructor(breed, name, age, temperament){
        this.breed = breed;
        this.name = name;
        this.age = age;
        this.temperament = temperament;
    }

    dogInfo(){
        console.log(`${this.name} the dog is a ${this.age} year old ${this.breed} with an ${this.temperament} temperament.`)
    };
}

const luke = new Dog("Yorkie", "Luke", 5, "energetic");
console.log(luke.dogInfo());