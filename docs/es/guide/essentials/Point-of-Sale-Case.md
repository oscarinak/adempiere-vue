# Procedimiento "Punto de Venta"

Acontunuación se describen los posibles escenarios que se pueden aplicar en la opción del punto de venta de ADempiere-Vue

Para trabajar de manera correctamente y ordenada con el punto de venta se deben aplicar los siguientes pasos:

- Verificar el estatus de la impresor fiscal
- Apertura del punto de venta 
- Creación de tasas de cambio (Ventas Multimoneda)

Una vez aplicado dicho procedimiento se puede montar los pedidos o realizar las ventas del día, para montar dichas ventas se deben aplicar los siguientes:

- Crear pedido
- Crear un pedido con al menos 10 líneas y tres métodos de pago distintos y de monedas diferentes
- Crear y modificar cliente
- Aplicar un descuento
- Permitir eliminar líneas
- Cambiar cantidad de un producto
- Aplicar un descuento del 12% sobre una línea (distinta al resto)
- Agregar un pago en efectivo por al menos el 50% del pedido en USD
- Agregar un pago por punto de venta por el equivalente a 5 USD pero en BsS
- Eliminar el Pago en Efectivo
- Agregar un pago en TDC
- Agregar pago en efectivo por el restante
- Montar un pedido de un kit de ventas  y con 3 formas de pago, punto, efectivo $, transferencia
- Crear pedido con otro tipo de documento
- Reimprimir una factura con problemas
- Generar devoluciones
  - Devolver una sola línea de una factura con más de una línea
  - Devolver una línea del pedido y sustituir por un nuevo producto que iguale la factura
  - Devolver una línea del pedido y sustituir por un nuevo producto que genere una diferencia mayor a  la del pedido
  - Devolver una línea del pedido y sustituir por un producto que genere una diferencia menos a la del pedido
- Solicitar autorización
- Verificar Ingresos de la ventas
- Cuadrar Cajas 
