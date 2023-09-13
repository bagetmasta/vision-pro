import Image from "next/image";

function Hero() {
  return (
    <section>
      <h1>
        Elevating Life
        <span>
          <Image />
        </span>
        to Pro-Level Precision
        <span>
          <Image />
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
