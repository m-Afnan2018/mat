'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Testimonials.module.css';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Daksh Bhutia",
    image: "/test.jpg",
    text: "The team guided me perfectly in selecting the right MBA college. Their honest advice, fast responses, and clear information made the entire admission process smooth. I'm truly grateful for their support."
  },
  {
    id: 2,
    name: "Ruturaj Singhania",
    image: "/test.jpg",
    text: "I was confused about choosing between MBA and PGDM, but their counsellors explained everything so clearly. The guidance, patience, and transparency helped me take the right decision for my career."
  },
  {
    id: 3,
    name: "Afnan Singhania",
    image: "/test.jpg",
    text: "I was confused about choosing between MBA and PGDM, but their counsellors explained everything so clearly. The guidance, patience, and transparency helped me take the right decision for my career."
  },
  {
    id: 4,
    name: "Kalash Tripathi",
    image: "/test.jpg",
    text: "I was confused about choosing between MBA and PGDM, but their counsellors explained everything so clearly. The guidance, patience, and transparency helped me take the right decision for my career."
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Why Choose <span className={styles.highlightOrange}>Career</span>{' '}
          <span className={styles.highlightBlue}>Laksh</span>
        </h2>

        <p className={styles.subheading}>
          Join thousands of students who have achieved their dreams with our expert guidance
          and transparent process.
        </p>

        <div className={styles.testimonialSlider}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet ' + styles.customBullet,
              bulletActiveClass:
                'swiper-pagination-bullet-active ' + styles.customBulletActive,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className={styles.testimonialSwiper}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.avatar}>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              testimonial.name
                            )}&size=80&background=FF6B35&color=fff`;
                        }}
                      />
                    </div>
                    <h3 className={styles.testimonialName}>
                      {testimonial.name}
                    </h3>
                  </div>

                  <p className={styles.testimonialText}>
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
