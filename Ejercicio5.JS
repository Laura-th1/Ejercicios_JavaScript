function contarcoloresArray(colores){
    return colores.length;
}
let colores= ['amarillo', 'morado', 'azul', 'verde']
let totalcolores=contarcoloresArray(colores);
console.log("Hay",totalcolores,"colores.")

console.log(colores[0]);
console.log(colores[3]);

//Nuevo elemento
colores.push("azul");
console.log(colores);

//Elimina el primer elemento
colores.shift();
console.log(colores);


