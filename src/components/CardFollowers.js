export default function CardFollowers(props){
    return(
        <div class={"card " + props.socialMidia}>
            <div class="card-container">
                <div class="social-midia-id">
                    <img src={props.logoId} alt={props.logoIdAlt} />
                    <p class="id">{props.id}</p>
                </div>
                <div class="total-followers">
                    <h2 class="total-followers-number">{props.followersNumber}</h2>
                    <h3 class="folloewers-tipe">{props.followersTipe}</h3>
                </div>
                <div class="dayle-followers">
                    <img class="dayle-followers-img" src={props.statisticImg} alt={props.statisticImgAlt} />
                    <p class={props.statisticDirection + " dayle-followers-count"} >{props.followersCount}</p>
                </div>
            </div>
        </div>
    )
};