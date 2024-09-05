import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Amir Mhd's Profolio."
      />
      <meta
        name="keywords"
        content="Amir Mhd, Amir,  MohammadiKarbalaei, data science portfolio, machine learning, vscode-portfolio"
      />
      <meta property="og:title" content="Amir Mhd's Portfolio" />
      <meta
        property="og:description"
        content="Amir Mhd's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Amir Mhd',
};
