import People, { fromJsonToPeople } from "../models/people";

export async function getPeople(page: number = 1): Promise<People[]> {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await response.json();
    const peopleResult = data['results'].map((person: any) =>fromJsonToPeople(person));

    return peopleResult;
}