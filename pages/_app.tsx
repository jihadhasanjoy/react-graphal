import clients from '@/app/config/clients';
import '@/styles/_index.scss';
import { ApolloProvider } from "@apollo/client";
import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import React from "react";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={clients}>
    <Component {...pageProps} />
  </ApolloProvider>
  );
}