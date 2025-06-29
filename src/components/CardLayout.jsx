import React from 'react';
import PropTypes from 'prop-types';

/*
  CardLayout component renders a single card with two primary design variants.
  New variants can be added easily by extending the `variantStyles` map.

  Variant "A" – Horizontal layout (image left, text right)
  Variant "B" – Vertical layout (image on top, text below)
*/

const variantStyles = {
  A: {
    wrapper: 'card-base flex flex-row items-start gap-4 w-full max-w-[40rem]',
    img: 'w-52 h-72 object-cover rounded-xl',
    text: 'ml-4 text-2xl font-normal leading-left font-semibold',
  },
  B: {
    wrapper: 'card-base flex flex-col items-center gap-4 w-full max-w-xs',
    img: 'w-[100%] h-96 aspect-square object-cover rounded-xl',
    text: 'mt-2 text-xl font-normal leading-normal text-left font-semibold',
  },
};

const CardLayout = ({ img, text, variant = 'B', className = '', style = {} }) => {
  const styles = variantStyles[variant] || variantStyles.B;

  return (
    <div className={`${styles.wrapper} ${className}`} style={style}>
      <img src={img} alt="card" className={styles.img} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

CardLayout.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default CardLayout;
