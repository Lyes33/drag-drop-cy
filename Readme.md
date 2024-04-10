- how use drag and drop cypress plugin

- 1: install drag and drop plugin 

npm install --save-dev @4tw/cypress-drag-drop

- 2: add this in command.js

require('@4tw/cypress-drag-drop')

- 3: use

cy.get('drabelElementSelector').drag('droppablElmentSelector)

- doc:

https://github.com/4teamwork/cypress-drag-drop