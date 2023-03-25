import { Component } from "react";
import css from "components/styles.module.css";
import PropTypes from "prop-types";


export default class Searchbar extends Component {
        state = {
                query: "",
        };


        queryHandle = (e) => {
                this.setState ({query: e.target.value.toLowerCase()});
        };

        onFormSubmit = (e) => {
                e.preventDefault();

                if (this.state.query.trim() === "") {
                        alert ("Pictures not found or please fill the searchbar");
                        return;
                }

                this.props.onSubmit (this.state.query);
                window.scrollTo ({
                        top:0,
                        behavior:"smooth",});
        };


        render() {
                return (
                        <header className={css.Searchbar}>
                                <form className={css.SearchForm} onSubmit={this.onFormSubmit}>
                                        <button type="submit" className={css.SearchFormButton}>
                                                <span className={css.SearchFormButtonLabel}>Search</span>
                                        </button>
                                        <input
                                                className={css.SearchFormInput}
                                                type="text"
                                                onChange={this.queryHandle}
                                                autoComplete="off"
                                                autoFocus
                                                placeholder="Search images and photos"
                                        />
                                </form>
                        </header>
                );
        }
};

Searchbar.propTypes = {
        onSubmit: PropTypes.func.isRequired,
};
