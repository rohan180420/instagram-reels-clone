
import './App.css';
import VideoCard from './VideoCard';


function App() {
  return (
    <div className="app">
      <h1>instagram reels clone</h1>
      <div className="app__top">
      <img 
      className="app__logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png" 
      alt=""/>
      <h1>Reels</h1>
      </div>

      <div className="app__videos">
      <VideoCard 
      channel={""}
      avatarSrc='https://cdn.shopify.com/s/files/1/0985/2790/articles/2-zoopworld2_600x600_crop_center.jpg?v=1466231616'
      song='test song- ohhlalala'
      url="https://player.vimeo.com/external/420237319.hd.mp4?s=5ddbeb089ad3fa8e9e9e958ff7500c05a459af9d&profile_id=172&oauth2_token_id=57447761"
      likes={360}
      shares={150}
      />
      <VideoCard
      channel={""}
      avatarSrc='https://cdn.shopify.com/s/files/1/0985/2790/articles/2-zoopworld2_600x600_crop_center.jpg?v=1466231616'
      song='test song- ohhlalala'
      url="https://player.vimeo.com/external/424467445.sd.mp4?s=d3761fb59162054dae57e36ac643bc655713210c&profile_id=165&oauth2_token_id=57447761"
      likes={360}
      shares={150} />
      <VideoCard 
      channel={""}
      avatarSrc='https://cdn.shopify.com/s/files/1/0985/2790/articles/2-zoopworld2_600x600_crop_center.jpg?v=1466231616'
      song='test song- ohhlalala'
      url="https://player.vimeo.com/external/420238993.sd.mp4?s=aee8f5510d4352c435afe03e3c02476ad1377f5b&profile_id=165&oauth2_token_id=57447761"
      likes={360}
      shares={150}
      />
      <VideoCard
      channel={""}
      avatarSrc='https://cdn.shopify.com/s/files/1/0985/2790/articles/2-zoopworld2_600x600_crop_center.jpg?v=1466231616'
      song='test song- ohhlalala'
      url="https://player.vimeo.com/external/427662785.sd.mp4?s=58b721eccf3a936afacf494513c0d861f71da651&profile_id=165&oauth2_token_id=57447761"
      likes={360}
      shares={150} />
      <VideoCard
      channel={""}
      avatarSrc='https://cdn.shopify.com/s/files/1/0985/2790/articles/2-zoopworld2_600x600_crop_center.jpg?v=1466231616'
      song='test song- ohhlalala'
      url="https://player.vimeo.com/external/420236835.sd.mp4?s=a9fdb8483bfb4fb4bab3635c8f63197ba0120db7&profile_id=165&oauth2_token_id=57447761"
      likes={360}
      shares={150} />
      </div>


    </div>
  );
}

export default App;
