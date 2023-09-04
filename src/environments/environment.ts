export const environment = {
  production: false,
  auth0: {
    domain: 'dev-zu2qkv31bsmg4ohs.us.auth0.com',
    clientId: 'eD8pM8An1CWZ4rqL02hCreNbhVcfWYd2',
    authorizationParams: {
      redirect_uri: 'http://localhost:4200/callback',
    },
    errorPath: '/error-path',
  },
  api: {
    serverUrl: 'http://localhost:6060',
  },
};
