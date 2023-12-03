/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavElements = (props) => {
    return (
        <ul className={ `transition-all ease-in duration-500 background-navBar navElements text-black h-[${props.h}] flex ${props.direction} items-center text-center gap-8`}>
                <li><a className="nav-elements" href="#">Features</a></li>
                <li><a className="nav-elements" href="#">FAQ</a></li>
                <li><a className="nav-elements" href="#">Pricing</a></li>
                <li><a className="nav-elements" href="#">Testimonials</a></li>
                <li className=""><button className="bg-indigo-500 font-medium py-2 text-white rounded-lg w-[15rem] border hover:border-black shadow hover:shadow-lg md:w-[20rem] lg:w-[10rem] lg:bg-white lg:text-black">Buy Template</button></li>
        </ul>
    )
}

export default NavElements;