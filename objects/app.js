//Objeto persona
let persona = {
    nombre: 'Tirzo',
    apellido: 'Tejeda',
    getName: function (){
        return `${this.nombre} ${this.apellido}`;
    },
    domicilio: {
        calle: 'Casimiro #88',
        colonia: 'Buenavista',
        cp: 2707,
        municipio: 'Colima'
    },
    getAddr: function (){
        return `${this.domicilio.calle}, ${this.domicilio.colonia}, ${this.domicilio.cp}, ${this.domicilio.municipio}`; //Tiene "domicilio.", ya que la información se encuentra dentro de ese objeto
    }
};
//Llama para ver propiedades de persona
console.log(persona);

//Llama para ver el nombre o apellido de persona
console.log(persona.nombre);
console.log(persona.apellido);

//Para ver lo que hay en las propiedades de domicilio
console.log(persona.domicilio);

//Domicilio con formato
console.log(persona.getAddr());