import Head from "next/head";
import Index from "../src/components/Index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Corporate Mongolia</title>
        <meta name="description" content="Corporate ulaanbaatar" />
        <meta name="description" content="Corporate hotel" />
        <link rel="icon" href="/img/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <Index />
    </div>
  );
}
