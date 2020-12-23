import axios from 'axios';
const BASE_URL = "https://127.0.0.1:8081/api/";

class UserService
{
    getAllUsers = () =>{
        return axios.get(BASE_URL + '/all_temps');
    }
    
}
export default new UserService();