import { MouseEventHandler } from 'react';
import { IUser } from '../../../data';
import { getUserAvatar } from '../../../utils';
import './Avatar.css';

export const UserAvatar = ({ user, onClick } : { user: IUser, onClick?: MouseEventHandler }) => {
    
    return (
        <img
            className='user-avatar'
            src={getUserAvatar(user)}
            alt='User Avatar'

            onClick={onClick}
        >
        </img>
    );
}