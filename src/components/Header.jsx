import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from './Button';
import MenuSvg from'../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from 'react';

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if(openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    }

    const handleClick = () => {
        if(!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    }

  return (
    <div className={`fixed top-0 left-0 w-full z-50 
        border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} alt="Brainwave"/>
            </a>
            <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 
                lg:static lg:flex lg:mx-auto lg:bg-transperent`}>
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item) => (
                        <a key={item.id} href={item.url} onClick={handleClick}
                            className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
                                    ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                                    ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}
                                    lg:leading-5 lg:hover:text-n-1 xl:px-12
                                `}
                        >
                            {item.title}
                    
                        </a>
                    ))}      
                </div>
                <HamburgerMenu />
            </nav>

            <a 
                href="#signup"
                className="button hidden mr-8 text-n-1/50 transtion-colors hover:text-n-1 lg:block"
            >
                New Account
            </a>
            <Button className="hidden lg:flex href=#login">
                    Sign In
            </Button>
            <Button className="ml-auto lg:hidden px-3" onClick={toggleNavigation}>
                <MenuSvg openNavigation={openNavigation} />
            </Button>


        </div>
    </div>
   
  )
}

export default Header

//After App.tsx we start ceating it
// We can start with the structure by return a <div></div> that has a className 
// immediately within the 2nd div we want to render an a tag
// an anchor tag that will render the image of {brainwave} and this brainwave has to be imported from out assets
// #href hero this is an id used for navigation - we want to specifiy what happens if we click it and if we click it we can navigate over this section

// inside the div of the nav we will have our nav items - and for that to be easier to map over our nav items - we will create a new folder constants 
// now we can map over the items in the index.js instead of hard-coding them
// we can do that by importing at the top 
// now we can use that navigation code here by using a dynamic block of code called {navigation} and then mapping over it by saying .map -> where we get each individual item and for each item we instantly return something
// and that something is an anchor tag -> this anchor tag can render the item.title and it will have a key equal to item.id as well as href equal to item.url 
// so now we are mapping over all of these properties and we are using the URL and the title

// but if we save this we are not able to see anything yet
// that is bcs this nav is usually hidden 
// giving the anchor tag a className and this className will be dynamic and it will first turn each element into a block then it will give it a relative a font-code which will apply a special font family 
// we also want to turn on a special property called ${mobileOnly} - so some of this properties will only be showin gon mobile and if that is the case then we can do lg hidden - which means we can hide that item on desktop
// or we can just apply an emoty string and now we continue with the styling
//px - padding x of 6
// py - padding y of 6
// md - medium devising 
// -mr-0.25 - minus margin right of 0.25
// lg - large devices


// next we have to figure out which link is clicked meaning are we in features or are we in pricing
// to do that we can use a special property called - use location from React routerDOM by importing useLocation from ... 
// then at the top of our component we can say const pathname = useLocation
// and this will give us access to the current URL we are on 
// with that we can go to the anchor tag and within the styles we can check if the {item.url} is triple equal to the pathname.hash in which case we can apply a z-index of 2 and on lg devices text-n-1 and if that is not the case we can give it a class for lg devices text-n-1 / 50
// all of the are grayed out besied the one clicked

// next on the right we want to have a sign-up button -> and we can finally use the reusable button we built 
//  so below our div and belowe our nav and create another anchor tag that will have href equal to #signup and it will have a className equal to button 
// mr-8 - margin right of 8 
// text-n-1/50 - and this simply allows us to apply this color we have declared tailwind ccss confit 
// transition-colors - which apply nice transition once we hover it 

// within this anchor tag we can new account 
// below this anchor tag we want to create a button - or rather use our button compononent we have created 
// so we can at the top import it 
// this button will have a className and it will be hidden usually but on lg devices it will be visible
// and it will have an href of #login and it will say sign in 

// we are almost done with this desktop navbar but rn it is not going all the way to the end of the screen 
// we are missing w-full - so for it to take the full width of the screen 

// right now there is nothing on mobile because we will implement a completely custom mobile menu 
// once we import them on the top -> now we can neatly combine the desktop menu with the mobile menu 

// 1st we create a new useState at the top by using the useState snippet
//    const [first, setFirst] = useState(second)
// let call it openNavigation (first) and setOpenNavigation(setFirst)
// and the start it will be set to (false) (second)
//then we can modify the return div by turning it into a template string from the className wrap it in {``}
// and then checking whether we are currently open or not 
// by saying if open navigation then provide a bg-
// ${openNavigatio ? 'bg-n-8 : } else provide a bg-n-1/90 

// now ofc we have to import the useState coming from react 
// now we go belowe this div that is wrapping our items and we are going to render a hamburger menu 
// and we have to make it show by going to our <nav> and modify the className by once again making a template string 
// and then in here we can check if the navigation is crrently open ${openNavigation} if open we cna make it flex if not we can make it hidden 
// now we have set the useState to false but if we set it to true we can see the navigation menu
// ofc we will leave it to false by default
// now we go below our signin button and add a new button - this button will render the menu SVG and it will have className of ml (margin left) of auto 
// ml-auto - will align it horizontally and provide it with px property - which will make it smaller 
// and the MenuSvg needs to know whether it is opened or closed - so we can provide it the {openNavigation} state
// ofc we want to somehow turn it on or off like a toggle switch 
// so we can create a function called const toggleNavigation that is equal to a function
// that checks if the navigation is currently open (openNavigation) - in that case we can setOpenNavigation(false) to be false 
// and else we can setOpenNavigation(true) to be true 

// also we can declare a function called handleClick - and once we click something we want to set open navigation to false  
// bcs if we click something we want the nav to close itself we don't want to have to go back and close it - it should close automatically once we click smth
//  So now let's attach this toggleNavigation to our menu button
    // by giving this button an onClick property of {toggleNavigation}
    //nothing wil work now bcs
// this reusable component button hasn't yet learned how to use the onClick so we can simply pass it to the renderButton by saying onClick is equal to {onClick} 
// so we have to go the Button.tsx where our reusable button is and set the onClick to equal onClick

// we have forgot to pass an onClick listener to each one of our navigation items
    // and we can do that by saying onClick={handleClick}
    // so in our anchor tag - <a key={item.id} href={item.url} onClick={handleClick}


// We have use the Header component which then goes over the Rings, the background circle lines - which are basically nothing more than absolutely positioned values 

// Scroll lock installing - which will ensure that on mobile phones when the hamburger menu is opened we are not abled to scroll - but ones we click on something and it opens it will automatically allows us to scroll 
// installing it npm install scroll-lock
// go to the header and import disablePageScroll and enablePageScroll 

//finally once we toggle the navigation off - we want to enablePaeScroll - so we can once again scroll
// and once we turn on this mobile menu - then we can disablePageScroll 
// also once we click on a specific element - if not openNavigation  (so if it is closed) then simply we want to return - we are not allowed to click then 
// and then we can just enablePageScroll and setNavigationOpen to false - because that means that we clicked and that we are ready to go somewhere else and scroll once again