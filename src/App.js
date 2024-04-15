import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import "../node_modules/bootstrap/dist/js/bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLeaf,
  faBullseye,
  faLock,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import mainimg from "./Assets/main.png";

import logo_one from "./Assets/logo.png";
import logoone from "./Assets/logo1.png";
import logotwo from "./Assets/logo2.png";
import logothree from "./Assets/logo3.png";
import logofour from "./Assets/logo4.png";
import logofive from "./Assets/logo5.png";
import logosix from "./Assets/logo6.png";
import cardimg1 from "./Assets/cardimg1.png";
import cardimg2 from "./Assets/cardimg2.png";
import demodashboards from "./Assets/demoProduct.png";
import user1 from "./Assets/users/user1.png";

import SubHeading from "./components/SubHeading/SubHeading";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      {/* hero section start  */}

      <section className="hero_section ">
        {/* ----------------Navbar---------------------- */}

        <Navbar />

        {/* ----------------Navbar---------------------- */}

        {/* ----------------Hero Section---------------------- */}

        <div className="hero_section d-flex justify-content-center align-items-center">
          <div class="container-fluid  ">
            <div class="row  justify-content-center align-items-center">
              <div className="col-lg-7 col-md-6 hero_text ">
                <SubHeading subheadings="Version 2.0 is here" />
                <h1 className="hero_heading">Pathway to productivity</h1>
                <p className="mt-3">
                  Celebrate the joy of accomplishment with an app designed to
                  track your progress, motivate your efforts, and celebrate your
                  successes.
                </p>
                <Button text="Get for free" />
                &nbsp;
                <button className=" btn " style={{ fontSize: "22px" }}>
                  Know More <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>

              <div className="col-lg-5 col-md-6 imgsection">
                <img src={mainimg} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* ----------------Hero Section---------------------- */}
      </section>

      {/* hero section end */}

      {/* company section starts  */}

      <section className="company_logo_section mt-5 pt-5 pb-5">
        <div class="container text-center mt-5 pb-5">
          <div class="row">
            <div className="col-lg-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={logoone} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logotwo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logothree} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logofour} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logofive} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logosix} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* company section starts  */}

      {/* demo photo section */}

      <section className="demoPhotoSection ">
        <div class="container text-center">
          <div className="col-lg-12">
            <SubHeading subheadings="Boost your productivity" />

            <h1 className="headings my-4 ">
              A more effective way <br /> to track progress
            </h1>

            <p>
              Effortlessly turn your ideas into a fully functional, <br />{" "}
              responsive, no-code SaaS website in just minutes with <br /> the
              set of free components for Framer.
            </p>
          </div>
        </div>

        <div class="container-fluid text-center">
          <div class="row">
            <div className="col-12">
              <img src={demodashboards} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div class="container mt-5 pb-5">
          <div class="row">
            <div className="col-lg-3 col-md-6">
              <FontAwesomeIcon icon={faLeaf} size="2x" />
              <h4>Integration ecosystem</h4>
              <p>Track your progress and motivate your efforts everyday.</p>
              <button className=" btn text-left" style={{ fontSize: "22px" }}>
                Know More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="col-lg-3 col-md-6">
              <FontAwesomeIcon icon={faBullseye} size="2x" />
              <h4>Goal setting and tracking</h4>
              <p>Set and track goals with manageable task breakdowns.</p>
              <button className=" btn text-left" style={{ fontSize: "22px" }}>
                Know More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="col-lg-3 col-md-6">
              <FontAwesomeIcon icon={faLock} size="2x" />
              <h4>Secure data encryption</h4>
              <p>Ensure your data’s safety with top-tier encryption.</p>
              <button className=" btn text-left" style={{ fontSize: "22px" }}>
                Know More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="col-lg-3 col-md-6">
              <FontAwesomeIcon icon={faBell} size="2x" />
              <h4>Customizable notifications</h4>
              <p>Get alerts on tasks and deadlines that matter most.</p>
              <button className=" btn text-left" style={{ fontSize: "22px" }}>
                Know More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* demo photo section */}

      {/* features section start */}

      <section className="feartureSection mt-5 pt-5">
        <div class="container text-center">
          <div class="row">
            <div className="col-lg-12">
              <SubHeading subheadings="Everything you need" />

              <h1 className="headings my-4 ">
                Streamlined for easy management
              </h1>

              <p>
                Enjoy customizable lists, team work tools, and smart <br />{" "}
                tracking all in one place. Set tasks, get reminders, and <br />{" "}
                see your progress simply and quickly.
              </p>
            </div>

            <div class="container pb-5">
              <div class="row">
                <div className="col-lg-6 ">
                  <div class="card custom-card p-3 d-flex justify-content-center align-items-center">
                    <img
                      src={cardimg1}
                      class="card-img-top  imgsize img-fluid"
                      alt=""
                    />
                    <div class="card-body">
                      <h5 class="card-title headingS">Integration ecosystem</h5>
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div class="card custom-card p-3 d-flex justify-content-center align-items-center">
                    <img
                      src={cardimg2}
                      class="card-img-top  imgsize img-fluid"
                      alt=""
                    />
                    <div class="card-body">
                      <h5 class="card-title headingS">
                        Goal setting and tracking
                      </h5>
                      <p class="card-text textS">
                        Define and track your goals, breaking down objectives
                        into achievable tasks to keep your targets in sight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features section start */}

      {/* priceing section  */}

      <section className="priceingSection">
        <div class="container  mt-5 pt-5">
          <div class="row">
            <div className="col-lg-12 text-center">
              <SubHeading subheadings="Boost your productivity" />

              <h1 className="headings my-4 ">
                A more effective way to track progress
              </h1>

              <p>
                Effortlessly turn your ideas into a fully functional, <br />{" "}
                responsive, no-code SaaS website in just minutes with <br />
                the set of free components for Framer.
              </p>
            </div>

            <div className="row pb-5">
              <div className="col-lg-4 margintopcard1">
                <div className="card p-3 custom-card ">
                  <h4 className="planName">Free</h4>
                  <p>
                    <span className="planPrice" style={{ fontSize: "43px" }}>
                      $0
                    </span>
                    <span className="planMounth" style={{ color: "gray" }}>
                      /monthly
                    </span>
                  </p>
                  <Button text="Get started for free" />
                  <ul class="custom-list pb-4">
                    <li>Up to 5 project members</li>
                    <li>Unlimited tasks and projects</li>
                    <li>2GB storage</li>
                    <li>Integrations</li>
                    <li>Basic support</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 margintopcard2">
                <div
                  className="card p-3 custom-card "
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <div class="container-fluid">
                    <div class="row">
                      <div className="col-6">
                        <h4 className="planName">Pro</h4>
                      </div>
                      <div className="col-6 ">
                        <button
                          type="button"
                          class="btn btn_text_box text_color"
                          style={{ fontSize: "1rem", fontWeight: "800" }}
                        >
                          Most Popular
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    <span className="planPrice" style={{ fontSize: "43px" }}>
                      $9
                    </span>
                    <span className="planMounth" style={{ color: "gray" }}>
                      /monthly
                    </span>
                  </p>
                  <button
                    className=" btn  "
                    style={{ fontSize: "22px", backgroundColor: "white" }}
                  >
                    Sign up now
                  </button>
                  <ul class="custom-list pb-4">
                    <li>Up to 50 project members</li>
                    <li>Unlimited tasks and projects</li>
                    <li>50GB storage</li>
                    <li>Integrations</li>
                    <li>Priority support</li>
                    <li>Advanced support</li>
                    <li>Export support</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 margintopcard3">
                <div className="card p-3 custom-card ">
                  <h4 className="planName">Business</h4>
                  <p>
                    <span className="planPrice" style={{ fontSize: "43px" }}>
                      $19
                    </span>
                    <span className="planMounth" style={{ color: "gray" }}>
                      /monthly
                    </span>
                  </p>
                  <Button text="Get started for free" />
                  <ul class="custom-list">
                    <li>Up to 5 project members</li>
                    <li>Unlimited tasks and projects</li>
                    <li>200GB storage</li>
                    <li>Integrations</li>
                    <li>Dedicated account manager</li>
                    <li>Custom fields</li>
                    <li>Advanced analytics</li>
                    <li>Export capabilities</li>
                    <li>API access</li>
                    <li>Advanced security features</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* priceing section  */}

      {/* Testimonials section  */}

      <section className="feedbackSection">
        <div class="container mt-5 pb-5">
          <div class="row">
            <div className="col-lg-12 text-center">
              <SubHeading subheadings="Testimonials" />

              <h1 className="headings my-4 ">What our users say</h1>
            </div>

            <div className="col-lg-12 ">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col-lg-12 ">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col-lg-12 ">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                  <div class="card custom-card p-3 ">
                    <div class="card-body">
                      <p class="card-text textS">
                        Enhance your productivity by connecting with your
                        favorite tools, keeping all your essentials in one
                        place.
                      </p>
                      <div class="container-fluid">
                        <div class="row">
                          <div className="col-3">
                            <img src={user1} alt="" />
                          </div>
                          <div className="col-9 text-left">
                            <p style={{ fontWeight: "bold" }}>
                              Alex Rivera <br /> @jamietechguru00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section  */}

      {/* CAT section start  */}

      <section className="ctaSection p-5 mt-5">
        <div class="container-fluid">
          <div class="row">
            <div className="col-lg-3"></div>

            <div className="col-lg-6 pt-5 text-center">
              <h1 className="headings my-4 ">Sign up for free today </h1>
              <p>
                Celebrate the joy of accomplishment with an app designed <br />{" "}
                to track your progress and motivate your efforts.
              </p>
              <Button text="Get for free" />
              &nbsp;
              <button className=" btn " style={{ fontSize: "22px" }}>
                Know More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div className="col-lg-3"></div>
          </div>
        </div>
      </section>

      {/* CAT section start  */}

      {/* footer section  */}

      <section className="footerSection">
        <div class="container-fluid" style={{ color: "gray" }}>
          <div class="row">
            <div className="col-lg-3 col-md-3 pt-5">
              <img src={logo_one} alt="" />

              <p className="mt-3 pb-5">
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website.
              </p>
            </div>

            <div className="col-lg-5 col-md-1 pt-5"></div>

            <div className="col-lg-1 col-md-2 pt-5">
              <h5 style={{ color: "white", fontWeight: "bolder" }}>Product</h5>
              <ul className="custom-list-style">
                <li>Features</li>
                <li>Integrations</li>
                <li>Updates</li>
                <li>FAQ</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="col-lg-1 col-md-2 pt-5">
              <h5 style={{ color: "white", fontWeight: "bolder" }}>Company</h5>
              <ul className="custom-list-style">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Manifesto</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-lg-1 col-md-2 pt-5">
              <h5 style={{ color: "white", fontWeight: "bolder" }}>
                Resources
              </h5>
              <ul className="custom-list-style">
                <li>Examples</li>
                <li>Community</li>
                <li>Guides</li>
                <li>Docs</li>
              </ul>
            </div>
            <div className="col-lg-1 col-md-2 pt-5">
              <h5 style={{ color: "white", fontWeight: "bolder" }}>Legal</h5>
              <ul className="custom-list-style">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* footer section  */}
    </>
  );
}

export default App;
