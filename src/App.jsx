import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <ButtonGradient />
      <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden">
        {/* <Button className="mt-10" href="login">
          Something -> we are removing the app because we no longer need it right now we will render the header
        </Button> */}
        <Header />
        <Hero />

      </div>
    </>
  )
}

export default App

// Wrapping our h1 element with fragmant -> which is allowing us to add more elements right here 
// Then we will render ButtonGradient and to get access to it we will import it on the top 
// This buttonGradient is an svg through which we are giving the gradient effect to the button

//whenever we want to provide specific values than we can use square brackets []
// also for large screens
// within we can render our button component and give it a mt - margin top
// right now we wont be able to see the something text bcs in Button.tsx the button is rendering the text button
// what we should do now -> is transform this button into a completely reusable component
// let's get started by making this button accept some of the props for example the className or the href that we are passing