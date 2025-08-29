class subscriptionAssertions{

 verifyTextShow(word){
cy.contains("h2",word).should("be.visible")
}

showSuccessMessage(){
 cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('You have been successfully subscribed!');
  });
}

}
export default new subscriptionAssertions()