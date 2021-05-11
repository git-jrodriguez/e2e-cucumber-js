Feature: Product Store sign in
  Como usuario de la página
  Quiero registrar una cuenta

  @signup
  Scenario: Un usuario debe poder registrarse en la página
    Given Un usuario visita demoblaze
    When El usuario abre el modal para registrarse
    And Ingresa el usuario "jrodriguez" + DD-MM-YYYY MM:SS
    And Ingresa su password "test1234"
    And Hace click en Sign up
    Then El modal debe indicar que el registro se ha completado