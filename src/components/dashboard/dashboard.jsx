import React, { useRef } from 'react';
import "./css/styles.css";
import Bar from "./bar";
import AlertDialog from "./dialog";
import BasicTable from "./table";
import { useReactToPrint } from 'react-to-print';


function Dashboard() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return (
        <React.Fragment>
            <Bar/>
            <div className="dashboard">
                <BasicTable componentToPrint={componentRef}/>
                <AlertDialog printButton={handlePrint}/>
            </div>
        </React.Fragment>

    );
}


export default Dashboard;