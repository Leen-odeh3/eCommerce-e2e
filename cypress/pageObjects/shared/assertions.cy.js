class Shared{

       verifyUserInPage(path){
       cy.location("pathname").should("eq", path);
       cy.location("hostname").should("eq", "www.automationexercise.com");
    }
}
export default Shared;