// import PropTypes from 'prop-types'
import styles from './Button.module.css';

function Button({ onButtonClick }) {
  return (
    <button
      className={styles.Button}
      type="button"
      onClick={() => {
        onButtonClick();
      }}
    >
      Load more
    </button>
  );
}

Button.propTypes = {};

export default Button;
