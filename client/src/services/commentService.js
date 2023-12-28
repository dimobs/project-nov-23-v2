import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (roomId) => {
    const query = new URLSearchParams({
        where: `gameId="${roomId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (roomId, text) => {
    const newComment = await request.post(baseUrl, {
        roomId,
        text,
    });

    return newComment;
};
