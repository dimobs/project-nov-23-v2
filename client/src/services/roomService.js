import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/rooms'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`, );

    return result;
}

export const getLatest = async () => {
    // const query = new URLSearchParams({
    //     sortBy: `_createdOn desc`,
    //     offset: 0,
    //     pageSize: 3,
    // });

    const query = encodeURIComponent(`offset=0&pageSize=3`);
    console.log(query);
    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);

    return result;
}

export const create = async (roomData) => {
    const result = await request.post(baseUrl, roomData);

    return result;
};

export const edit = async (roomId, roomData) => {
    const result = await request.put(`${baseUrl}/${roomId}`, roomData);

    return result;
};

export const remove = async (roomId) => request.remove(`${baseUrl}/${roomId}`);
