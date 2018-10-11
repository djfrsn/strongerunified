import Head from 'next/head';

export default ({ title = 'Stronger Unified' }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content="Stronger Unified" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/favicon/safari-pinned-tab.svg"
      color="#f3c8a2"
    />
    <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#f3c8a2" />
    <meta
      name="msapplication-config"
      content="/static/favicon/browserconfig.xml"
    />
    <meta name="theme-color" content="#f3c8a2" />
  </Head>
);
