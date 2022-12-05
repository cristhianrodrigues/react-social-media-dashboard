export default function CardOverview(props){
    return (
        <div class="card-overview">
            <div class="card-content-title-overview">
                <p class="content-overview">{props.dataType}</p>
                <img src={props.logoId} alt={props.logoIdAlt} />
            </div>
            <div class="card-content-numbers-overview">
                <h2 class="card-overview-number">{props.overviewNumber}</h2>
                <div class="percent-estatistic">
                    <img class="percent-estatistic-img" src={props.statisticImg} alt={props.statisticImgAlt} />
                    <p class={props.statisticDirection + " percent"}>{props.porcentCount}</p>
                </div>
            </div>
        </div>
    )
};