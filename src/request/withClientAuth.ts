import AxiosClient from './axiosClient';

function withClientAuth(auth: { authorize(client: AxiosClient, token: string): AxiosClient }) {
    return (Client: typeof AxiosClient) => {
        class AuthClient extends Client {
            authorize(token: string) {
                auth.authorize(this, token);
            }
        }

        return AuthClient;
    };
}

export default withClientAuth;
