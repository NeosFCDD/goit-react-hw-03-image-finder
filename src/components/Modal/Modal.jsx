import { Component } from "react";
import css from "components/styles.module.css";
import PropTypes from "prop-types";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          <img src={this.props.src.url} alt={this.props.src.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.shape({
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};