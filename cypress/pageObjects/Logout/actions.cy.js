class Logout{
    
     deleteAccount() {
        cy.get("a[href='/delete_account']").click();
    }
}

export default new Logout()