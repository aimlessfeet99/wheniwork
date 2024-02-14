import { ActionConstent} from "constants/store";
import { People } from "interfaces";
import api from "endpoints";

export const fetchPeople = async (page: number) => {
    const people: People = await api.people.get(page);
    return { type: ActionConstent.SET_PEOPLE, payload: people }
}

export const fetchCharacter = async (url: string) => {
    const people: People = await api.people.getOne(url);
    return { type: ActionConstent.SET_CHARACTER, payload: people }
}

export const cleanCharacter = () => {
    return { type: ActionConstent.RESET_CHARACTER }
}
