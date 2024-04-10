describe('Test suite drag and drop', () => {
    it('should drag and drop demoqa site', () => {
      cy.visit('https://demoqa.com/droppable')
      cy.get('#draggable').drag('#droppable', {force:true}).then((success) => {
        assert.isTrue(success)
      })
      cy.contains('Dropped!').should('be.visible')
     
    })

    xit('should drag and drop herokuapp site', () => {
      cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
      cy.get('#column-a').trigger('mouseover').drag('#column-b', {force:true}).then((success) => {
        assert.isTrue(success)
      })
      
     
    })
  })