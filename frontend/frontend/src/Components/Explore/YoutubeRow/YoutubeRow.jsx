import React from 'react'
import './YoutubeCSS/Youtube.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import youtubeCover from '../../../assets/YoutubeCover.png'
export default function YoutubeRow() {
  return (
    <div className='YoutubeRowContainer'>
    <ul className='firstYoutubeRow'>
        <li>
            <ul className='insideYoutubeList'>
                <li><img src={youtubeCover} alt="Cover" /></li>
                <li>
                    <ul className='titleList'>
                        <li className="playButton"><PlayArrowIcon /></li>
                        <li className="titleName">YoutubeTitle</li>
                    </ul>
                </li>
                <li className="author">Made by WHO</li>
            </ul>
        </li>
        <li>
            <ul className='insideYoutubeList'>
                <li><img src={youtubeCover} alt="Cover" /></li>
                <li>
                    <ul className='titleList'>
                        <li className="playButton"><PlayArrowIcon /></li>
                        <li className="titleName">YoutubeTitle</li>
                    </ul>
                </li>
                <li className="author">Made by WHO</li>
            </ul>
        </li>
        <li>
            <ul className='insideYoutubeList'>
                <li><img src={youtubeCover} alt="Cover" /></li>
                <li>
                    <ul className='titleList'>
                        <li className="playButton"><PlayArrowIcon /></li>
                        <li className="titleName">YoutubeTitle</li>
                    </ul>
                </li>
                <li className="author">Made by WHO</li>
            </ul>
        </li>
        <li>
            <ul className='insideYoutubeList'>
                <li><img src={youtubeCover} alt="Cover" /></li>
                <li>
                    <ul className='titleList'>
                        <li className="playButton"><PlayArrowIcon /></li>
                        <li className="titleName">YoutubeTitle</li>
                    </ul>
                </li>
                <li className="author">Made by WHO</li>
            </ul>
        </li>
    </ul>
    <ul className="secondYoutubeRow">
    <li>
            <ul className='insideYoutubeList'>
                <li><img src={youtubeCover} alt="Cover" /></li>
                <li>
                    <ul className='titleList'>
                        <li className="playButton"><PlayArrowIcon /></li>
                        <li className="titleName">YoutubeTitle</li>
                    </ul>
                </li>
                <li className="author">Made by WHO</li>
            </ul>
        </li>
        <li>
            <ul className='insideYoutubeList'>
                <li><img src={youtubeCover} alt="Cover" /></li>
                <li>
                    <ul className='titleList'>
                        <li className="playButton"><PlayArrowIcon /></li>
                        <li className="titleName">YoutubeTitle</li>
                    </ul>
                </li>
                <li className="author">Made by WHO</li>
            </ul>
        </li>
        <li>
            <ul className='insideYoutubeList'>
                <li><img src={youtubeCover} alt="Cover" /></li>
                <li>
                    <ul className='titleList'>
                        <li className="playButton"><PlayArrowIcon /></li>
                        <li className="titleName">YoutubeTitle</li>
                    </ul>
                </li>
                <li className="author">Made by WHO</li>
            </ul>
        </li>
        <li>
            <ul className='insideYoutubeList'>
                <li><img src={youtubeCover} alt="Cover" /></li>
                <li>
                    <ul className='titleList'>
                        <li className="playButton"><PlayArrowIcon /></li>
                        <li className="titleName">YoutubeTitle</li>
                    </ul>
                </li>
                <li className="author">Made by WHO</li>
            </ul>
        </li>
    </ul>
    </div>
  )
}
