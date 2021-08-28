import React, {useState} from "react";
import '../css/dev_style.css'
import 'react-bootstrap'
import Project_item from "./project_item";
import axiosAPI from "../../../axiosAPI";
import MyLoader from "../ContentLoader";


const Works = () => {
    const [projects, setProjects] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasErr, setHasErr] = useState(false)

    React.useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = React.useCallback(async () => {

        try {
            const res = await axiosAPI.post('api/projects/get-projects')
            setProjects(res.data.projects)
        } catch (e) {
            console.log(e)
            setHasErr(true)
        } finally {
            setIsLoaded(true)
        }

    }, [])

    const outProjects = () => {
      if(isLoaded) {
          if (hasErr) {
              return <h2>Произошло ошибка на стороне сервера</h2>
          }
          if (projects.length) {
              return projects.map((el)=> {
                  return <Project_item item={el} key={el._id}/>
              })
          }
          return <h2>Проектов пока что нету</h2>
      }
      return Array(3).fill(0).map((_, i) => {
          return <MyLoader key={i}/>
      })

    }
    return (

        <section id="baz">
            <div className="container">
                <h1 className="works__title2">Наши работы</h1>
                <div className="row ">
                    {outProjects()}
                </div>
            </div>
        </section>

    )
}

export default Works