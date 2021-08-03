import axios from 'axios';

const userUrl = "https://reqres.in/api/users?1=1";
const userPageIndex = 1;

const UserService = {
    getUsers: (userPageIndex) => {
        let _actualUserUrl = `${userUrl}&page=${userPageIndex}`;
        return axios.get(_actualUserUrl);       
    }
}


export default UserService;