describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      const textH1 = "Testing Next.js Applications with Cypress"
      // h1 = [data-test='hero-heading']
      cy.getByData("hero-heading").contains(textH1)
    })

    // Para executar somente o teste que estamos modificando temos que colocar `it.only`
    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses") // fato de `.contains()`  diferenciar maiúsculas de minúsculas.
      cy.get("dt").eq(1).contains("25+ Lessons") // fato de `.contains()`  diferenciar maiúsculas de minúsculas.
      cy.get("dt").eq(2).contains("Free and Open Source") // fato de `.contains()`  diferenciar maiúsculas de minúsculas.
    })
  })

  context("Courses section", () => {
    // Criando variaveis referente a posição do botão
    const locationButtonCourse = 3;

    it("Course: Testing Your Frist Next.js Application", () => {
      // Selecionar o Botão de "Get started" da página inicial
      cy.getByData("course-0").find("a").eq(locationButtonCourse).click()

      // Pegar a URL da página
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })

    // Prática -> criando teste para cada botão de curso
    it('Course: Testando o segundo botão do aplicativo Next.js', () =>{
      cy.getByData("course-1").find('a').eq(locationButtonCourse).click()
      cy.location('pathname').should('eq','/testing-foundations')
    })

    it('Course: Testando o terceiro botão do aplicativo Next.js', () => {
      cy.getByData("course-2").find('a').eq(locationButtonCourse).click()
      cy.location('pathname').should('eq','/cypress-fundamentals')
    })
  })
})
