import { createContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const LeafContext = createContext();

const Layout = () => {
    const [myLeaf , setMyLeaf] = useState(2021);

    const contextValue = {
        myLeaf : myLeaf ,
        setMyLeaf : setMyLeaf 
    };

    return (
        <LeafContext.Provider value={contextValue}>
            <div className="main_container">
                <div className="nav">
                    <div className="nav_links">
                        <div>
                            <Link to='/history'>تاریخچه</Link>
                        </div>
                        <div>
                            <Link to='/card'>کارت ها</Link>
                        </div>
                    </div>
                    <div>سید مسعود طباطبایی </div>
                </div>
                <Outlet/>
            </div>
        </LeafContext.Provider>
    );
}

export {Layout , LeafContext};