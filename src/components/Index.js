import Link from "next/link";

function Index() {
  return (
    <div className="home h-screen truncate relative flex">
      <div className="branches flex justify-end">
        <div className="branch">
          <Link href="/corp">
            <a>
              <div className="corp h-screen">
                <div className="relative image">
                  <span className="absolute opacity-50 inset-0 z-10 bg-black "></span>
                  <img src="/img/corp1.svg" alt="" />
                </div>
                <div className="info relative text-white z-20 py-4 px-10 flex flex-col justify-between">
                  <div className="text ">
                    The Corporate Hotel and Convention Centre
                  </div>
                  <div className="phone flex ">
                    <span>
                      <i className="fas fa-phone-alt"> </i>
                    </span>
                    <p className=" mx-4">7000 2030</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="branch ">
          <a href="#">
            <div className="hotel h-screen ">
              <div className="relative image">
                <span className="absolute opacity-50 inset-0 z-10 bg-black"></span>
                <img src="/img/corp2.svg" alt="" />
              </div>
              <div className="info relative text-white z-20 py-4 px-10 flex flex-col justify-between">
                <div className="text ">The Corporate Hotel Ulaanbaatar</div>
                <div className="phone flex ">
                  <span>
                    <i className="fas fa-phone-alt"> </i>
                  </span>
                  <p className=" mx-4">1133 4411</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="branch ">
          <a href="#">
            <div className="nukht h-screen">
              <div className="relative image">
                <span className="absolute opacity-50 inset-0 z-10 bg-black"></span>
                <img src="/img/corp3.svg" alt="" />
              </div>
              <div className=" py-4 px-10 info relative text-white z-20 flex flex-col justify-between">
                <div className="text">The Corporate Hotel & Resort Nukht</div>
                <div className="phone flex ">
                  <span>
                    <i className="fas fa-phone-alt"> </i>
                  </span>
                  <p className=" mx-4">7701 5555</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="branch ">
          <a href="#">
            <div className="corp h-screen">
              <div className="relative image">
                <span className="absolute opacity-50 inset-0 z-10 bg-black"></span>
                <img src="/img/corp4.svg" alt="" />
              </div>
              <div className="info relative py-4 px-10 text-white z-20 flex flex-col justify-between">
                <div className="text ">The Corporate at Zaisan</div>
                <div className="phone flex ">
                  <span>
                    <i className="fas fa-phone-alt"> </i>
                  </span>
                  <p className=" mx-4">7735 3399</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="icons absolute flex-col flex z-30 ">
        <Link href="https://www.facebook.com/TheCorporateConventionCentre">
          <a className="text-white text-2xl mb-6">
            <i className="fab fa-facebook-square "></i>
          </a>
        </Link>
        <Link href="https://www.instagram.com/thecorporateconventioncentre/">
          <a className="text-white text-2xl mb-6">
            <i className="fab fa-instagram"></i>
          </a>
        </Link>
        <Link href="https://twitter.com/corporatehotel">
          <a className="text-white text-2xl mb-6">
            <i className="fab fa-twitter"></i>
          </a>
        </Link>
        <Link href="https://www.youtube.com/channel/UCbJan99CxGc66YKt3bKGsHA">
          <a className="text-white text-2xl mb-6">
            <i className="fab fa-youtube"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}
export default Index;
