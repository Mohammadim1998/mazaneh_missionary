import DashbordCTRL from "../Dashboard/Dashboard-ctrl"


const Layout = ({ children }) => {
    return (
        <main className="z-40 w-full h-dvh">
            {children}
            <div className="z-50 fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl">
                <DashbordCTRL />
            </div>
        </main>
    );
}

export default Layout;