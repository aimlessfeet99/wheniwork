import axios from "../axios";

const people = {
    get: (page: number) => {
        return axios.get(`people/?page=${page}`).then((response: any) => {
            return response.data
        });
    },
    getOne: (url: string) => {
        return axios.get(url).then(async (response: any) => {
            if(response.data.homeworld) {
                let homeworld = await axios.get(response.data.homeworld)
                response.data.homeworld = homeworld.data
                return response.data
            }
        });
    }
}

export default people