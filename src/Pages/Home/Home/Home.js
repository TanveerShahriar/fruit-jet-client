import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import HomeFruits from '../HomeFruits/HomeFruits';
import './Home.css'

const Home = () => {
    function dNone(){
        const el = document.getElementById("loader-container");
        el.style.setProperty('display', 'none', 'important');
    }
    
    return (
        <div onLoad={dNone}>
            <Loading></Loading>
            <Banner></Banner>
            <HomeFruits></HomeFruits>
            <Comments></Comments>
        </div>
    );
};

export default Home;