import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../Components/Main/Header";
import Filter from "../Components/Filtering/Filter";

export default function EmployerJob() {

    return (
        <div>
            <ResponsiveAppBar />
            <Filter />
        </div>
    )


};