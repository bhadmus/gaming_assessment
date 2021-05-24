class RollDice{
    clickAnElement(element){
        cy.get(element).click()
    }
    insertAValue(field, value){
        cy.get(field).type(value)
    }
    clearValue(element){
        cy.get(element).clear()
    }
    viewTextofAnElement(element, text){
        cy.get(element).should('contain', text)
    }
    waitToSeeElement(element){
        cy.get(element).should('be.visible')
    }
}
export default RollDice