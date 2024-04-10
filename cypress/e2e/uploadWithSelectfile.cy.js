

describe('Drag and drop file using select file', () => {
  it('should drag and drop with select file', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#drag-drop-upload').selectFile( 'cypress/fixtures/testDragDrop.txt', {
      action: 'drag-drop'} )

      cy.get('#drag-drop-upload').should('contain', 'testDragDrop.txt')
  })
  

})