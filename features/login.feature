Feature: Product Store sign in
    Como usuario de la página
    Quiero poder Loguearme y Desloguearme

    @login
    Scenario: Un usuario debe poder loguearse en la página
        Given Un usuario visita demoblaze
        When El usuario abre el modal para loguearse
        And Ingresa el usuario registrado "jrodriguez"
        And Ingresa su password registrado "test1234"
        And Hace click en Login
        Then El usuario debe aparecer logueado

    @login
    Scenario: Un usuario debe poder desloguearse de la página
        Given Un usuario visita demoblaze
        And Un usuario se loguea con usuario "jrodriguez" y password "test1234"
        When El usuario hace click en sign out
        Then El usuario debe aparecer deslogueado