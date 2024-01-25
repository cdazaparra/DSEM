// Librerias de React
import { Outlet, useNavigation } from "react-router-dom";

// Componentes
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="Layout">
        <Header />
        <Menu />
        <main className="Main">
            {
                navigation.state === "loading" &&(
                    <div className="Loading">Loading...</div>
                )
            }
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout