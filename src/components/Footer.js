import style from "../styles/Footer.module.css";

function Footer() {
  return (
    <div>
      <div className={style.footer} id="contact">
        <div className={style.footer_bot}>
          <img src="/img/logo.svg" alt="" />
          <p>
            Махатма Ганди гудамж 39, Сүхбаатар, Улаанбаатар, Монгол, 17011
            <span>- (+976) 7000 2030 - INFO@CORPORATEHOTEL.MN</span>
          </p>
        </div>
        <div className={style.footer_bot_end}>
          <div className={style.logos}>
            <img src="/img/logo1.svg" alt="" />
            <img src="/img/logo1.svg" alt="" />
            <img src="/img/logo1.svg" alt="" />
            <img src="/img/logo1.svg" alt="" />
          </div>
          <div className={style.list}>
            <div className={style.list_top}>
              <ul className={(style.flex, style.row)}>
                <li>Бидний тухай</li>
                <li>Үйлчилгээ</li>
                <li>Түгээмэл асуултууд</li>
                <li>Бодлого</li>
                <li>Холбоо барих</li>
              </ul>
            </div>
            <div className={style.list_bot}>
              <p>
                2022 <span>Corporate Convention Center</span> - All rights
                reserved <span> </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
