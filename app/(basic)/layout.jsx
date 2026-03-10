import Footer from "../components/Footer";
import Header from "../components/Header";
import SidebarProvider from "../context/sidebar/SidebarProvider";
import SidebarWrap from "./component/SidebarWrap";


export default function BasicLayout({ children }) {
    return (
        <>
            <SidebarProvider>
                <Header />
                <SidebarWrap>{children}</SidebarWrap>
                <Footer />
            </SidebarProvider>
        </>
    )
}
