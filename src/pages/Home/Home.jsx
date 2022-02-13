import Assets from '../../components/Assets/Assets';
import Choose from '../../components/Choose/Choose';
import Download from '../../components/Download/Download';
import Goals from '../../components/Goals/Goals';
import Header from '../../components/Header/Header'
import HeadLine from '../../components/HeadLine/HeadLine';
import Invest from '../../components/Invest/Invest';
import Join from '../../components/Join/Join';
import List from '../../components/List/List';
import Partners from '../../components/Partners/Partners';
import RApp from '../../components/RApp/RApp';
import RCard from '../../components/RCard/RCard';
import Regulation from '../../components/Regulation/Regulation';
import Remember from '../../components/Remember/Remember';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
  return ( 
   <div>
    <Header /> 
    <Partners />
    <Invest />
    <Choose />
    <Goals />
    <Remember />
    <Assets />
    <List />
    <RApp />
    <Regulation />
    <Testimonials />
    <RCard />
    <Join />
    <Download />
   </div>
  )
}

export default Home