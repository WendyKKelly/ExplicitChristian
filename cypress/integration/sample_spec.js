describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
  
  describe('Navigation', () => {
    it('should navigate to the post page', () => {
      // Start from the index page
      cy.visit('https://localhost:3000/')
  
      // Find a link with an href attribute containing "about" and click it
      cy.get('a[href*="post"]').click()
  
      // The new url should include "/about"
      cy.url().should('include', '/post')
  
      // The new page should contain an h1 with "About page"
      cy.get('author').contains('Wendy')
    })
  })