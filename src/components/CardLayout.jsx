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
    // Always horizontal layout (image left, text right) across screen sizes
    wrapper: 'card-base flex flex-row items-start gap-3 w-full max-w-[100%] md:max-w-[40rem]',
    img: 'w-32 h-48 md:w-52 md:h-72 object-cover rounded-xl',
    // Add left margin between image and text
    text: 'mt-3 md:mt-0 md:ml-4 text-lg md:text-2xl font-normal leading-normal text-left font-semibold',
  },
  B: {
    wrapper: 'card-base flex flex-col items-start gap-3 w-full max-w-[18rem] md:w-full md:max-w-sm ml-auto md:ml-0 transform translate-x-1/2 md:translate-x-0',
    img: 'w-full h-48 md:h-96 aspect-square object-cover rounded-xl',
    text: 'mt-2 text-lg md:text-2xl font-normal leading-normal text-left font-semibold',
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
