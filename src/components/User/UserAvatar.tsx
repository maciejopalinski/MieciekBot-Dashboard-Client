import React from 'react';
import { User, getUserAvatar } from '../../util';

import './UserAvatar.css'

export function UserAvatar({ user } : { user: User }) {
    
    return (
        <div className='user-avatar d-none d-lg-block' style={{
            backgroundImage: `url(${getUserAvatar(user.id, user.avatar, 512)})`
        }}>
        </div>
    );
}