import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async () => {
    // const query = new URLSearchParams({
    //     where: `roomId="${roomId}"`,
    //     load: `owner=_ownerId:users`,
    // });

    // const result = await request.get(`${baseUrl}?${query}`);

        // const result = await request.get(baseUrl);
        const result = await fetch(baseUrl);
        
        return (result);
};

export const create = async (userId, data) => {
    const newComment = await request.post(baseUrl, {
        userId,
        data,
    });

    return newComment;
};
