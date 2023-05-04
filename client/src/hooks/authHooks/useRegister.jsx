import axios from 'axios';
import {useQuery} from 'react-query';

const postRegister = async ({email, password}) => {
    const response = await axios.post('http://localhost:4000/api/auth/register', {
        email,
        password,
    });
    return response.data;
    }

const useRegister = () => {
    return useQuery('register', postRegister);
;
}

export default useRegister;