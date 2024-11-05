import { brainwave } from "../assets";
import { navigation } from "../constants";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm
    border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} alt="Brainwave"/>
            </a>
            <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transperent">
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item) => (
                        <a key={item.id} href={item.url} 
                            className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
                                    ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                                `}
                        >
                            {item.title}
                    
                        </a>
                    ))}
                </div>

            </nav>

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


// next we have to figure out which link is clicked