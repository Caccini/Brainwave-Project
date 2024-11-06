import React from 'react'
import { notificationImages } from '../constants'
import { notification1 } from '../assets'

const Notification = ({ className, title }) => {
  return (
    <div className={`${className || ''} flex items-center p-4 bg-n-9/40
    backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>
        <img src={notification1} width={62} height={62} alt='image' className='rounded-xl'/>
        <div className='flex-1'>
            <h6 className='mb-1 font-semibold text-base'>
                {title}
            </h6>
            <div className='flex items-center justify-between'>
                <ul className='flex -m-0.5'>
                    {notificationImages.map((item, index) => (
                        <li key={index} className='flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden'>
                            <img src={item} className='w-full' width={20} height={20} alt={item}/>
                        </li>
                    ))}

                </ul>
                <div className='body-2 text-n-13'>
                    1m ago
                </div>
            </div>

        </div>
    </div>
  )
}

export default Notification

// now we immediately use it within our Hero.jsx
// it is also going to be within its own parallax - we have to create another parallax in the Hero.jsx

// we can accept the props we are passing into it such as the className and title
// and we can start styling our div giving it a clasName where we first render the className or an empty string
//backdrop-blur - to make it feel like its glassy

//finally we can wrap it within a div - and there we can render an h6 - and it will render the dynamic {title} that we are passing from props
//within the <ul></ul> we can map over our images of the users generating something with AI
// by saying notificationsImages (which we import from constants) .map(item, index) where we get each individual item and the index
// and we can immediately return an <li></li> that renders a self-closing image with src equal to item 

//let style a bit the images by giving the <li></li> a key of index and className = 
//overflow-hidden - so we cannot actually scroll through them
//rounded-full - which will turn them into full circles

//in the final wbesite there is an image of what they are actually creating - so we will ad this one as well
//by adding an img tag above the div with flex-1
// with a src {notification1} which is from assets

//lastly we need a text saying - 1 min ago
// right below the <ul></ul> - we create a div with className
// 