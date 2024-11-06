import { loading } from "../assets"
const Generating = ({ className }) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ''} text-base`}>
        <img className='w-5 h-5 mr-4' src={loading} alt="Loading"/>
        AI is generating
    </div>
  )
}

export default Generating

// it is going to render only a single image and a piece of text
// the image will have a className
// and a src of {loading} - so this will be our loader - and this loading we can import 

// rn we won't be able to see it - but as soon as we style this div and give a className which is going to be a dynamic template string
// finally it needs to render all the class names that we passed to it - so we can say {className} and then render ${className} || '' an empty string if we don't have any

//now we want to use this within our hero section - so we go back there 