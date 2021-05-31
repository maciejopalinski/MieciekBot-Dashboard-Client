import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Spinner } from '../../components';
import { fetchGuildConfig } from '../../data';

export const DashboardPage = () => {

    const { id } = useParams<{ id: string }>();

    const { data, isSuccess } = useQuery(`/guilds/${id}/config`, () => fetchGuildConfig(id));

    if(isSuccess) {

        const guild = data!.data;

        return (
            <main className='app'>

                <h1>Dashboard (ID : {id})</h1>

                <code>
                    {JSON.stringify(guild)}
                </code>

            </main>
        );
    }
    else {
        return <Spinner />;
    }
}