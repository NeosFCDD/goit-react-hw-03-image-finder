import PropTypes from "prop-types";
import css from "components/styles.module.css";

export const Button = ({onLoadMore}) => {
        return (
                <button className={css.Button} type="button" onClick={onLoadMore}>
                  Load more
                </button>
        );
};

Button.propTypes = {
        onLoadMore: PropTypes.func.isRequired,
};