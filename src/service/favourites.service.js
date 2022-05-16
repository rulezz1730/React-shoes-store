import httpService from "./http.service";

const favouritesEndPoint = "favourites/";

const favouritesService = {
    post: async (favouriteItem) => {
        const { data } = await httpService.post(
            favouritesEndPoint,
            favouriteItem
        );
        console.log(data);
        return data;
    },

    get: async () => {
        const { data } = await httpService.get(favouritesEndPoint);
        return data;
    },

    delete: async (id) => {
        const { data } = await httpService.delete(favouritesEndPoint + id);
        console.log(data);
        return data;
    },
};

export default favouritesService;
