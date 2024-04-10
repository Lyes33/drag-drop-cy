describe('Test suite drag and drop', () => {
    it('should drag and drop', () => {
      cy.visit('https://demoqa.com/droppable')
      cy.get('#draggable').drag('#droppable', {force:true})
      cy.contains('Dropped!').should('be.visible')
     
    })
  })