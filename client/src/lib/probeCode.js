if (data.files) {
    options.body = data;
    options.headers = {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "type": "formData"
    };
}else {
    options.body = JSON.stringify(data);
    options.headers = {
        'Content-type': 'application/json'
    };
    if (token) {
        options.headers = {
            ...options.headers,
        };
    }
}


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