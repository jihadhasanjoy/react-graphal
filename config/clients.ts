import { ApolloClient, InMemoryCache } from "@apollo/client";
import { constans } from "./constants";

const client = new ApolloClient({
    uri: constans.BASE_URL,
    cache: new InMemoryCache(),
    headers:{
        Authorization: `Bearer ${constans.TOKEN}`
    }
});

export default client;