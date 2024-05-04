import React from "react";

function Reviews() {
  const reviews = [
    {
      id: 1,
      content: "Great service and accurate results!",
      author: "John Doe",
      image: "/images/client1.jpg",
    },
    {
      id: 2,
      content: "Very professional and quick.",
      author: "Jane Smith",
      image: "/images/client2.jpg",
    },
    {
      id: 3,
      content: "Helpful staff and clear explanations.",
      author: "Alice Johnson",
      image: "/images/client3.jpg",
    },
  ];

  return (
    <div className="client-reviews">
      <h3>What Our Clients Say</h3>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <img
            src={review.image}
            alt={`Image of ${review.author}`}
            className="client-image"
          />
          <p>{review.content}</p>
          <small>- {review.author}</small>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
