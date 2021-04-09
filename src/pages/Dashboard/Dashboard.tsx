import { useParams } from 'react-router';
import { UserData } from '../../data';

export const DashboardPage = ({ user } : { user: UserData }) => {

    let { id } = useParams<{ id: string }>();

    return (
        <div className='app'>
            <h1>Dashboard (ID: {id})</h1>
        </div>
    );
}