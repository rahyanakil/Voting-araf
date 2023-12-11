
import Candidates from '../Candidates/Candidates'
import Radial from '../Radial/Radial'
import Banner from '../../Shared/Banner/Banner';
import AddSection from '../../Shared/AddSection/AddSection';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <AddSection></AddSection>
            <Candidates></Candidates>
            <Radial></Radial>
            <AddSection></AddSection>
        </div>
    );
};

export default Home;