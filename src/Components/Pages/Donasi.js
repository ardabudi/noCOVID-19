import React from "react";
import TopNav from "../Navs/TopNav";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

class Donasi extends React.Component {
  changePage = (page) => {
    window.open(page);
  };
  render() {
    return (
      <>
        <TopNav active="donasi" />
        <header
          className="masthead"
          style={{
            backgroundImage: "url('./img/covid19.jpg')",
            top: 0,
            left: 0,
            right: 0,
            height: "20vh",
            position: "fixed",
            zIndex: -1,
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h2
                    style={{
                      textShadow: "1px 1px 2px #ccc",
                    }}
                  >
                    Ayo Selamatkan Nyawa Sesama
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div style={styles.container} className="mobile-back">
          <div className="container">
            <div className="row mt-3">
              <div className="col-sm-12 mb-4">
                <h2 style={{ fontWeight: "bolder" }}>Bersama Lawan Corona</h2>
                <p className="text-muted">
                  Setiap pemberian pasti ada balasannya. Berikut rekomendasi
                  situs donasi yang transparan.
                </p>
              </div>
              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center donate-card"
                  onClick={() =>
                    this.changePage(
                      "https://kitabisa.com/campaign/indonesialawancorona"
                    )
                  }
                >
                  <div className="card-body">
                    <img
                      src="https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/user/16084/23_16084_1541503323_775093_s.png"
                      alt="freepick_image"
                      style={{
                        height: "5.2em",
                        width: "5.2em",
                        borderRadius: "50%",
                      }}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Kita Bisa
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center donate-card"
                  onClick={() =>
                    this.changePage(
                      "https://donasi.dompetdhuafa.org/bersamalawancorona/"
                    )
                  }
                >
                  <div className="card-body">
                    <img
                      src="https://donasi.dompetdhuafa.org/wp-content/themes/donasidd/assets/img/logo-dd-with-text.png"
                      alt="freepick_image"
                      style={{
                        height: "5em",
                      }}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Dompet Dhuafa
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center donate-card"
                  onClick={() => this.changePage("https://act.id/home/in")}
                >
                  <div className="card-body">
                    <img
                      src="https://act.id/assets/images/ACT-LOGO.svg"
                      alt="freepick_image"
                      style={{
                        height: "5.1em",
                      }}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Aksi Cepat Tanggap
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center donate-card"
                  onClick={() => this.changePage("https://benihbaik.com/")}
                >
                  <div className="card-body">
                    <img
                      src="https://benihbaik.com/temanbaik/img/LogoWeb2.png"
                      alt="freepick_image"
                      style={{
                        height: "4.6em",
                        width: "13.7em",
                      }}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Benih Baik
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light pt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontWeight: "bold" }}>Kutipan</h3>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div
                      className="card mb-3 bg-light"
                      style={{ border: "none" }}
                    >
                      <div className="row no-gutters">
                        <div
                          className="col-md-3"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src="https://cdn0-production-images-kly.akamaized.net/TrPHk-mZWviC4g-zS2c5aL4p6vg=/640x853/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3086594/original/020005700_1585279254-90502891_521781442088014_100642859533997867_n.jpg"
                            className="card-image mt-3"
                            alt="..."
                            style={{
                              borderRadius: "10px 25px",
                              height: 150,
                              width: 160,
                            }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title mb-0">
                              dr. Tirta Mandiri Hudhi
                            </h5>
                            <p className="card-text">
                              <small className="text-muted">Influencer</small>
                            </p>
                            <p className="card-text">
                              "Yang punya follower banyak, yang selalu pamer
                              mobil mewah di setiap Instagram dan Youtube-nya,
                              tolonglah jual 1 mobilmu dan berikan donasi ke
                              teman-teman kalau emang kamu pahlawan real di sini
                              man. Jangan cuma manfaatin follower untuk pribadi"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <div
                      className="card mb-3 bg-light"
                      style={{ border: "none" }}
                    >
                      <div className="row no-gutters">
                        <div
                          className="col-md-3"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src="https://thumb.viva.co.id/media/frontend/thumbs3/2019/08/08/5d4bec262c4dd-ketua-kpi-agung-suprio_665_374.jpg"
                            className="card-image mt-3"
                            alt="..."
                            style={{
                              borderRadius: "10px 25px",
                              height: 150,
                              width: 160,
                            }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title mb-0">Agung Suprio</h5>
                            <p className="card-text">
                              <small className="text-muted">Ketua KPI</small>
                            </p>
                            <p className="card-text">
                              "Negeri ini tengah menghadapi kondisi yang tidak
                              mudah, selayaknya lembaga penyiaran pun hadir
                              sebagai medium yang juga merekatkan solidaritas
                              sosial dan meningkatkan kepedulian lewat konten
                              siaran. Karena ini adalah sebuah kerja bersama
                              menyelamatkan bangsa dari pandemi wabah Covid-19"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const styles = {
  container: {
    background: "#fff",
    marginTop: "18vh",
    paddingTop: "2vh",
    paddingBottom: "2vh",
  },
  ct: {
    fontWeight: "bold",
    marginTop: "5px",
  },
};

export default Donasi;
