import React from "react";
import Tag from "./Tag";
import "../stylesheets/PopularTags.scss";

class PopularTags extends React.Component {
  state = {
    loading: false,
    tags: null
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:3000/api/tags/popular")
      .then(data => data.json())
      .then(tags => this.setState({ tags, loading: false }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className='popular-tag'>
        <p>Popular Tags</p>
        <div className='tag-list'>
          {this.state.tags &&
            this.state.tags.map(tag => <Tag key={tag._id} tag={tag} />)}
        </div>
      </div>
    );
  }
}
export default PopularTags;
