import React, {useState} from 'react'
import Clock from 'react-flip-clock-count-down'
import '../media.css'
import 'react-bootstrap'
import './css/catalog.css'
import CourseItem from "./courseItem";
import axiosAPI from "../../../axiosAPI";
import { useSelector } from 'react-redux';



const Catalog = () => {
    const state = useSelector(state => {
        return {
            allCategory: state.category.allCategory,
            allCategoryLoaded: state.category.allCategoryLoaded,
            hasError: state.category.hasError
        }
    })
    const [nameCat, setNameCat] = useState('all');


    const [courses, setCourses] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasErr, setHasErr] = useState(false)


    React.useEffect(() => {
        fetchCourses();
    }, [nameCat])


    const fetchCourses = React.useCallback(async () => {
        try {
            const data = {}
            if(nameCat !== 'all') data.category = nameCat;
            const res = await axiosAPI.post('/api/courses/get-courses', data);
            setCourses(res.data.courses);
        }catch (e){
            setHasErr(true);
        }   finally {
            setIsLoaded(true);
        }
    }, [nameCat]);

    const outCourses = () => {
        if (isLoaded) {
            if(hasErr){
                return <h2>Произошла какая то ошибка на стороне сервера</h2>
            }
            if(courses.length){
                return courses.map((elem, i) => {
                    return <CourseItem key={elem._id} el={elem} />
                });
            }
            return <h2>Пока что нету курсов</h2>
        } else  {
            return <h1>LOADING ...</h1>
        }
    }
    const outCategories = () => {
        if (state.allCategoryLoaded) {
            if(state.hasError){
                return <h2>Произошла какая то ошибка на стороне сервера</h2>
            }
            if(state.allCategory.length){
                return state.allCategory.map((elem, i) => {
                    return <li categoryid={elem.categoryId} key={elem.categoryId} onClick={changeCategory} >
                        <a className={`kurs ${nameCat === elem.categoryId ? "active" : ""}`}>{elem.title}</a>
                    </li>
                });
            }
            return <h2>Пока что нету курсов</h2>
        } else  {
            return <h1>LOADING ...</h1>
        }
    }

    const changeCategory = (e) => {
      const id = e.target.closest('li').getAttribute('categoryid')
        if (nameCat === id) {
            return false
        }
        if(isLoaded) setNameCat(id)
    }
    return (
        <section id="catalog">
            <div className="container">
                <div className="sale__line2"/>
                <div className="sale__time">
                    <div className="time">
                        <div className="time__title">
                            <h2>Сатуунун аягына чейин</h2>
                            <Clock endTime={48}/>
                        </div>
                        <div className="help">
                            <li><a href="#">тандоого жардам берүү</a></li>
                        </div>
                    </div>
                </div>
                <div className="courses__cards__block">
                    <div className="courses__block">
                        <ul className="courses__block__napr">
                            <h1>КУРСТАР:</h1>
                            {outCategories()}
                            <div className="courses__block__linu"/>
                        </ul>
                    </div>
                    <div className="courses__linu"/>
                    <div className="cards__block">
                        <div className="row ">
                            {outCourses()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog
