import React from 'react';
import { NavLink } from 'react-router-dom';

export const ViewPanel = () => {

    return (
        <>
            <div className="view-panel">
                <div className="link-wrapper">
                    <NavLink  className="link"  to="/hr/available-students" >Dostępni kursanci</NavLink>

                    <NavLink className="link" to="/interview">Do rozmowy</NavLink>
                </div>


            </div>
        </>
    );
}