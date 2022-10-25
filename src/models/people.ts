class People {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;

    constructor(
        name: string,
        height: string,
        mass: string,
        hair_color: string,
        skin_color: string,
        eye_color: string,
        birth_year: string,
        gender: string,
        homeworld: string,
        films: string[],
        species: string[],
        vehicles: string[],
        starships: string[],
        created: string,
        edited: string,
        url: string,
    ) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color;
        this.skin_color = skin_color;
        this.eye_color = eye_color;
        this.birth_year = birth_year;
        this.gender = gender;
        this.homeworld = homeworld;
        this.films = films;
        this.species = species;
        this.vehicles = vehicles;
        this.starships = starships;
        this.created = created;
        this.edited = edited;
        this.url = url;
    }

}

export function fromJsonToPeople(json: any): People {
    return new People(
        json["name"],
        json["height"],
        json["mass"],
        json["hair_color"],
        json["skin_color"],
        json["eye_color"],
        json["birth_year"],
        json["gender"],
        json["homeworld"],
        json["films"],
        json["species"],
        json["vehicles"],
        json["starships"],
        json["created"],
        json["edited"],
        json["url"],
    );
}

export default People;