import React, {Fragment} from 'react';

import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
import Image from "../../assets/meals.jpg";

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes.mainImage}>
                <img src={Image} alt="Meal background"/>
            </div>
        </Fragment>
    );
}

export default Header;
