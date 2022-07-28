import React from "react";
import {SearchFiltration} from "../SearchFiltration/SearchFiltration";
import {ViewSupport} from "../ViewSupport/ViewSupport";
import {AvailableOneStudent} from "../AvailableOneStudent/AvailableOneStudent";

export const AvailableStudents = () => {
    return (
        <>
            <div className="available-students-wrapper">
                <SearchFiltration/>
                <div className="students-list">
                    <AvailableOneStudent/>
                    <AvailableOneStudent/>
                    <AvailableOneStudent/>
                    <AvailableOneStudent/>
                </div>

                <ViewSupport/>
            </div>
        </>
    );
}