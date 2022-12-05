import CardFollowers from '../components/CardFollowers';
import FaceBookIcon from '../imgs/icon-facebook.svg';
import StatisticUp from '../imgs/icon-up.svg';
import StatisticDown from '../imgs/icon-down.svg';
import TwitterIcon from '../imgs/icon-twitter.svg';
import InstagramIcon from '../imgs/icon-instagram.svg';
import YoutubeIcon from '../imgs/icon-youtube.svg';

const cardFollowersListData = [

    {
        socialMidia: "facebook",
        logoId: FaceBookIcon,
        logoIdAlt: "Facebook icon svg",
        id: "@nathanf",
        followersNumber: "1987",
        followersTipe: "Followers",
        statisticImg: StatisticUp,
        statisticImgAlt: "Statistic up icon svg",
        statisticDirection: "positive",
        followersCount: "12 Today"
    },

    {
        socialMidia: "twitter",
        logoId: TwitterIcon,
        logoIdAlt: "Twitter icon svg",
        id: "@nathanf",
        followersNumber: "1044",
        followersTipe: "Followers",
        statisticImg: StatisticUp,
        statisticImgAlt: "Statistic up icon svg",
        statisticDirection: "positive",
        followersCount: "99 Today"
    },

    {
        socialMidia: "instagram",
        logoId: InstagramIcon,
        logoIdAlt: "Instagram icon svg",
        id: "@realnathanf",
        followersNumber: "11k",
        followersTipe: "Followers",
        statisticImg: StatisticUp,
        statisticImgAlt: "Statistic up icon svg",
        statisticDirection: "positive",
        followersCount: "1099 Today"
    },

    {
        socialMidia: "youtube",
        logoId: YoutubeIcon,
        logoIdAlt: "Youtube icon svg",
        id: "Nathan F.",
        followersNumber: "8239",
        followersTipe: "Subscribers",
        statisticImg: StatisticDown,
        statisticImgAlt: "Statistic down icon svg",
        statisticDirection: "negative",
        followersCount: "144 Today"
    }


]


export default function followers() {
    return (
        <section class="followersSection">
            {
                cardFollowersListData.map(function(item) {
                    return (
                        <CardFollowers 
                            socialMidia= {item.socialMidia}
                            logoId= {item.logoId}
                            logoIdAlt= {item.logoIdAlt}
                            id= {item.id}
                            followersNumber= {item.followersNumber}
                            followersTipe= {item.followersTipe}
                            statisticImg= {item.statisticImg}
                            statisticImgAlt= {item.statisticImgAlt}
                            statisticDirection= {item.statisticDirection}
                            followersCount= {item.followersCount}
                        />
                    )
                })
            }
        </section>
    )
};