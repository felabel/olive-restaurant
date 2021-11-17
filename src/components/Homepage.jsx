import Banner from "./Banner";
import Layout from "./Layout";
import MainSection from "./mainSection/MainSection";


const HomePage = () => {
    return (
      <>
        <Layout>
          <Banner />
          <MainSection />
        </Layout>
      </>
    );
  }
  
  export default HomePage;