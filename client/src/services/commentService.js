import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/rooms/comments';

export const getAll = async (roomId, text) => {
    // const query = new URLSearchParams({
    //     where: `roomId="${roomId}"`,
    //     load: `owner=_ownerId:users`,
    // });

    // const result = await request.get(`${baseUrl}?${query}`);
    const result = await request.get(baseUrl)

    return Object.values(result);
};

export const create = async (roomId, text) => {
    const newComment = await request.post(baseUrl, {
        roomId,
        text,
    });

    return newComment;
};
