import { companyLogos } from "../constants"

export const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
        <h5 className="tagline mb-6 text-center text-n-1/50">Helping people create beautiful content at</h5>
        <ul className="flex">
            {companyLogos.map((logo, index) => (
                <li className="flex items-center justify-center flex-1 h-[8.5rem]" key={index}>
                    <img src={logo} width={134} height={28} alt={logo}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

// right now it is not visible bcs it is very dark
//to make it be seen we can do that - by accepting these {className} that we are providing
// and then applying them directly to our div
//className={className} - that will make it appear right in the bottom
//within the div we have h5
// and then we can start listening those logos
// and below the h5 we can render a ul that's gonna have a className
// and it is going to render or map over companyLogos.map(logo, index) - where we get each individual logo and index of that logo
// and we return an <li></li> for each one of these that renders a self-closing image with src of logo 
//and give the li a key equal to index and style it