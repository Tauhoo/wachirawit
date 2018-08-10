import Head from "next/head";
export default Element => props => (
  <>
    <Head>
      <title>Wachirawit</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style>
      {`
      body, html {
        margin: 0px;
        padding: 0px;
        background-color: #9b59b6;
      }
    `}
    </style>
    {Element}
  </>
);
