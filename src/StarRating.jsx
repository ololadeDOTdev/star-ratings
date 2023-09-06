function StarRating({ rating }) {
  /*
    Here's the markup for a single star:
    
    
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */

  return (
    <div className="star-wrapper">
      {Array.from({ length: rating }).map((item) => {
        return (
          <img
            alt=""
            className="gold-star"
            src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
            key={crypto.randomUUID()}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
