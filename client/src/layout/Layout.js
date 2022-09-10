import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";

function Layout({ children }) {
  return (
    <>
    <Header />
    <div className="wrapper">
        
        {children}
       
    </div>
     <Footer />
    </>
  )
}

export default Layout