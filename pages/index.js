import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kick Start!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my first app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>I will provide the
          information in this file.
        </p>
        </main>
       {/* <!-- main banner --> */}
      <section class="bgimage" id="home">
          <div class="container-fluid">
              <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                  <h2 class="hero_title">Hi, it's me Brad</h2>
                  <p class="hero_desc">I am a professional freelancer in New York City</p>
              </div>
              </div>
          </div>
      </section>
      {/* <div class="wrapper"> */}
      <div class="static-txt">I am a</div>

      <ul class="dynamic-txts">
        <li>
          <span>Fun</span>
        </li>
        <li>
          <span>Run</span>
        </li>
        <li>
          <span>Bun</span>
        </li>
      </ul>
      {/* </div> */}

      {/* <Footer /> */}
    </div>
  );
}
