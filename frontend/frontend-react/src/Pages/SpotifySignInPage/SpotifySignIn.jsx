import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../ApplicationContext";
import { saveSpotifyTokens } from "../../Requests/Spotify/SpotifySignInRequest";
import { useNavigate } from "react-router-dom";

const SpotifySignIn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [, setSpotifyAccessToken,,,,, userId] = useContext(AuthContext)

    useEffect(() => {

        async function saveTokens() {
            const query = new URLSearchParams(location.search);
            const accessToken = query.get('accessToken');
            const refreshToken = query.get('refreshToken');
    
            
            if (accessToken && refreshToken) {
                setSpotifyAccessToken(accessToken);
                const response = await saveSpotifyTokens(userId, accessToken, refreshToken);
                console.log(response);
                navigate('/spotify');
            }

        }
        saveTokens();

    }, [location]);
}

export default SpotifySignIn;