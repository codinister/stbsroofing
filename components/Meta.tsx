import React from 'react';
import Head from 'next/head';

type Title = {
  title: string;
};

const Meta = ({ title }: Title) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Roofing sheets company in Ghana" />
      <meta
        name="keywords"
        content="Roofing Sheets,Long span roofing sheet,self lock roofing sheet"
      />
      <meta
        name="facebook-domain-verification"
        content="81ygedlri6p6svhccqyuxzy68ya45p"
      />
      <link rel="icon" href="/favicon.PNG" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
