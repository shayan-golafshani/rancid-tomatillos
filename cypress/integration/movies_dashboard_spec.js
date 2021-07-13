describe ('User Movie Selection flows', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Navbar should contain website title', () => {
       cy.get('h1').contains('Rancid Tomatillos')
    })
})

// describe('Feedback Loop login flows', () => {
//     it('Should confirm that true is equal to true', () => {
//       expect(true).to.equal(true)
//     });
//   });