import React from 'react';
import './App.css';
import PostList from './PostList';
import MoreButton from './MoreButton';

const ROOT_URL = 'https://jsonplaceholder.typicode.com/posts';

const getData = () => fetch(ROOT_URL).then(response => response.json());

class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       data: [],
       isLoading: true,
       postCount: 10
    };
    this.morePost = this.morePost.bind(this);
  }




  morePost() {
    this.setState(({ postCount }) => ({
      postCount: postCount += 10
    }));
  }


  render() {
    getData().then(data => {
      this.setState({
        data: data.slice(0, this.state.postCount),
        isLoading: false});
    });
    return (
      <div className='App'>
        <PostList data={this.state.data} isLoading={this.state.isLoading}/>
        <MoreButton morePost={this.morePost} />
      </div>
    );
  }

}

export default App;
