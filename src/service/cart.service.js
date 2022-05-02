import httpService from "./http.service";

const cartEndPoint = "cart/";

const cartService = {
    get: async () => {
        const { data } = await httpService.get(cartEndPoint);
        console.log(data);
        return data;
    },
    post: async (item) => {
        const { data } = await httpService.post(cartEndPoint, item);
        console.log(data);
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(cartEndPoint + id);
        console.log(data);
        return data;
    },
};

export default cartService;
