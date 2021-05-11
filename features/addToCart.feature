Feature: Agregar productos al carrito
    Como usuario de la página
    Quiero poder agregar productos al carrito

    @login22
    Scenario: Un usuario agrega una Laptop al carrito
        Given Un usuario visita demoblaze
        When El usuario selecciona el producto "Sony vaio i5"
        And El usuario agrega el producto al carrito
        And El usuario ingresa al carrito
        Then El carrito debe mostrar la Laptop "Sony vaio i5"