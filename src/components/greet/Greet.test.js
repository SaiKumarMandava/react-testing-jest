import {render,screen} from '@testing-library/react'
import Greet from './greet'

/*
test function accept three arguments
 1.Name of the test
 2.function that run the test
 3. timeout (optional)
*/


/*
alternative to test we can use it function accept three arguments
 1.Name of the test
 2.function that run the test
 3. timeout (optional)
 4. if we filter the stest whlie using it method
    i) for execute specified test use fit() alternative to test.only
    ii) for skip use xit() alternative to test.skip()
*/
test("Render Text correctly",()=>{
    render(<Greet />)   //pass componet you want to test
    // const textElement=screen.getByText("Hello")
    //for ignoring case
    const textElement=screen.getByText(/hello/i)
    //expect method to check our assumption
    expect(textElement).toBeInTheDocument()
    

})

it("Render Text With Name",()=>{
    render(<Greet name="Sai"/>)   //pass componet you want to test
    // const textElement=screen.getByText("Hello")
    //for ignoring case
    const textElement=screen.getByText(/hello sai/i)
    //expect method to check our assumption
    expect(textElement).toBeInTheDocument()
    

})


it("Render Text With last Name",()=>{
    render(<Greet name="Sai" last="Kumar"/>)   //pass componet you want to test
    // const textElement=screen.getByText("Hello")
    //for ignoring case
    const textElement=screen.getByText(/hello Sai Kumar/i)
    //expect method to check our assumption
    expect(textElement).toBeInTheDocument()
    

})

/*
if you wnat to filter the test that need to execute
1.test.only()--->run only the specified test
2.test.skip()--->skip the test for paricular test
*/

/*grouping test
1.Describe method used to group our test
2.describe("group name",fun)
3.you can add nesting describe also
4.example
describe("Greet",()=>{
    
   test("Render Text With Name",()=>{
    render(<Greet name="Sai"/>)   //pass componet you want to test
    // const textElement=screen.getByText("Hello")
    //for ignoring case
    const textElement=screen.getByText(/hello sai/i)
    //expect method to check our assumption
    expect(textElement).toBeInTheDocument()
}) 
})

5.we can use skip and only with describe method to filter test
*/