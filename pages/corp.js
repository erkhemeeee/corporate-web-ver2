import Head from "next/head";
import Navbar from "../src/components/Navbar";
import Service from "../src/components/Service_About";
import Event from "../src/components/Event";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home";
import Testimonials from "../src/components/Testimonials";
import Rooms from "../src/components/Room";

function Corp() {
  return (
    <div>
      <Head>
        <title>The Corporate Hotel and Conviention Center</title>
        <meta name="description" content="Corporate ulaanbaatar" />
        <meta name="description" content="Corporate hotel" />
        <link rel="icon" href="/img/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <Navbar />
      <Home />
      <Rooms />
      <Service />
      <Testimonials />
      <Event />
      <Footer />
    </div>
  );
}

export default Corp;
