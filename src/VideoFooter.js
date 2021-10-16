import React from 'react';
import './videoFooter.css';
import { Button, Avatar } from "@material-ui/core";
import  MusicNoteIcon  from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";
import FavouriteIcon from "@material-ui/icons/Favorite";
import  ModeCommentIcon  from '@material-ui/icons/ModeComment';
import SendIcon from "@material-ui/icons/Send";
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz';


function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
    return (
        <div className="videoFooter">
        <div className="videoFooter__text">
            <Avatar src={avatarSrc} />
            <h3>
            {channel} . <Button className="footer_button">Follow</Button>
            </h3>
            </div>
            <div className="videoFooter__ticker">
            <MusicNoteIcon 
            className="videoFooter__icon"/>
             <Ticker mode="smooth">
             {({ index }) => (
                 <div>
                 <h1>{song}</h1>
                 </div>
             )}
             </Ticker>
            </div>
            <div className="videoFooter__actions">
            <div className="videoFooter__actionsLeft">
            <FavouriteIcon fontSize="large" />
            <ModeCommentIcon fontSize="large" />
            <SendIcon fontSize="large" />
            <MoreHorizonIcon fontSize="large" />
            </div>
            <div className="videoFooter__actionsRight">
            <div className="videoFooter__stat">
            <FavouriteIcon />
            <p>{likes}</p>
            </div>
            <div className="videoFooter__stat">
            <ModeCommentIcon />
            <p>{shares}</p>
            </div>
            </div>
            </div>
        </div>
    );
}

export default VideoFooter;
