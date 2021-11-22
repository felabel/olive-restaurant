import Banner from "./Banner";
import Layout from "./Layout";
import MainSection from "./mainSection/MainSection";
import Services from "./Services";


const HomePage = () => {
    return (
      <>
        <Layout>
          <Banner />
          <MainSection />
          <Services />
        </Layout>
      </>
    );
  }
  
  export default HomePage;