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
    name: "Mohammad Afnan",
    image: "/test.jpg",
    text: "The team guided me perfectly in selecting the right MBA college. Their honest advice, fast responses, and clear information made the entire admission process smooth. I'm truly grateful for their support."
  },
  {
    id: 2,
    name: "Sandhya Rajput",
    image: "/test.jpg",
    text: "Career Laksh Consultancy is a helpful partner for students who want structured support to secure B.Tech admissions — especially when juggling multiple exams, cutoffs, and colleges. Their guidance can reduce stress and help secure better options during counselling."
  },
  {
    id: 3,
    name: "Obesh Khan",
    image: "/test.jpg",
    text: "Career Laksh Consultancy provides guidance and support to students seeking B.Tech engineering admissions into colleges like IPU (e.g., MAIT), SRM, Amity, and others in India. They help with application support, counselling, entrance exam preparation advice, and document handling."
  },
  {
    id: 4,
    name: "Harsh Pandit",
    image: "/test.jpg",
    text: "I recently used Career Laksh Consultancy for support in securing BBA admission and overall I had a positive experience. The consultancy helped me understand my options, guided me through the application process, and assisted with counselling — making the entire journey much smoother than if I had done it alone."
  },
  {
    id: 5,
    name: "Tushar Garg",
    image: "/test.jpg",
    text: "I took guidance from Career Laksh Consultancy for my MBBS admission process, and the experience was smooth and well-organized. They explained the NEET counselling process clearly, helped with documentation, and guided me in filling college choices strategically. Their regular follow-ups ensured I didn’t miss any deadlines. Overall, it was a helpful experience, especially for someone new to medical admissions."
  },
  {
    id: 6,
    name: "Hamzah Imtiaz",
    image: "/test.jpg",
    text: "I approached Career Laksh Consultancy for B.Tech admission in Delhi. They explained eligibility criteria, counselling procedures, and helped shortlist colleges based on my rank."
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonialSection} id='testimonials'>
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
