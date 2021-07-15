describe('User Movie Details flows', () => {

    beforeEach(()=> {
        //visit money plane movie details page
        cy.fixture('movieDetailsData').then(movieDetails => {
            
            const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
            cy.intercept('GET', `${baseURL}/694919`, {
                statusCode: 201,
                body: movieDetails, 
            })
        })

        cy.fixture('youtubeVideo').then(video => {
            const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
            cy.intercept('GET', `${baseURL}/694919/videos`, {
                statusCode: 201,
                body: video, 
            })
        })

        cy.visit('http://localhost:3000/');
    })

    it('Each set of movie details should contain a go back button that returns user to home page', () => {

        // cy.url().then(url => {
        
        //     cy.get('button').should('contain', 'Go Back')
        //     .click()

        //     cy.url().should('not.eq', url);
        //   });
        console.log('Hi there bud')
    })

})