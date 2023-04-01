import contenstack from 'contentstack';

const createStack = () => {
  console.log(process.env.REACT_APP_CONTENTSTACK_API_KEY);
  console.log(process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN);
  console.log(process.env.REACT_APP_CONTENTSTACK_ENVIRONMENT);
  return contenstack.Stack({
    api_key: process.env.REACT_APP_CONTENTSTACK_API_KEY,
    delivery_token: process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN,
    environment: process.env.REACT_APP_CONTENTSTACK_ENVIRONMENT
  });
};

export const stack = createStack();
