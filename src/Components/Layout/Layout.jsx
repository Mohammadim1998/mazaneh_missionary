import DashbordCTRL from "../Dashboard/Dashboard-ctrl"


const Layout = ({ children }) => {
    return (
        <main className="z-40 w-full h-dvh">
            {children}
            <div className="z-50 fixed bottom-0 left-0 right-0">
                <DashbordCTRL />
            </div>
        </main>
    );
}

export default Layout;