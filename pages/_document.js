import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, injectGlobal } from "styled-components";

injectGlobal`
  body {
    margin: 0;
    background: #9b59b6;
    overflow: hidden;
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
  }
`;

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html>
        <Head>
          <title>Wachirawit</title>
          <meta name="theme-color" content="#000" />
          <meta
            name="description"
            content="Hi! I'm Chun Rapeepat, Nice to meet you here. I'm the one who loved in computer such as Web Technology, Machine Learning, etc. and also interested in Mathematic, StartUp & Bussiness too."
          />
          <meta
            name="keywords"
            content="chun, chunza2542, Chun Rapeepat, Programming, NoobProgramming, NoobProgrammer, thechun, resume, portfolio, site"
          />
          <link
            rel="shortcut icon"
            href="/static/logo.png"
            type="image/x-icon"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Passion+One"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width" />
          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
