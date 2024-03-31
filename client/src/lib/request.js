const buildOptions = (data) => {
    const options = {};
    const token = localStorage.getItem('accessToken');

    if (data) {
        if (data.email) {
            options.body = JSON.stringify(data);
            options.headers = {
                'Content-type': 'application/json'
            };
            if (token) {
                options.headers = {
                    ...options.headers,
                };
            }
        } else {
            options.body = data;
            options.headers = {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "type": "formData"
            };
           
        }
    }

    if (token) {
        options.headers = {
            'X-Authorization': token
        };
    }
    return options;
};

const request = async (method, url, data) => {

    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');