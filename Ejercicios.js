// // Configura un array para que los valores negativos se transformen en 0. 
// Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].

function resetNegativos(x) {
    for (i = 0; i <= x.length; i++) {
        if (x[i] < 0) {
            x[i] = 0;
        }
    }
    return x;
}
var y = resetNegativos([0, 1, -2, 3, -5, 155, -22]);
console.log(y);


// Dado un array, mueve todos los valores un espacio de derecha a izquierda
// eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, 
// moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].

function moverAdelante(array) {
    for (i = 1; i <= array.length; i++) {
        array[i - 1] = array[i];
    }
    array[array.length - 1] = 0;
    return array;

}
var y = moverAdelante([1, 2, 3, 4, 5]);
console.log(y);

// Configura un array para que el resultado sean los valores en el orden contrario.
//  Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].

function reversar(x) {
    resultado = [];

    for (i = x.length; i >= 0; i--) {

        resultado.push(x[i]);

    }

    return resultado;
}

reversar([1, 2, 3, 5, 6, 7, 8]);
console.log(resultado);



// Crea una función que cambie un array repitiendo sus valores originales 
// (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) 
// debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repetirValores(x) {
    resultado = [];

    for (i = 0; i < x.length; i++) {

        resultado.push(x[i]);
        resultado.push(x[i]);

    }

    return resultado;
}

repetirValores([4, 'coding', 0, "dojo", -2]);
console.log(resultado);