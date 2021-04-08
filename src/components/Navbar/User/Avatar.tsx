import { UserData } from '../../../data';

import './Avatar.css';

export const UserAvatar = ({ user } : { user: UserData }) => {
    
    return (
        <img className='user-avatar' src={user.getAvatar()} alt='User Avatar'></img>
    );
}