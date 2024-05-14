import "./Home.scss"

import heroImg from "@/assets/hero-img.png"
import aboutImg from "@/assets/about-3-1.png"
import aboutBoxImg from "@/assets/about-box.png"
import chooseImg1 from "@/assets/choose1.png"
import chooseImg2 from "@/assets/choose2.png"
import chooseImg3 from "@/assets/choose3.png"
import { HERO_PRODUCTS } from "@/static";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="container hero">
          <div className="hero__left">
            <h4 className="hero__caption">Mobile</h4>
            <h2 className="hero__title">Backcover Tempered Glass</h2>
            <button className="hero__btn">Shop all !</button>
          </div>
          <div className="hero__right">
            <Image src={heroImg} />
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container products">
          {
            HERO_PRODUCTS.map(el => (
              <div key={el.id} className="products__card">
                <div className="products__card__frame">
                  <Image src={el.image} />
                </div>
                <p>{el.title}</p>
              </div>
            ))
          }
        </div>
      </section>
      <section id="about">
        <div className="container about">
          <div className="about__caption">
            <span></span>
            <h6>about us</h6>
          </div>
          <h2 className="about__title">
            If you’re looking for a Premium Quality
            Tempered Glass or Back-cover for
            your Device
          </h2>
          <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <div className="about__wrapper">
            <Image src={aboutImg} />
          </div>
          <div className="about__info">
            <div className="about__info__box">
              <div className="about__info__box__left">
                <h3>Shop Premium <br />
                  Tempered Glass in wholesale Price !
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <button>Shop Tempered Glass </button>
              </div>
              <div className="about__info__box__right">
                <Image src={aboutBoxImg} />
              </div>
            </div>
            <div className="about__info__rectangle"></div>
          </div>
        </div>
      </section>
      <section id="choose">
        <div className="container choose">
          <div className="choose__caption">
            <span></span>
            <p>Why Choose US</p>
          </div>
          <div className="choose__wrapper">
            <div className="choose__box">
              <Image src={chooseImg1} />
              <h3>Fast Delivery</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="choose__box">
              <Image src={chooseImg2} />
              <h3>Cheap Price</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="choose__box">
              <Image src={chooseImg3} />
              <h3>Premium Quality</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
