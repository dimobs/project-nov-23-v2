import { useEffect, useState } from "react";
import withAuth from "../../HOC/withAuth";
import * as gameService from '../../services/gameService';
import LatestGame from "../latest-game/LatestGame";

function Home({
    _id,
    accessToken,
    email,
}) {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        gameService.getLatest()
            .then(result => setLatestGames(result));
    }, [])

    return (
        <section id="welcome-world" className="bg-gradient-to-t from-orange-400 h-96 min-h-0 hover:min-h-full dark:bg-gray-800">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {latestGames.map(game => <LatestGame {...game} />)}

                {!latestGames.length && <p className="no-articles">No games yet</p>}

                <p>{email}</p>
            </div>
        </section>
    );
}

const EnhancedHome = withAuth(Home);

export default EnhancedHome;
