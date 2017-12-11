import React , {Component}  from 'react';
import ReactDOM             from 'react-dom';
import YTSearch             from 'youtube-api-search';
import _                    from 'lodash';
// import my components
import SearchBar            from './components/search_bar';
import VideoList            from './components/video_list';
import VideoDetail          from './components/video_detail';


const API_KEY = "AIzaSyBHXs4yUB7L2X5xY6_1Yj8e_d1ducmmVpw";


//create  the first component
class App extends Component {

  state = {
    videos : [],
    selectedVideo : null,
    term : null
  };

  // This function will be called by React immediately after the
   //component has mounted
  componentDidMount(){
    this.onHandleInputChange('motivation')
  }


  onSelectedVideo= (selectedVideo)=>{
    this.setState({selectedVideo});
  }

  onHandleInputChange= (term) =>{
    YTSearch({key: API_KEY , term: term}, (videos) =>{
      console.log(videos);
      this.setState({
        videos,
        selectedVideo:videos[0]
      });
    });
  }

  render(){
    //use debouce to delay 3 mseconds
    const videoSearch = _.debounce((term)=>{this.onHandleInputChange(term)} , 300);
    return(
      <div>
        <SearchBar onHandleInputChange ={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onSelectedVideo = {this.onSelectedVideo}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App /> ,
 document.querySelector('.container')
);
