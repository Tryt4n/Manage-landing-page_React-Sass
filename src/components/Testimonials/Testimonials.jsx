import useWindowSize from "../../hooks/useWindowSize";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay, A11y } from "swiper";

import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import Button from "../Button/Button";

export default function Testimonials() {
  const { width } = useWindowSize();

  return (
    <section className="testimonials">
      <h2 className="container testimonials__header">What they've said</h2>
      <div className="testimonials__wrapper">
        <Swiper
          slidesPerView={width > 1024 ? 3 : 1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          grabCursor={true}
          modules={[Pagination, Autoplay, A11y]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestimonialsCard
              imageUrl={"./images/avatar-anisha.png"}
              name={"Anisha Li"}
              text={`
                “Manage has supercharged our team’s workflow. The ability to maintain
                visibility on larger milestones at all times keeps everyone motivated.”
              `}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialsCard
              imageUrl={"./images/avatar-ali.png"}
              name={"Ali Bravo"}
              text={`
                “We have been able to cancel so many other subscriptions since using
                Manage. There is no more cross-channel confusion and everyone is much
                more focused.”
              `}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialsCard
              imageUrl={"./images/avatar-richard.png"}
              name={"Richard Watts"}
              text={`
                “Manage allows us to provide structure and process. It keeps us organized
                and focused. I can’t stop recommending them to everyone I talk to!”
              `}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialsCard
              imageUrl={"./images/avatar-shanai.png"}
              name={"Shanai Gough"}
              text={`
                “Their software allows us to track, manage and collaborate on our projects
                from anywhere. It keeps the whole team in-sync without being intrusive.”
              `}
            />
          </SwiperSlide>

          {width > 1024 && (
            <>
              <SwiperSlide>
                <TestimonialsCard
                  imageUrl={"./images/avatar-anisha.png"}
                  name={"Anisha Li"}
                  text={`
                “Manage has supercharged our team’s workflow. The ability to maintain
                visibility on larger milestones at all times keeps everyone motivated.”
              `}
                />
              </SwiperSlide>

              <SwiperSlide>
                <TestimonialsCard
                  imageUrl={"./images/avatar-ali.png"}
                  name={"Ali Bravo"}
                  text={`
                “We have been able to cancel so many other subscriptions since using
                Manage. There is no more cross-channel confusion and everyone is much
                more focused.”
              `}
                />
              </SwiperSlide>

              <SwiperSlide>
                <TestimonialsCard
                  imageUrl={"./images/avatar-richard.png"}
                  name={"Richard Watts"}
                  text={`
                “Manage allows us to provide structure and process. It keeps us organized
                and focused. I can’t stop recommending them to everyone I talk to!”
              `}
                />
              </SwiperSlide>

              <SwiperSlide>
                <TestimonialsCard
                  imageUrl={"./images/avatar-shanai.png"}
                  name={"Shanai Gough"}
                  text={`
                “Their software allows us to track, manage and collaborate on our projects
                from anywhere. It keeps the whole team in-sync without being intrusive.”
              `}
                />
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>
      <div className="container testimonials__btn-wrapper">
        <Button />
      </div>
    </section>
  );
}
