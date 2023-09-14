import Image from "next/image";

function Hero() {
  return (
    <section className="hero">
      <h1>
        Elevating Life
        <span className="first-item">
          <Image
            src="/images/hero/rectangle1.png"
            className="first-item-image"
            alt="item"
            width={135}
            height={53}
          />
        </span>
        to Pro-Level Precision
        <span className="second-item">
          <Image
            src="/images/hero/rectangle2.png"
            className="second-item-image"
            alt="item"
            width={93}
            height={53}
          />
        </span>
        with Vision Pro
      </h1>
      <p>
        With Vision Pro, you have an infinite canvas that transforms how you use
        the apps you love. Arrange apps anywhere and scale them to the perfect
        size, making the workspace of your dreams a reality — all while staying
        present in the world around you
      </p>
      <button type="button">Pre-order Now</button>
    </section>
  );
}

export default Hero;
