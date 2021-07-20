describe('User Movie Details flows', () => {

    beforeEach(()=> {
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

        cy.visit('http://localhost:3000/694919');
        cy.wait(250)
    })

    // it('Should contain some ratings', () => {
    //     cy.visit('http://localhost:3000/337401')
    //     cy.window.contains('rating')
    //     cy.window.contains('minutes')
    // })

    it('Each set of movie details should contain a go back button that returns user to home page', () => {
        cy.url().then(url => {
            cy.get('button').click()
            cy.url().should('not.eq', url);
          });
    })

    it('Each details page should contain an iframe with an embedded youtube video that can be clicked', () => {
        
    })

    it('Should show a redirect page if the network request cannot be processed.', () => {

    })


})