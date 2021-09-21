import axios from 'axios';

export const apiRequest = () => {
    // Initial Options
    const options = {
        baseURL: 'https://reqres.in',
    };
    // Create instance from axios
    const instance = axios.create(options);
    // Add a response interceptor
    instance.interceptors.response.use(function (response) {
        // If you need do something with response here
        if (response) return response;
        return Promise.reject('Data Not Found');
    }, function (reject) {
        if (!reject.response) {
            alert('پاسخی از سرور دریافت نشد!');
            return Promise.reject(reject);
        }

    });
    return instance;
};
