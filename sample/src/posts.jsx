import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { save_users } from './features/user/userSlice';

function Posts(){
    const dispatch = useDispatch()

    const arrOfUsers = [
        {
            username: 'kenny',
            email: 'kenny@gmail.com',
            password: 'kenny'
        },
        {
            username: 'kennedy',
            email: 'kennedy@gmail.com',
            password: 'kennedy'
        },
        {
            username: 'kelvin',
            email: 'kelvin@gmail.com',
            password: 'kelvin'
        }
    ];

    useEffect(() => {
        dispatch(save_users());
    },[]);

    // HIGHER ORDER ARRAY METHODS

    //filter - logic - grab one user
    const filter_user = () => {
        return arrOfUsers.filter((user) => user.username === 'kenny')
    }

    return(
        <div>
            <h3>users</h3>
            <div>
                {arrOfUsers.map((user) => {
                    return <div>
                        <div>Email: {user.email}</div>
                        <div>Username: {user.username}</div>
                        <div>Password: {user.password}</div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Posts;