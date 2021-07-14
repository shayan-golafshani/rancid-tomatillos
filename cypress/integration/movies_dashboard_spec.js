describe ('User Movie Selection flows', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Navbar should contain website title', () => {
       cy.get('h1').contains('Rancid Tomatillos')
    })

    it('Should be able to click first movie card, should update url to matching path and display details', () => {

        cy.url().then(url => {
        
            cy.get('.movie-card:first').click()

            cy.url().should('not.eq', url);
            cy.get('button').should('contain', 'Go Back')
          });


        // cy.get('.movie-card:first').click()
        
        // .click()
        // cy.url().should('include', 'localhost')
//cy.get('li:first').click({
    })

   // it('Should be able to click on a movie-card and render those movie details', () => {
    //keep working on this test!

        //cy.get('.movie-card').should('have.class', 'hover')

        //cy.get('.title-rating').should('be.hidden').invoke('show').click()
        //cy.get('#message').should('contain', 'the button was clicked')
    //})
})

// describe('Feedback Loop login flows', () => {
//     it('Should confirm that true is equal to true', () => {
//       expect(true).to.equal(true)
//     });
//   });