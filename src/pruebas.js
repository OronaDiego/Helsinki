/*
Este archivo es utilizado como un componente de prueba de Js 
*/

const Pruebas = ()=>{
    console.log('Componente Pruebas')

    const persona = [{
        name:"Diego",
        age:"32",
        saludo: function(){
            console.log('hola soy un objeto en el componente de pruebas y mi nombre es ', this.name)
            //document.write('hola soy un objeto en el componente de pruebas y mi nombre es ', this.name)
        },
        suma:function(a,b){
            return a+b
        }
    }]

    
    class person {
        constructor(name, age){
            this.name = name
            this.age = age
        }
        saludar(){
            console.log('Hola soy clase persona desde componente pruebas y mi nombre es '+ this.name)
        }
    }

    const Diego = new person('Diego', 32)
    Diego.saludar()

    return<>

             

            {persona[0].name} {persona[0].age} {persona[0].saludo()}
               {persona[0].suma(10,10)}
             
           
    
    </>
}

export default Pruebas;