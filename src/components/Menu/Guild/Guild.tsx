import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IGuild } from '../../../data';
import { GuildIcon } from '.';
import './Guild.css';

export const Guild = ({ guild } : { guild: IGuild }) => {

    const { id, name } = guild;
    const link = `/dashboard/${id}`;
    const btn_id = `btn-dashboard-guild-${id}`;

    return (
        <div className='guild' onClick={() => document.getElementById(btn_id)?.click()}>

            <div className='guild-info'>
                <GuildIcon guild={guild} />
                <h3 className='guild-name'>{name}</h3>
            </div>

            <Button variant='success' size='sm' as={Link} to={link} id={btn_id}>Go to Dashboard</Button>

        </div>
    );
}