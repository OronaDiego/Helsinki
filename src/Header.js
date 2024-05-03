//En este codigo hago uso de la desestructuracion : que es extraer una propiedad de un objeto directamente
// const {course} = props  // const course = props.course
// en las llavez indicamos el campo del objeto que queremos extraer y le asignamos esto desde las props

const Header = ({course}) => <>{course}</> // esto se conoce como one liner es una funcion que devuelve lo primero que esta evaluando

    
export default Header;