import httpService from "./http.service";

const ordersEndPoint = "orders/";

const ordersService = {
    post: async (obj) => {
        const { data } = await httpService.post(ordersEndPoint, obj);
        return data;
    },
};

export default ordersService;
