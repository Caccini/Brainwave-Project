import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
    // <div>Button</div>
    
    const classes = `button relative inline-flex items-center justify-center h-11 
    transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'}
    ${className || ''}`;

    const spanClasses = 'relative z-10';

    const renderButton = () => (
        <button className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    
    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)}
        </a>
    )
    

    return href 
        ? renderLink() 
        : renderButton();

}

export default Button

// following the comments from app.jsx
// we can destrucure the props and accept a className as well as href and later on we might want to accept a speicifc onClick or some children  that the button might accept
// once we accept all of these values we can render that button and we can just return like we are doing here but sometimes 
// let's say we want to make our button a link and sometimes we want to make a real rectangular button 
// to make that happen we can render two sub functions called const renderButton which is equal to just an arrow function 
// where we have an instant return keep in these are parentheses() not {} 
// where we just return a button component
// and this button component will render a span element
// rendering the {children}
// and it will also render a special button svg component 
// so we do {ButtonSVG(white)} - to which we pass the color 
// this btn svg has to be imported 
// and finally we return the render button component and call it ();

// let's create further classes by creating a new const classes -> and start defining them here
// but before starting to defining them we should use them in our button by saying className equal to {classes}

// now if we are passing some spefici px values like this ${px} -> px coming from the props coming from the parent component -> then we are going to render it else we are going to render a default of px-7
// next if the {white} is true then we want to render a text-n-8 and else we want to render a text-n-1
// and finally if we have the classNames we are going to render them else we are going to render an empty string

// this way we ensure that all of the properties that we pass from our parent component into our button -> indeed get passed to our button  

//bcs in our App.tsx the mt and the paddings we can see that they are being applied 

// This is how we make reusable components!

// we can make it even more reusable by defining a const spanClasses
// and then apply the class name to the span element
// that way we can change and modify the text within it

// what if we don't want to render a button -> but we want to simply render a link
// well we can create a new function for that const renderLink -> and then we can have a return statement an automatic one again where we have an anchor tag like this
// that will have an href of {href} -> because this is a clickable link - and we still pass ove the class names from classes and then the span and the button will be exactly the same so we can simply copy it here

// now that we have renderButton and renderLink -> we can choose when to render each one
// so instead of return renderButton we can say
// return if the href property exists -> then we can render the renderLink
// otherwise we return the renderButton

// in this case we did pass the href -> so we will render a link but if we remove the href it will be a regular button

// all completely reusable and we will be even able to expand on this component even later on and make it more dynamic 
// for now this is good enough -> we had to learn how to make reusable components 