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
            cy.wait(1000)
    })

    it('Navbar should contain website title', () => {
       cy.get('h1').contains('Rancid Tomatillos')
    })

    it('Should contain a searchbar, that can be typed in', () => {
        cy.get('input').type('Mul')
        cy.get('img:first').click()
        cy.url().should('eq', 'http://localhost:3000/337401')
    })

    it('Should be able to visit http://localhost:3000 and see the first movie poster', () => {
      cy.get('img:first').should('be.visible')
  });

    it('Should be able to display movie cards on load', () => {
        //cy.get('#id')
    })


    it('Should be able to click first movie card, should update url to matching path and display details', () => {
        cy.url().then(url => {
            cy.get('.movie-card:first').click()
            cy.url().should('eq', 'http://localhost:3000/694919')
            cy.url().should('not.eq', url);
          });
    })

})

