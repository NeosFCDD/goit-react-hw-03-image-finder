import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import Modal from "./Modal/Modal";
import css from "components/styles.module.css";

const URL = "https://pixabay.com/api/";
const API_KEY = "33451170-da7868fa9d2d9191c176f5359";

class App extends Component {
  state = {
    query: "",
    results: [],
    page: 1,
    status: "idle",
    modalImage: {
      url: null,
      tags: null,
    },
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      fetch(
        `${URL}?q=${this.state.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.hits.length > 0) {
            this.setState({
              results: [...this.state.results, ...data.hits.map((hit) => {
                  return {
                    id: hit.id,
                    webformatURL: hit.webformatURL,
                    tags: hit.tags,
                    largeImageURL: hit.largeImageURL,
                  };
                }),
              ],
              status: "idle",
            });
          } else {
            this.setState ({status: "idle"});
            alert("No more results");
            return;
          }
        })
        .catch((error) => console.log(error));
    }
  }

  submitHandle = (query) => {
    if (query.trim() === this.state.query) { return }
    this.setState({ query, results: [], page:1, status: "pending" });};

  onLoadMoreHandle = () => {
    this.setState({ page: this.state.page + 1, status: "pending" });};

  openModal = ({ bigImg, alt }) => {
    this.setState({
      modalImage: {
        url: bigImg,
        tags: alt,
      },
    });
  };

  closeModal = () => {
    this.setState({
      modalImage: {
        url: null,
        tags: null,
      },
    });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.submitHandle} />
        {this.state.results.length > 0 && (
          <ImageGallery gallery={this.state.results} onClick={this.openModal} />
        )}
        {this.state.status === "pending" && <Loader />}
        {this.state.results.length > 0 && (
          <Button onLoadMore={this.onLoadMoreHandle} />
        )}
        {this.state.modalImage.url && (
          <Modal src={this.state.modalImage} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;