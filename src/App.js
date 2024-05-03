import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'
import Pruebas from './pruebas.js'



const App = () => {
  const course = [
    
    {
      name: 'Half Stack application development',
      parts: [
                {
                  name: 'Fundamentals of React',
                  exercises: 10
                },
                {
                  name: 'Using props to pass data',
                  exercises: 7
                },
                {
                  name: 'State of a component',
                  exercises: 14
                }
             ],
      total: 10+7+14
  }
]

  return (
    <div>
      <p><Header course={course[0].name}/></p>
      <p><Content titulo={course[0].parts[0].name}num={course[0].parts[0].exercises}/></p>
      <p><Content titulo={course[0].parts[1].name}num={course[0].parts[1].exercises}/></p>
      <p><Content titulo={course[0].parts[2].name}num={course[0].parts[2].exercises}/></p>
      <p><Total total={course[0].total}/></p>
      <p>
      <Pruebas/>
      </p>
      
    </div>
  )
}

export default App