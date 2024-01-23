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
        const response = await(result.json())
        return (response);
};

export const create = async (userId, data, owner) => {2
    const newComment = await request.post(baseUrl, {
        userId,
        data,
        owner,
    });

    return newComment;
};

export const remove = async (coomentId) => request.remove(`${baseUrl}/${coomentId}`);
