import { MouseEventHandler } from 'react';
import { UserData } from '../../../data';

import './Avatar.css';

export const UserAvatar = ({ user, onClick } : { user: UserData, onClick?: MouseEventHandler }) => {
    
    return (
        <img
            className='user-avatar'
            src={user.getAvatar()}
            alt='User Avatar'

            onClick={onClick}
        >
        </img>
    );
}