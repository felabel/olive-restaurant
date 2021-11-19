import Footer from "./Footer";
// import Header from "./Header";
import Navtest from "./pages/shop/NavTest";


const Layout = ({children}) => {
    return (
      <>
        {/* <Header /> */}
        <Navtest />
          <main>
            {
              children
            }
          </main>
        <Footer />
      </>
    );
  }
  
  export default Layout;