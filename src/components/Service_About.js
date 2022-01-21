import style from "../styles/Services_About.module.css";

function Services() {
  return (
    <div className={style.service_about}>
      <div className={style.service}>
        <h1>
          <span>facilities</span> & services
        </h1>
        <p>With the best luxury spa, salon and wedding experiences</p>
        <div className={style.services}>
          <div className={(style.select_service, style.back1)}>
            <span>bar &</span>
            <p>restaurant</p>
          </div>
          <div className={(style.select_service, style.back2)}>
            <span>spa</span>

            <p> salon</p>
          </div>
          <div className={(style.select_service, style.back3)}>
            <span>healt club &</span>
            <p>swimming pool</p>
          </div>
          <div className={(style.select_service, style.back4)}>
            <span>concert &</span>
            <p>event hall</p>
          </div>
        </div>
      </div>
      <div className={style.about}>
        <div className={style.about_history} id="about">
          <div className={style.about_title}>
            <h1>
              <span>about &</span> history
            </h1>
            <p>With the best luxury spa, salon and wedding experiences</p>
          </div>
          <div className={style.detail_text}>
            <div className={style.history_detail}>
              <div className={style.about_title_text}>
                <h1>History</h1>
                <h2>
                  CORPORATE HOTEL - <span>2008</span>
                </h2>
              </div>
              <p>
                Vivamus vitae ex a magna cursus pretium. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia.
                Curae posuere turpis facilisis, fringilla odio. Nunc eget purus
                at dolor venenatis cursus et non arcu. Praesent rutrum
                condimentum risus. Condimentum nibh, ut fermentum massa justo
                sit amet risus. mentum massa <br />
                <br />
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fer condimentum nibh, ut fermentum massa
                justo sit amet risus. mentum massa justo sit amet risus.
              </p>
              <div className={style.sign}>
                <div className={style.sign_img}>
                  <img src="/img/sign.png" alt="" />
                </div>
                <div className={style.role}>
                  <p>Cheif Executive Officer</p>
                </div>
              </div>
            </div>
            <div className={style.about_detail}>
              <div className={style.about_title_text}>
                <h1>About</h1>
                <h2>
                  CORPORATE HOTEL - <span>2008</span>
                </h2>
              </div>
              <p>
                A hotel is an establishment that provides paid lodging on a
                short-term basis. Facilities provided may range from a
                modest-quality mattress in a small room to large suites with
                bigger, higher-quality beds, a dresser, a fridge and other
                kitchen facilities, upholstered chairs, a flatscreen television
                and en-suite bathrooms. Small, lower-priced hotels may offer
                only the most basic guest services and facilities.
              </p>
              <br />
              <br />
              <br />
              <div className={style.sign}>
                <div className={style.sign_img}>
                  <img src="/img/sign.png" alt="" />
                </div>
                <div className={style.role}>
                  <p>Cheif Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
