import React, {useEffect} from "react";

import classes from "./Cockpit.css";

const cockpit = props => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Mock HTTP request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work ');
        };
    }, []); //execute when first time run app
    // },[props.persons]); //execute when persons called //can have multiple by comma

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work ');
        };
    })
    const assignedClasses = [];
    let btnClass = "";

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(" ")}>This is working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Person Name
            </button>
        </div>
    );
};

export default React.memo(cockpit);
