import AxiosClient from './AxiosClient';
import withClientAuth from './withClientAuth';
import ClientHeaderAuth from './ClientHeaderAuth';

const headerAuth = new ClientHeaderAuth(process.env.APP_AUTH_HEADER as string, 'Ghost');
const AuthClient = withClientAuth(headerAuth)(AxiosClient);

export const client = new AuthClient(
    {
        baseURL: process.env.BASE_URL,
    },
    {
        response: [
            (response) => {
                return response;
            },
            (error) => {
                return Promise.reject(error);
            },
        ],
    },
);

export function authorize(token: string) {
    client.authorize(token);
}

export default client;