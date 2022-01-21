import Styles from "../styles/Navbar.module.css";
function Nav() {
  // $(document).ready(function () {
  //   $(window).scroll(function () {
  //     var scroll = $(window).scrollTop();
  //     if (scroll > 300) {
  //       $(".navbar").css("background", "#0F304F");
  //     } else {
  //       $(".navbar").css("background", "transparent");
  //     }
  //   });
  // });
  return (
    <div className={Styles.navbar}>
      <div className={Styles.logo}>
        <a href="#home">
          <img src="./img/logo_png.png" alt="" />
        </a>
      </div>
      <div className={Styles.list}>
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#rooms">rooms</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="#event">event</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
