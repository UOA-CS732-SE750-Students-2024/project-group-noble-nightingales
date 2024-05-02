import React, { useEffect, useRef } from 'react';
import { getSpotifySignInUrl } from '../../Requests/Spotify/SpotifySignInRequest';

function SpotifyPlayer({ accessToken }) {
    const playerRef = useRef(null);

    useEffect(() => {
        
        if (!accessToken) return;

        window.onSpotifyWebPlaybackSDKReady = () => {
            if (!playerRef.current) {
                const player = new Spotify.Player({
                    name: 'Web Playback SDK Quick Start Player',
                    getOAuthToken: cb => { cb(accessToken); }
                });

                player.addListener('ready', ({ device_id }) => {
                    console.log('Ready with Device ID', device_id);
                });

                player.addListener('not_ready', ({ device_id }) => {
                    console.log('Device ID has gone offline', device_id);
                });

                player.connect();
                playerRef.current = player;
            }
        };

        // Dynamically load the Spotify SDK
        const script = document.createElement('script');
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (playerRef.current) {
                playerRef.current.disconnect();
            }
            document.body.removeChild(script);
            window.onSpotifyWebPlaybackSDKReady = null;  // Clean up the global function to prevent memory leaks
        };
    }, [accessToken]); // Depend on accessToken to reinitialize if it changes

    const playTrack = (spotify_uri) => {
        const player = playerRef.current;
        if (player) {
            player.activateElement();
            player.togglePlay();
            player.play({
                playerInstance: player,
                spotify_uri: spotify_uri
            }).then(() => {
                console.log("Playback started");
            }).catch(e => {
                console.error("Playback error:", e);
            });
        }
    };

    const togglePlay = () => {
        const player = playerRef.current;
        if (player) {
            player.togglePlay();
        }
    };

    return (
        <div>
            <button style={{marginTop: "20vh", height: "15vh", width: "15vw"}} onClick={() => playTrack('spotify:track:YOUR_TRACK_ID_HERE')}>Play Track</button>
            <button onClick={togglePlay}>Toggle Play/Pause</button>
            <button onClick={getSpotifySignInUrl}>test</button>

        </div>
    );
}

export default SpotifyPlayer;
