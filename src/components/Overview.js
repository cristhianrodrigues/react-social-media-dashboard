import CardOverview from '../components/CardOverview';
import FaceBookIcon from '../imgs/icon-facebook.svg';
import StatisticUp from '../imgs/icon-up.svg';
import StatisticDown from '../imgs/icon-down.svg';
import TwitterIcon from '../imgs/icon-twitter.svg';
import InstagramIcon from '../imgs/icon-instagram.svg';
import YoutubeIcon from '../imgs/icon-youtube.svg';

const cardOverviewListData = [

    {
        dataType: "Page Views",
        logoId: FaceBookIcon,
        logoIdAlt: "Facebook icon svg",
        overviewNumber: "87",
        statisticImg: StatisticUp,
        statisticImgAlt: "Statistic Up icon svg",
        statisticDirection: "positive",
        porcentCount: "3%"
    },

    {
        dataType: "Likes",
        logoId: FaceBookIcon,
        logoIdAlt: "Facebook icon svg",
        overviewNumber: "52",
        statisticImg: StatisticDown,
        statisticImgAlt: "Statistic Down icon svg",
        statisticDirection: "negative",
        porcentCount: "2%"
    },

    {
        dataType: "Likes",
        logoId: InstagramIcon,
        logoIdAlt: "Instagram icon svg",
        overviewNumber: "5462",
        statisticImg: StatisticUp,
        statisticImgAlt: "Statistic Up icon svg",
        statisticDirection: "positive",
        porcentCount: "2257%"
    },
        
    {
        dataType: "profile Views",
        logoId: InstagramIcon,
        logoIdAlt: "Instagram icon svg",
        overviewNumber: "52k",
        statisticImg: StatisticUp,
        statisticImgAlt: "Statistic Up icon svg",
        statisticDirection: "positive",
        porcentCount: "1275%"
    },

    {
        dataType: "Retweets",
        logoId: TwitterIcon,
        logoIdAlt: "Twitter icon svg",
        overviewNumber: "117",
        statisticImg: StatisticUp,
        statisticImgAlt: "Statistic Up icon svg",
        statisticDirection: "positive",
        porcentCount: "303%"
    },

    {
        dataType: "Likes",
        logoId: TwitterIcon,
        logoIdAlt: "Twitter icon svg",
        overviewNumber: "507",
        statisticImg: StatisticUp,
        statisticImgAlt: "Statistic Up icon svg",
        statisticDirection: "positive",
        porcentCount: "553%"
    },

    {
        dataType: "Likes",
        logoId: YoutubeIcon,
        logoIdAlt: "Youtube icon svg",
        overviewNumber: "107",
        statisticImg: StatisticDown,
        statisticImgAlt: "Statistic Down icon svg",
        statisticDirection: "negative",
        porcentCount: "19%"
    },

    {
        dataType: "Total Views",
        logoId: YoutubeIcon,
        logoIdAlt: "Youtube icon svg",
        overviewNumber: "1407",
        statisticImg: StatisticDown,
        statisticImgAlt: "Statistic Down icon svg",
        statisticDirection: "negative",
        porcentCount: "12%"
    }

]

export default function Overview(props){
    return (
        <section class="overview-section">
            <h2 class="overview-title">Overview - Today</h2>
            <div class="card-conteiner-overview">
                {
                    cardOverviewListData.map(function(item) {
                        return (
                            <CardOverview 
                                dataType= {item.dataType}
                                logoId= {item.logoId}
                                logoIdAlt= {item.logoIdAlt}
                                overviewNumber= {item.overviewNumber}
                                statisticImg= {item.statisticImg}
                                statisticImgAlt= {item.statisticImgAlt}
                                statisticDirection= {item.statisticDirection}
                                porcentCount= {item.porcentCount}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
};