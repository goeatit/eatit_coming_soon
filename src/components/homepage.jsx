import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.css";
import "boxicons";

function DemoCarousel() {
  // Counter
  const deadline = new Date("2023-09-01");
  deadline.setDate(deadline.getDate() + 120);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [calculateTimeLeft]);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = deadline - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <>
      <>
        <>
          <>
            <>
              <>
                <div className="container">
                  <div className="row">
                    <div class="col-md-6 card-back">
                      <div className="outer">
                        <div className="inner">
                          <div>
                            <img
                              className="img-fluid image"
                              src="/images/logo.png"
                              alt="Image not found"
                            ></img>
                          </div>
                          <div className="heading">We are Coming</div>
                          <div className="subheading">
                            Get ready something cool is coming
                          </div>
                          <div class="countdown-container">
                            <div class="days-container">
                              <div class="days">{timeLeft.days}</div>
                              <div class="days-label">days</div>
                            </div>

                            <div class="hours-container">
                              <div class="hours">{timeLeft.hours}</div>
                              <div class="hours-label">hours</div>
                            </div>

                            <div class="minutes-container">
                              <div class="minutes">{timeLeft.minutes}</div>
                              <div class="minutes-label">minutes</div>
                            </div>

                            <div class="seconds-container">
                              <div class="seconds">{timeLeft.seconds}</div>
                              <div class="seconds-label">seconds</div>
                            </div>
                          </div>
                          <div className="text">
                            Our Website is launching soon.
                          </div>
                          <form className="form">
                            {/* Social media icons */}

                            <input
                              className="placeholder"
                              id="email"
                              name="email"
                              type="email"
                              placeholder="               Get notify by email"
                            />
                            <button className="submit">Submit</button>
                          </form>
                          <div className="social-icons">
                            <a href="https://www.linkedin.com/company/itatmant-eatit/">
                              <div className="LinkedIn">
                                <box-icon
                                  size="md"
                                  name="linkedin"
                                  type="logo"
                                  color="rgba(244,242,242,0.96)"
                                >
                                  LinkedIn
                                </box-icon>
                              </div>
                            </a>
                            <a href="mailto:eatitin.2023@gmail.com">
                              <div className="Email">
                                <box-icon
                                  size="md"
                                  name="envelope"
                                  color="rgba(244,242,242,0.96)"
                                >
                                  Email
                                </box-icon>
                              </div>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61550823081430">
                              <div className="Facebook">
                                <box-icon
                                  size="md"
                                  name="facebook"
                                  type="logo"
                                  color="rgba(244,242,242,0.96)"
                                ></box-icon>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 card-back2">
                      <div className="adj">
                        <Carousel
                          showStatus={false}
                          showThumbs={false}
                          showArrows={false}
                          stopOnHover={false}
                          showIndicators={false}
                          autoPlay={true}
                          infiniteLoop={true}
                        >
                          <div>
                            <img
                              className="img-fluid"
                              style={{ opacity: "0.5" }}
                              src="/images/bg_img.png"
                            />
                          </div>
                          <div>
                            <img
                              className="img-fluid"
                              style={{ opacity: "0.5" }}
                              src="/images/bg_img2.png"
                            />
                          </div>
                          <div>
                            <img
                              className="img-fluid"
                              style={{ opacity: "0.5" }}
                              src="/images/bg_img3.png"
                            />
                          </div>
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </>
          </>
        </>
      </>
    </>
  );
}

export default DemoCarousel;
