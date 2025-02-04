import ResponsiveContainer from "../../components/ResponsiveContainer";
import img1 from "../../../public/images/BuffaloWing.jpeg";
import List from "../../components/List"
import Scorecard from "../../components/Scorecard"

const LoggedInUser = () => {
    return (
        <>
        <div className="w-[100vw] h-[50rem] bg-black absolute top-0 flex items-center pl-10">
            <div className="w-[35rem] h-[30rem] mt-24">
                <img className="w-full h-full rounded-lg" src={img1} alt="" />
                <h1 className="font-cursive text-white translate-y-[-23vh] translate-x-[-5%] text-6xl">Yonjou</h1>
            </div>
            <Scorecard name="Yonjou Victorin" level={50} pointsToSpend={120} pointsToLevelUp={100}/>
        </div>

        <ResponsiveContainer top="67%" >
            <div>
                <List textColor="black" names={['MY FEED', 'MY ORDERS', 'ADDRESS BOOK', 'REGISTERED PRODUCTS', 'REWARDS', 'WISHLIST']}/>
                <h1 className="text-5xl font-bold mt-24">Next level reward</h1>
            </div>       
        </ResponsiveContainer>
        </>
    );
}

export default LoggedInUser;
