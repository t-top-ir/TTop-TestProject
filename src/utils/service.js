import {apiRequest} from './api';

const apiUrls = {
    allUsers: '/api/users',
    singleUser: '/api/users/',
};

class UserService {
    // Get All Users
    getAllUsers(requestParams) {
        return apiRequest().get(apiUrls.allUsers, {
            params: requestParams,
        }).then(response => {
            const {data} = response;
            return Promise.resolve({
                success: true,
                data: data?.data,
            });
        }).catch(error => {
            console.log('UserService getAllUsers Error:', error);
            return Promise.resolve({
                success: false,
                data: null,
            });
        });
    }

    // Get User
    getUser(requestBody) {
        return apiRequest().get(`${apiUrls.singleUser}${requestBody.id}`).then(response => {
            const {data} = response;
            return Promise.resolve({
                success: true,
                data: data?.data,
            });
        }).catch(error => {
            console.log('UserService getUser Error:', error);
            return Promise.resolve({
                success: false,
                data: null,
            });
        });
    }
}

export default new UserService();
