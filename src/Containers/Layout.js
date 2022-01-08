import React from "react";
import Header from "../Components/Header";

export default function Layout({children}) {
    return(
        <div>
            <Header/>
            {children}
        </div>
    );
}

