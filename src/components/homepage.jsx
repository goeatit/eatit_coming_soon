import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { database } from "./firebase";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./style.css";
import "boxicons";

function DemoCarousel() {
  const deadline = new Date("2024-01-03");
  deadline.setDate(deadline.getDate() + 60);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [email, setEmail] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [calculateTimeLeft]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      database
        .collection("subscribers")
        .add({
          email: email,
          timestamp: new Date(),
        })
        .then(() => {
          console.log("Email added to Firestore");
          setEmail("");
          setShowSuccessAlert(true);
        })
        .catch((error) => {
          console.error("Error adding email to Firestore: ", error);
          setShowErrorAlert(true);
        });
    }
  };

  useEffect(() => {
    if (showSuccessAlert || showErrorAlert) {
      const timer = setTimeout(() => {
        setShowSuccessAlert(false);
        setShowErrorAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessAlert, showErrorAlert]);

  return (
    <>
      <>
        <>
          <>
            <>
              <>
                <div className="container">
                  <div className="row">
                    {/* Success Alert */}
                    {showSuccessAlert && (
                      <Stack
                        sx={{
                          width: "100%",
                          position: "fixed",
                          top: 0,
                          zIndex: 1000,
                        }}
                        spacing={2}
                      >
                        <Alert
                          onClose={() => {
                            setShowSuccessAlert(false);
                          }}
                          variant="filled"
                        >
                          <b>
                            Subscribed Successfully!Thank you for subscribing!
                            🎉 Stay tuned for updates.
                          </b>
                        </Alert>
                      </Stack>
                    )}
                    {/* Error Alert */}
                    {showErrorAlert && (
                      <Stack
                        sx={{
                          width: "100%",
                          position: "fixed",
                          top: 0,
                          zIndex: 1000,
                        }}
                        spacing={2}
                      >
                        <Alert
                          onClose={() => {
                            showErrorAlert(false);
                          }}
                          severity="error"
                          variant="filled"
                        >
                          Oops! Something went wrong. Please try again later.
                        </Alert>
                      </Stack>
                    )}
                    <div class="col-md-6 card-back">
                      <div className="outer">
                        <div className="inner">
                          <div>
                            <img
                              className="img-fluid image"
                              src="/images/logo.png"
                              alt="logo"
                            ></img>
                          </div>
                          <div className="heading">Coming Soon!</div>
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
                            <input
                              type="email"
                              placeholder="Get notified by email"
                              className="textbox"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                              className="submit"
                              onClick={handleSubscribe}
                            >
                              Subscribe
                            </button>
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
                              alt=""
                            />
                          </div>
                          <div>
                            <img
                              className="img-fluid"
                              style={{ opacity: "0.5" }}
                              src="/images/bg_img2.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <img
                              className="img-fluid"
                              style={{ opacity: "0.5" }}
                              src="/images/bg_img3.png"
                              alt=""
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
