import {render,screen} from '@testing-library/react'
import Greet from './greet'

/*
test function accept three arguments
 1.Name of the test
 2.function that run the test
 3. timeout (optional)
*/
test("Render Text correctly",()=>{
    render(<Greet />)   //pass componet you want to test
    // const textElement=screen.getByText("Hello")
    //for ignoring case
    const textElement=screen.getByText(/hello/i)
    //expect method to check our assumption
    expect(textElement).toBeInTheDocument()
    

})

test("Render Text With Name",()=>{
    render(<Greet name="Sai"/>)   //pass componet you want to test
    // const textElement=screen.getByText("Hello")
    //for ignoring case
    const textElement=screen.getByText(/hello sai/i)
    //expect method to check our assumption
    expect(textElement).toBeInTheDocument()
    

})