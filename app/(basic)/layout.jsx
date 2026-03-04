import Footer from "../components/Footer";
import Header from "../components/Header";
import SidebarWrap from "./component/SidebarWrap";


export default function BasicLayout({ children }) {
    return (
        <>
            <Header />
            <SidebarWrap>{children}</SidebarWrap>
            <Footer />
        </>
    )
}
