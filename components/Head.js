import Head from 'next/head';

export default ({ title = 'Stronger Unified' }) => (
  <Head>
    <title>{title}</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="Stronger Unified" />
    <link href="/static/css/font-awesome.min.css" rel="stylesheet" />
    <link href="/static/css/flaticon.css" rel="stylesheet" />
    <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/static/css/animate.css" rel="stylesheet" />
    <link href="/static/css/owl.carousel.css" rel="stylesheet" />
    <link href="/static/css/owl.theme.css" rel="stylesheet" />
    <link href="/static/css/owl.transitions.css" rel="stylesheet" />
    <link href="/static/css/jquery.fancybox.css" rel="stylesheet" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon.png"
    />
    <link rel="manifest" href="/static/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/safari-pinned-tab.svg"
      color="#f3c8a2"
    />
    <meta name="msapplication-TileColor" content="#f3c8a2" />
    <meta name="msapplication-config" content="/static/browserconfig.xml" />
    <meta name="theme-color" content="#f3c8a2" />
    <script src="static/js/jquery.min.js" />
    <script src="static/js/bootstrap.min.js" />
    <script src="static/js/jquery-plugin-collection.js" />
    <script src="static/js/script.js" />
  </Head>
);
