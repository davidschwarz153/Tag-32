type StarWars = [string, string]

const starWars: StarWars[] = [
    ["Luke Skywalker", "Mark Hamill"],
    ["Darth Vader", "James Earl Jones"],
    ["Yoda", "Frank Oz"],
    ["Han Solo", "Harrison Ford"],
    ["Princess Leia", "Carrie Fisher"]
]    
for (const element of starWars){
    console.log(element);
}

//:                             

type Employees = [number, string, string, number]

const employees: Employees[] = [
    [1 , "Max", "Personal", 40000],
    [2 , "Tom", "Marketing", 50000],
    [2 , "Tom", "Sales", 60000],
    [3 , "Sven", "IT", 70000],
    [4 , "Tim", "Manager", 80000]
]
console.log(employees);

//:                             

const starWarsCharacters = new Set(["Luke Skywalker", "Darth Vader", "Obi Wan Kenobi"])
console.log(starWarsCharacters);
starWarsCharacters.add("Leia Organa")
console.log(starWarsCharacters);
starWarsCharacters.add("Leia Organa")
console.log(starWarsCharacters);

//:                             

const marvel:string[] = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Spider Man"]
marvel.push("Iron Man", "Thor")
console.log(marvel);
const marvelSet = new Set(marvel)
console.log(marvelSet);

//:                             

const favoriteBands: Map<string, string[]> = new Map([
    ["The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]],
    ["Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]],
    ["Kiss", ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"]],
    ["NWA", ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"]],
    ["Kraftwerk", ["Ralf Hütter", "Florian Schneider", "Karl Bartos", "Wolfgang Flür"]],
]);
console.log(favoriteBands.size);
favoriteBands.set("Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"]);
console.log(favoriteBands.size);
const kraftwerkMembers = favoriteBands.get("Kraftwerk")
if (kraftwerkMembers) {
    console.log(kraftwerkMembers[kraftwerkMembers.length - 1]);
}

//:                             

console.log(favoriteBands.has("Metallica"));
favoriteBands.set("Queen", ["Paul McCartney","John Lennon","George Harrison","Ringo Starr"])
console.log(favoriteBands.get("Queen"));

//:                             

for (const [key,[value]] of favoriteBands){
    if (value.length >= 12) {
        console.log(`Band: ${key}, Member: ${value}, Length: ${value.length}`);
    }
}

//:                             

const friendsNames = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]

for (const el of friendsNames){
    console.log(el);
}