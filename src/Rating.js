const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="rating-display">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="star-icon full-star">
          ★
        </span>
      ))}

      {/* Half star */}
      {hasHalfStar && <span className="star-icon half-star">★</span>}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="star-icon empty-star">
          ☆
        </span>
      ))}

      <span className="rating-text">({rating.toFixed(1)})</span>
    </div>
  )
}

export default Rating
