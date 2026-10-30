function cmdv() {
    let ventas, antiguedad, porcentaje, comision;

    alert("Este algoritmo calcula la comision de un vendedor segun sus ventas y antiguedad")

    ventas= parseFloat(prompt("Ingrese el valor de ventas del mes (sin puntos ni comas)"))
    antiguedad =parseInt(prompt("Ingrese los años de antiguedad"), 10);

    if(ventas>= 0 && antiguedad >= 0) {
        if (ventas>= 8000000 && antiguedad >= 2) {
            porcentaje= 10;
        } else if (ventas >= 3000000) {
            porcentaje = 5;
        } else {
            porcentaje = 0
        }

        comision = ventas * porcentaje / 100;

        alert("Ventas realizadas: $" + ventas.toFixed(2) +
              "\nPorcentaje de comision: " + porcentaje + "%" +
              "\nValor de la comision: $" + comision.toFixed(2));
    } else {
        alert("Error: ingrese valores numericos validos, sin valores negativos");
    }
}


function sdp() {
    let ingresos, gastos, historial, disponible, resultado;

    alert("Este algoritmo clasifica una solicitud de préstamo según los ingresos, los gastos y el historial crediticio");

    ingresos = parseFloat(prompt("Ingrese los ingresos mensuales (sin puntos ni comas)"))
    gastos = parseFloat(prompt("Ingrese los gastos mensuales (sin puntos ni comas)"))
    historial = (prompt("Ingrese el historial crediticio: positivo o negativo") || "").toLowerCase().trim();

    if (ingresos >= 0 && gastos >= 0) {
        if (historial === "positivo" || historial === "negativo") {
            disponible = ingresos - gastos;

            if (ingresos <= gastos) {
                resultado = "Rechazada por capacidad de pago insuficiente";
            } else if (historial === "negativo") {
                resultado= "Rechazada por historial crediticio"
            } else if (disponible>= 1000000) {
                resultado= "Preaprobada";
            } else {
                resultado="Pendiente de revisión"
            }

            alert("Ingresos mensuales: $"+ ingresos.toFixed(2) +
                  "\nGastos mensuales: $" +gastos.toFixed(2) +
                  "\nDinero disponible: $" +disponible.toFixed(2) +
                  "\nResultado de la solicitud: "+resultado);
        } else {
            alert("Error: el historial crediticio debe ser positivo o negativo");
        }
    } else {
        alert("Error: ingrese valores numéricos válidos, sin valores negativos");
    }
}


function hotel() {
    let tipo, temporada, noches;
    let tarifa, costo, descuento, total;

    alert("Este algoritmo calcula la tarifa de alojamiento segun la habitacion, la temporada y las noches reservadas");

    tipo = (prompt("Ingrese el tipo de habitacion: estandar, ejecutiva o suite") || "").toLowerCase().trim();
    temporada = (prompt("Ingrese la temporada: alta o baja") || "").toLowerCase().trim();
    noches = parseInt(prompt("Ingrese el numero de noches reservadas"), 10);

    if (noches > 0) {
        if (tipo=== "estandar") {
            tarifa= 150000;
        } else if (tipo === "ejecutiva") {
            tarifa = 250000;
        } else if (tipo === "suite") {
            tarifa = 400000;
        } else {
            tarifa = 0;
        }

        if (tarifa>0) {
            if (temporada === "alta" || temporada === "baja") {
                if (temporada === "alta") {
                    tarifa = tarifa * 1.20;
                }

                costo = tarifa * noches;

                if (noches>= 5) {
                    descuento = costo * 0.10;
                } else {
                    descuento = 0;
                }

                total = costo - descuento;

                alert("Tarifa por noche: $" + tarifa.toFixed(2) +
                      "\nCosto antes del descuento: $" + costo.toFixed(2) +
                      "\nDescuento aplicado: $" + descuento.toFixed(2) +
                      "\nTotal a pagar: $" + total.toFixed(2));
            } else {
                alert("Error: la temporada debe ser alta o baja");
            }
        } else {
            alert("Error: el tipo de habitación no es válido");
        }
    } else {
        alert("Error: el numero de noches debe ser mayor que cero");
    }
}


function col() {
    let n1, n2, n3, asistencia, promedio, resultado;

    alert("Este algoritmo determina el resultado académico según las calificaciones y la asistencia");

    n1 = parseFloat(prompt("Ingrese la primera calificación (de 0 a 100)"))
    n2 = parseFloat(prompt("Ingrese la segunda calificación (de 0 a 100)"))
    n3 = parseFloat(prompt("Ingrese la tercera calificación (de 0 a 100)"))
    asistencia = parseFloat(prompt("Ingrese el porcentaje de asistencia (de 0 a 100)"));

    if ((n1>= 0 && n1<= 100)&&(n2>=0 && n2<=100) && (n3>= 0 && n3<= 100) && (asistencia>= 0 & asistencia<= 100)) {
        promedio = (n1+n2+n3) / 3;

        if (asistencia < 80) {
            resultado = "No aprobado por asistencia";
        } else if (promedio < 60) {
            resultado = "No aprobado por rendimiento"
        } else {
            resultado = "Aprobado";
        }

        alert("Promedio: " + promedio.toFixed(2) +
              "\nPorcentaje de asistencia: " + asistencia + "%" +
              "\nResultado final: " + resultado);
    } else {
        alert("Error: las calificaciones y la asistencia deben estar entre 0 y 100")
    }
}