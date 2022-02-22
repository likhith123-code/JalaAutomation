/// <reference types="Cypress" />
import Variables from ".//..//../support/Variables"
describe('Create Employes Test Case', () => {

    it('user logs in to the account', () => {
         cy.visit("http://magnus.jalaacademy.com/")
         cy.get("#UserName").type("training@jalaacademy.com")
         cy.get("#Password").type("jobprogram")
         cy.get("#btnLogin").click()
    })

    it("user opening the Employee form", () =>{
        cy.xpath('//ul[@id = "MenusDashboard"]/li[2]').click()
        cy.xpath('//ul[@class="treeview-menu"]/li[1]/a[@href="/Employee/Create"]').click()
        cy.wait(1000)
    })

    it("user filling the employee form ", () =>{
        var utc = new Date().valueOf()

        Variables.utcValue = utc

        cy.get("#FirstName").type("Prasad")
        cy.get("#LastName").type("LastName"+utc)
        cy.get("#EmailId").type("sample"+utc+"@gmail.com")
        cy.get("#MobileNo").type("9514521000")
        cy.get("#DOB").type("22/10/1996")
        cy.get("#rdbMale").check()
        cy.get("#Address").type("Hyderabad",{ force: true })
        cy.get("#CountryId").select("1")
        cy.get("#chkSkill_2").check()
        cy.xpath('//button[@type = "button"]').click()
    })


  })