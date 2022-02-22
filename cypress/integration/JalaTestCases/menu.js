/// <reference types="Cypress" />
import Variables from ".//..//../support/Variables"
describe('Menu Item selection Test Case', () => {

    it('user logs in to the account', () => {
         cy.visit("http://magnus.jalaacademy.com/")
         cy.get("#UserName").type("training@jalaacademy.com")
         cy.get("#Password").type("jobprogram")
         cy.get("#btnLogin").click()
    })

    it("user opening the Menus tag ", () =>{
        cy.xpath('//ul[@id = "MenusDashboard"]/li[3]').click()
        cy.xpath('//ul[@id = "MenusDashboard"]/li[3]//a[@href = "/Home/Menu"]').click()
        cy.wait(1000)
    })

    it("user verifying the menu item clicked ", () =>{
        cy.xpath('//div[@id = "tab_1"]//ul/li[1]//a[@id="b1"]').click()
        cy.xpath('//span[@id="label"]').should('have.text',"You Have Selected Testing Menu Option.")

    })


  })