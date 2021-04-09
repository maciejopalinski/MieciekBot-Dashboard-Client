import { UserData } from '../../../data';

import './Avatar.css';

export const UserAvatar = ({ user } : { user: UserData }) => {
    
    return (
        <img className='user-avatar d-none d-lg-block' src={user.getAvatar()} alt='User Avatar'></img>
    );
}