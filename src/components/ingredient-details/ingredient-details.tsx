import PropTypes from 'prop-types';

import styles from './ingredient-details.module.css';

function IngredientDetails({
  image,
  title,
  calories,
  proteins,
  fat,
  carbohydrates,
}: any) {
  return (
    <div className={styles.content}>
      <img className={styles.image} src={image} alt={title}></img>
      <h3 className={`${styles.title} text text_type_main-medium mt-4 mb-8`}>
        {title}
      </h3>
      <div className={`${styles.detailsContainer} mb-5`}>
        <div className={`${styles.details} mr-5`}>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive mb-2`}
          >
            Калории,ккал
          </p>
          <span
            className={`${styles.number} text text_type_digits-default text_color_inactive`}
          >
            {calories}
          </span>
        </div>
        <div className={`${styles.details} mr-5`}>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive mb-2`}
          >
            Белки, г
          </p>
          <span
            className={`${styles.number} text text_type_digits-default text_color_inactive`}
          >
            {proteins}
          </span>
        </div>
        <div className={`${styles.details} mr-5`}>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive mb-2`}
          >
            Жиры, г
          </p>
          <span
            className={`${styles.number} text text_type_digits-default text_color_inactive mb-2`}
          >
            {fat}
          </span>
        </div>
        <div className={styles.details}>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive mb-2`}
          >
            Углеводы, г
          </p>
          <span
            className={`${styles.number} text text_type_digits-default text_color_inactive`}
          >
            {carbohydrates}
          </span>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
};

export { IngredientDetails };
