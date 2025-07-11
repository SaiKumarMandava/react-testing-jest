import { render, screen } from "@testing-library/react";
import { Application } from "./Application";


/*.....getByRole....*/
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

        //button
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })
})