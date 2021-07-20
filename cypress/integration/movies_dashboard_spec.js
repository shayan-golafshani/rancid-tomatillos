describe ('User Movie Selection flows', () => {

    beforeEach(() => {
        cy.fixture('movieData').then((movies) => {
            const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2';
            cy.intercept('GET', `${baseURL}/movies`, {
                statusCode: 201,
                  body: movies,
              });
            })
            cy.visit('http://localhost:3000/')
    })

    it('Navbar should contain website title', () => {
       cy.get('h1').contains('Rancid Tomatillos')
    })

    it('Should be able to display movie cards on load', () => {
        
    })

    it('Should be able to click first movie card, should update url to matching path and display details', () => {

        cy.url().then(url => {
            cy.get('.movie-card:first').click()
            

            cy.url().should('eq', 'http://localhost:3000/694919')
            cy.url().should('not.eq', url);
            cy.get('button').should('contain', 'Go Back')
          });


    })

  
})

