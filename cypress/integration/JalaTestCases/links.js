/// <reference types="Cypress" />
import Variables from ".//..//../support/Variables"
describe('Links clicking Test Case', () => {

    it('user logs in to the account', () => {
         cy.visit("http://magnus.jalaacademy.com/")
         cy.get("#UserName").type("training@jalaacademy.com")
         cy.get("#Password").type("jobprogram")
         cy.get("#btnLogin").click()
    })

    it("user opening the links tag ", () =>{
        cy.xpath('//ul[@id = "MenusDashboard"]/li[3]').click()
        cy.xpath('//ul[@id = "MenusDashboard"]/li[3]//a[@href = "/Home/Links"]').click()
        cy.wait(1000)
    })

    it("user opening the links", () =>{
        cy.xpath('//div[@id = "tab_1"]//a[@href = "http://jalatechnologies.com/"]').click()

    })


  })