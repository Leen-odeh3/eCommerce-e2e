class removeProductAssertion{

    verifyRemovedProduct(){
      cy.contains("p","Cart is empty!").should(be.visible)
    }
}

export default removeProductAssertion