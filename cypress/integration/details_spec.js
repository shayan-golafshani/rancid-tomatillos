describe('User Movie Details flows', () => {

    beforeEach(()=> {
        //visit money plane movie details page
        cy.visit('http://localhost:3000/694919');
    })

    it('Each set of movie details should contain a go back button that returns user to home page', () => {

        cy.url().then(url => {
        
            cy.get('button').should('contain', 'Go Back')
            .click()

            cy.url().should('not.eq', url);
          });
    })

})