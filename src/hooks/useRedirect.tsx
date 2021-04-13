import { useHistory } from 'react-router';

export const useRedirect = () => {
    
    const history = useHistory();

    return {
        history,
        redirect: (path: string) => history.push(path)
    };
}