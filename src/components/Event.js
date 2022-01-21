import style from "../styles/Event.module.css";

function Event() {
  return (
    <div>
      <div className={style.footer1}>
        <div className={style.footer_mid}>
          <div className={style.left}>
            <h5>Арга хэмжээ</h5>
            <p className={style.italic_txt}>
              Lorem, ipsum dolor sit amet consectetur
              <span>adipisicing elit.</span> Facere, asperiores!
            </p>
            <div className={style.date}>
              <div className={style.month}>
                <div className={style.left}>
                  <h4>21</h4>
                  <p>8САР</p>
                </div>
                <div className={style.right1}>
                  <h5>Lorem ipsum dolor sit.</h5>
                  <p>Админ / хурлын заал</p>
                </div>
              </div>
              <div className={style.month}>
                <div className={style.left}>
                  <h4>27</h4>
                  <p>8САР</p>
                </div>
                <div className={style.right1}>
                  <h5>Lorem ipsum dolor sit.</h5>
                  <p>Админ / хурлын заал</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <h5>Арга хэмжээ</h5>
            <p className={style.italic_txt}>
              Lorem, ipsum dolor sit amet consectetur
              <span>email address</span> Facere, asperiores!
            </p>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              eaque?
            </h6>
            <form action="">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Цахис шуудангаа оруулна уу"
              />
              <button>
                Илгээх<i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
