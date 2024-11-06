import { curve, heroBackground, robot } from '../assets';
import Button from './Button';
import Section from './Section';
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { heroIcons } from '../constants';
import { ScrollParallax } from 'react-just-parallax';
import { useRef } from 'react';
import Generating from './Generating';
import Notification from './Notification';
import { CompanyLogos } from './CompanyLogos';


const Hero = () => {
    const parallaxRef = useRef(null);

  return (
    <Section 
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
    >       
        <div className='container relative' ref={parallaxRef}>
            <div className='relative z-1 max-w-[62rem] 
                mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]'>
                    <h1 className='h1 mb-6'>
                        Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `} 
                        <span className='inline-block relative'>
                            Brainwave <img src={curve} className='absolute top-full left-0 w-full xl:-mt-2 ' width={624} height={28} alt="Curve"/>
                        </span>
                    </h1>
                    <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
                        Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
                    </p>
                    <Button href="/pricing" white>
                        Get started

                    </Button>
            </div>
            <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
                <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
                    <div className='relative bg-n-8 rounded-[1rem]'>
                        <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />
                        <div className='aspect-[34/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
                            <img src={robot} className='w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]' 
                                width={1024} height={490} alt='AI'/>
                            
                            <ScrollParallax isAbsolutelyPositioned>
                                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"/>
                            </ScrollParallax>

                            <ScrollParallax isAbsolutelyPositioned>
                                <ul className='hidden absolute -left-[5.5rem] bottom-[7.5rem]
                                px-1 py-1 bg-n-9/10 backdrop-blur border boder-n-1/10 rounded-2xl xl:flex'>
                                    {heroIcons.map((icon, index) => (
                                        <li className='p-5' key={index}>
                                            <img src={icon} width={24} height={25} alt={icon}/>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollParallax>

                            <ScrollParallax isAbsolutelyPositioned>
                                <Notification
                                    className="absolute hidden -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" title="Code generation"
                                />

                            </ScrollParallax>
                        </div>
                    </div>
                    <Gradient />

                </div>
            <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2
                md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
                <img src={heroBackground} className='w-full' width={1440} height={1800} alt="hero" />
            </div>
            <BackgroundCircles />
            </div>
            <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
        </div>
        <BottomLine />
    </Section>
  )
}

export default Hero

// let's immediately consume it in our App.jsx - just belowe the <Header></Header>
// we want to render a <Hero></Hero> section 

// here we are not going to wrap it in the typical div tag but we will wrap it in our Section - which we have created just before 

// now we will pass more Props - such as className, crosses etc
//right now we are still not able to see anything because we dont have enought content in our hero section 

// so we add another div with class container and relative - and within this div we will create another div 
//mx-auto marting horinztoal auto - and this will simply align all the elements horizontally 
//mb - margin bottom - to provide some spacing
// finally within this div we can create a new h1 
// belowe the image tag we will go a p tag which will form our subheading - that subheading will contain all the text below

// right belowe this P tag we want to show a call to action button - so it will be a button component which we need to import from <Button></button>
// and that button since it is our component we can pass it an href of /pricing and we will give it a special property of white

// now we will start with the rest of the page which is very exciting - we go below the button and below the div
// and we create another div which will be the container for the rest of our hero section 
// within that div we will create another div to keep building out that hero structure and apply it some classNames

// within that div we want to create another div 
// and within that div we will create a self-closing div that will have a Classname
// and belowe it we can have another div that will show this robot image

// now we style the div wrapping the robot
//overflow-hidden - so we cannot scroll through it
// on medium devices we change the aspect ratio and on lg devices as well 

//one last div outside of this one - and within that div we are creating the image that will be the hero background
//rn this background image is under the other image but we need to make it be behind the other image
// to do that - we need to add more properties to our robot image

//now lets add the classnames to this div wrapping the hero background
// these will make it appear below or rather behind the robot image
// and then the rest of the properties are to move the image right behind the robot image

// now we need to implement the moving circles which we already implemented before 
// first we instal package react-just-parallax in the terminal
// and then we will use the same rings we have used before from /design but this time in the hero 
// the things that are mounted - these are the balls that we can see flowing around

// to implement these things - we head over to the hero.tsx that we have developed - and we can import everything we need
// import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
// import { heroIcons } from '../constants';
// import { ScrollParallax } from 'react-just-parallax';

//Now to make it work - we can give a ref to our div of the hero section
// by saying ref = {parallaxRef} 
// and then we can define that ref on the top with a const parallaxRef = which is equal to useRef - which is a hook which we have to import at the start equal to null


//once we have that ref we can navigate below the ai image - and then there we can rednder the scroll parallax coming from the package we have just installed 
// there we can say is absolutely positioned which is one of its properties
// and we can render a UL or an unordered list within it

//now within there we will be able to show all these different icons that we have to have floating around

//now within this ul - we can open up a dynamic code {} and say heroIcons.map(icon, indexIcon) - where we get each individual icon and an index for that icon 
// and we can immediaely return an <li></li> with a key index
// and within it we render an img that has a src equal to icon 
// now we will have this menu appearing and it is floating - later we will make it clickable
// we have this parallax effect which is really cool - and it is done by the library we installe

//two divs down below the parallax - we want to render self closing gradient component  
// and then below the image background - we want to render the background circles - which we also created previously 
// and this will make it move like this
// with {` `}  - this provides space

//finally we have to implement those flying add-ons to our robot screen - 1st we will do the AI is generating text which is in the middle
// now in the components folder - we will create our first flying component - Generating.jsx
// the notes for it will be in the component itself

//after creating the generating component we can render it above the parallax 
// now we still can't see it - and that is because we have to pass some additional props or styles to it
// specifically we have to make it - absolute positioned
// <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"/>
// this is to ensure that we properly position it on top of our image

//now the last thing that we have to do is the other card - the code generation card
// and we can create it by creating a new component within out components folder - and call it notification.jsx
//more notes on the creation in the component itself

// it is also going to be within its own parallax - we have to create another parallax in the Hero.jsx
//new parallax - that means that it is going to move up and down
// it will be absolutely positioned 
// and inside the <parallax/> we can render the self-closing Notification component
// and we can pass some properties className hidden - which means it will usually be hidden but on larger devices we will be able to see it
// flex meaning visible
//title - this will be what the notification will say

//now we go to the notification component and start creating it

//we are done with the hero section - but we did much moe - we have the reusable section component which now creates these rectangular lines on desktop devices
// and we have also set up the entire file and folder structure - so now we can simply render an additional section below the hero section 