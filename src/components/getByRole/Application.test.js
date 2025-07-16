import { render, screen } from "@testing-library/react";
import { Application } from "./Application";


/*....1.getByRole....*/
/*
1.getByrRole will return true whether the specific role is present or not.
2.it will return true for one role.(test will pass)
3.it will return false if morethan present with same role.(test will fail)
4.For multiple use getByAllRole
5. also for multiple role we can use getByRole as like this
 it accept values like
 a)label of a form element
 b)the text content of a button
 c)the value of aria-label-attribute


getByRole("textbox",{
  name:"Name"  //label value is Name
  //few more options are
  name,level,hidden,selected,checked,pressed refer docs

})

*/ 


/*....2.getByLabelText....*/
/*
-->getByLabelText will search all labels and finds the associate element with that label
-->It uses id and htmlfor attributes to find element
-->It also works when element is wrapped in label no need for htmlfor and id.
-->If same label appeared two times it uses selector to run test cases.
    like getByLabelText("label Name",{
    selector:"input"
    })
-->selector will accept html elemnet as value here input is html element
*/

/*....3.getByPlaceHolderText....*/
/*
-->getByPlaceHolder will search all elements 
   with place holder attribute 
   and finds that element that matches given text
*/


/*....4.getByText....*/
/*
-->getByText search all the nodes with text content and 
   finds that element that matches given text.
-->It also accept selctor options like getByLabelText
*/

/*....5.getByDisplayValue....*/
/*
-->it returns inpu,select or textarea that has matching 
   display value.

*/

/*....6.getByAltText....*/
/*
-->this will return the element that supports alt attribute.
-->typically work for img,input,textarea supports alt.
*/

/*....7.getByTitle....*/
/*-->it will return the element that matches the title attribute*/


/*....8.getByTestId.....*/
/*
-->it will return the element that matches data-testid attribute
*/
describe("Application",()=>{
    test("renders correctly",()=>{
        render(<Application/>);


        //headings
        const pageHeading = screen.getByRole("heading",{
            // name:"Job application form",
            level:1, //for h1
            
        })
        expect(pageHeading).toBeInTheDocument()


        const sectionHeading = screen.getByRole("heading",{
            // name:"Section 1",
            level:2, //for h2
        })
        expect(sectionHeading).toBeInTheDocument()


        //for input feild and textarea
        const nameElements=screen.getByRole('textbox',{
            name:"Name"
        })
        expect(nameElements).toBeInTheDocument()

        const nameElements1 = screen.getByLabelText('Name',{
            selector:"input"
        })
        expect(nameElements1).toBeInTheDocument()
        
        const nameElements2 = screen.getByPlaceholderText("Fullname")
        expect(nameElements2).toBeInTheDocument()
         
        const nameElements3 = screen.getByDisplayValue("Sai")
        expect(nameElements3).toBeInTheDocument()
         
        const imageelement = screen.getByAltText("a person with a laptop")
        expect(imageelement).toBeInTheDocument()

        const titleElement = screen.getByTitle("close")
        expect(titleElement).toBeInTheDocument()
        
        const testId = screen.getByTestId("custom-element")
        expect(testId).toBeInTheDocument()

        
       const nameBioTextArea=screen.getByRole('textbox',{
            name:"Bio"
        })
        expect(nameBioTextArea).toBeInTheDocument()

        //dropdown
        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument()
        
        //checkbox
        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument()

        const termsElement1 = screen.getByLabelText("I agree to the terms and conditions")
        expect(termsElement1).toBeInTheDocument()


        const paragraphText = screen.getByText("All fields are mandatory")
        expect(paragraphText).toBeInTheDocument()

         


        //button
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })
})