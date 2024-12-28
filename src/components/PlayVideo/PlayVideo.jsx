
import "./PlayVideo.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import user_profile from "../../assets/user_profile.jpg"

export default function PlayVideo() {
    return (
        <div className="play-video">
            <video src={video1} controls autoPlay muted></video>
            <h3>Best Youtube channel to learn web development</h3>
            <div className="play-video-info">
                <p>1525 views &bull; 2 days ago</p>
                <div>
                    <span>
                        <img src={like} alt="" />125
                    </span>
                    <span>
                        <img src={dislike} alt="" />2
                    </span>
                    <span>
                        <img src={share} alt="" /> share
                    </span>
                    <span>
                        <img src={save} alt="" />save
                    </span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>
                        GreatStack
                    </p>
                    <span>
                        1M Subscribers
                    </span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>Channel makes learning easy</p>
                <p>Subscribe to watch more </p>
                <hr />
                <h4>130 comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>
                            Jack Nicholson
                            <span>1 day ago</span>
                            <p>A global computer network providing a variety of information </p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt="" />
                            </div>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}