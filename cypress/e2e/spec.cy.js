

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })



  const nameInput = () => cy.get('input[name=user]');
  const pepInput = () => cy.get('input[name=pepperoni]');
  const sausInput = () => cy.get('input[name=sausage]');
  const mushInput = () => cy.get('input[name=mushrooms]');
  const peppersInput = () => cy.get('input[name=peppers]')
  const hereToOrder = () => cy.get('a[href*="/pizza"]');
  const specialInput = () => cy.get('input[name=special]')
  const submitBtn = () => cy.get('button[type=submit]');


  it('sanity check', () => {
    expect(1 + 2).to.equal(3);
    expect(3 * 5).to.equal(15);
    expect(10 - 5).to.equal(5);
  })



  it('showing proper elements', () => {
    hereToOrder().click();
    nameInput().should('exist');
    pepInput().should('exist');
    sausInput().should('exist');
    mushInput().should('exist');
    peppersInput().should('exist');
    specialInput().should('exist');
  })


  describe('filling out inputs and submitting', () => {
    it('can navigate to site', () => {
      cy.url().should('include', 'localhost');
    })



    it('can type in inputs', () => {
      hereToOrder().click();
      nameInput()
        .should('have.value', '')
        .type('Michael')
        .should('have.value', 'Michael');

      specialInput()
        .should('have.value', '')
        .type('Please hurry!')
        .should('have.value', 'Please hurry!')
    })

    it('can check checkboxes', () => {
      hereToOrder().click();
      cy.get('[type=checkbox]').check();
      pepInput().should('be.checked');
      sausInput().should('be.checked');
      mushInput().should('be.checked');
      peppersInput().should('be.checked');
    })


    it('can submit form', () => {
      hereToOrder().click();
      submitBtn().click();
    })


  })
})