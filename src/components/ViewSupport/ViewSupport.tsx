import React from "react";

import back from '../../assets/img/back.png';

export const ViewSupport = () => {
    return (
        <>
            <div className="footer-container">
                <p className="elements-status">Ilość elementów</p>
                <select className="select-footer" name="" id="">
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
                <p className="elements-status">10 z 90</p>
                <p className="elements-switch">
                    <img className="left-switch" src={back} alt=""/>
                </p>
                <p className="elements-switch">
                    <img className="right-switch" src={back} alt=""/>
                </p>
            </div>
        </>
    );
}