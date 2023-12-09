import React from "react"
import "./Reviews.css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/swiper-bundle.min.css"
import { reviews } from "../../constants"

const Reviews = () => {
  return (
    <div id="reviews">
      <h1 data-aos="flip-up">
        Collaboratio
        <span
          style={{
            color: "#2196f3",
            textShadow:
              "0px 0px 1px rgba(33, 150, 243, 0.25), 0px 0px 70px rgba(33, 150, 243, 0.3), 0px 0px 40px rgba(33, 150, 243, 0.25)",
          }}
        >
          ns.
        </span>
      </h1>
      <div className="swiper-lg">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={2}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-color": "black",
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {reviews.map(review => (
            <SwiperSlide>
              <div className="card">
                <div className="details">
                  <div className="image-container">
                    <img src={review.img} alt="pic" className="image" />
                  </div>
                  <div style={{ lineHeight: 0 }}>
                    <a
                      href={review.linkedin}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h3 style={{ fontWeight: "900" }}>{review.name}</h3>
                    </a>
                    <p style={{ fontWeight: "900" }}>-{review.position}</p>
                  </div>
                </div>
                <div className="text">
                  <p>"{review.text}"</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    color: "gold",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-mob">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={1}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-color": "black",
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {reviews.map(review => (
            <SwiperSlide>
              <div className="card">
                <div className="details">
                  <div className="image-container">
                    <img src={review.img} alt="pic" className="image" />
                  </div>
                  <div style={{ lineHeight: 0 }}>
                    <a
                      href={review.linkedin}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h3 style={{ fontWeight: "900" }}>{review.name}</h3>
                    </a>
                    <p style={{ fontWeight: "900" }}>-{review.position}</p>
                  </div>
                </div>
                <div className="text">
                  <p>"{review.text}"</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    color: "gold",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Reviews
