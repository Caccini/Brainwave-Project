import React from 'react'
import SectionSvg from '../assets/svg/SectionSvg';

const Section = ({
    className,
    id,
    crosses,
    crossesOffset,
    customPaddings,
    children
}) => {
  return (
    <div 
        id={id} 
        className={`
            relative 
            ${
                customPaddings || 
                `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}` 
            }    
            ${className || ""}`}>
            {children}
            
            <div className='hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10' />
            <div className='hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:right-10' />

        {crosses && (
            <>
                <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 
                        ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 right-10
                    `}> 

                </div>
                <SectionSvg  crossesOffset={crossesOffset}/>
            </>
        )}
       
    </div>
  )
}

export default Section









// Let's not only start by creating a Hero Section but by creating a reusable section component which we will use for all the sections to come
// This component will act as a common skeleton which we will reuse in all section components
// this component will create all the lines between different components

// To start working on this component let's first accept some props
// such as classNames, the id of the section, the crosses whether we have them or not, crossesOffset, custompaddings, children
// Once we have that we can return our div and to that div we can provide some class names and we want to make it dybamic so we are going to do it in {``}

// Now within the section we can render the children - so we can say {children} right here - meaning whatever we pass into it will be rendered right here
// and we can also create the divs for the sidelines - lines with + - so we want to differentiate our sections in this very interesting way 
// to do that we will create a div that will usually be hidden - it will be absolute 
// then handling the crosses - so let's create a new dynamic block of code where we check for crosses and if the crosses exist we render a react fragment that has a self-closing div - this div will have a className={``} 
// still nothing sis happening bcs we havent't used this section 
// but before that we have to export those crosses at the top 
// and then we can use it if we have crosses belowe this div 
// By saying SectionSvg to which we pass the crossesOffset it it exists - crossesOffset={crossesOffset}
// now we are ready to finaly use this section but before we use it we can see a warning that the class name is missing in prop validation 
// we just also need to pass the id pver to this div id={id}

// now we can use it for our hero section - go to the hero section for notes