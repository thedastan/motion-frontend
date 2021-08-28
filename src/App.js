import React from 'react';
import './App.css';
import Home from './containers/Home/home';
import {Switch, Route} from 'react-router-dom';
import Courses from "./compnents/Courses/Courses";
import axiosAPI from './axiosAPI';
import Dev from "./compnents/Dev/dev";
import AuthService from "./compnents/admin/authService";
import Login from './compnents/admin/login/index';
import Admin from './compnents/admin/dashboard/index';
import CourseOut from './compnents/admin/dashboard/course/outCourse';
import './styles/auth.css';
import './styles/admin.css';
import DeleteModal from './compnents/admin/dashboard/deleteModal';
import ChangeCourse from './compnents/admin/dashboard/course/changeCourse';
import ChangeProject from './compnents/admin/dashboard/project/changeProject';
import ChangeService from './compnents/admin/dashboard/service/changeService';
import AddCourseBlock from './compnents/admin/dashboard/course/addCourse';
import AddProjectBlock from './compnents/admin/dashboard/project/addProject';
import AddServiceBlock from './compnents/admin/dashboard/service/addService';
import ChangeServiceOrder from './compnents/admin/dashboard/service/changeServiceOrder/index';
import ProjectOut from './compnents/admin/dashboard/project/outProject';
import UploadImg from './compnents/admin/dashboard/media/uploadImg';
import DeleteImg from './compnents/admin/dashboard/media/deleteImg';
import CheckImg from './compnents/admin/dashboard/media/checkImg';
import {setAllCategory, setAllCategoryLoaded, setHasError} from './redux/reducers/category';
import ServiceOut from './compnents/admin/dashboard/service/outService';
import {useDispatch, useSelector} from 'react-redux';


function App() {
    const dispatch = useDispatch();
    const {checkIsAdmin} = AuthService();
    React.useEffect(() => {
        checkIsAdmin();
    }, []);
    const state = useSelector(({auth}) => {
        return {
            isAdmin: auth.isAdmin,
            authInfoLoaded: auth.authInfoLoaded
        }
    })

    const outAdminComponent = () => {
        let result;
        if (state.authInfoLoaded) {
            if (state.isAdmin) {
                result = <Admin/>
            } else {
                result = <h1 className="text-dark">YOU HAVE NO RIGHTS TO BE HERE</h1>;
            }
        } else {
            result = <h1 className="text-dark">LOADING ...</h1>
        }
        return <Route path="/admin" exact>
            {result}
        </Route>
    }

    const fetchCategory = React.useCallback(async () => {
        try {
            const {data} = await axiosAPI.post('/api/categories/get-categories');
            dispatch(setAllCategory(data.categories))
        } catch (e) {
            dispatch(setHasError(true));
        } finally {
            dispatch(setAllCategoryLoaded(true));
        }
    }, []);
    React.useEffect(() => {
        fetchCategory();
    }, [fetchCategory]);

    const outRoutes = () => {
        const path = '/admin';
        if (state.authInfoLoaded) {
            if (state.isAdmin) {
                return (
                    <>
                        <DeleteModal/>
                        <Route path={`${path}/add-course`} exact={true}>
                            <AddCourseBlock/>
                        </Route>
                        <Route path={`${path}/courses`} exact>
                            <CourseOut/>
                        </Route>
                        <Route path={`${path}/change-course/:id`} exact>
                            <ChangeCourse/>
                        </Route>
                        <Route path={`${path}/add-project`} exact>
                            <AddProjectBlock/>
                        </Route>
                        <Route path={`${path}/change-project/:id`} exact>
                            <ChangeProject/>
                        </Route>
                        <Route path={`${path}/projects`} exact>
                            <ProjectOut/>
                        </Route>
                        <Route path={`${path}/add-service`} exact>
                            <AddServiceBlock/>
                        </Route>
                        <Route path={`${path}/services`} exact>
                            <ServiceOut/>
                        </Route>
                        <Route path={`${path}/change-service/:id`} exact>
                            <ChangeService/>
                        </Route>
                        <Route path={`${path}/change-services-order`} exact>
                            <ChangeServiceOrder/>
                        </Route>
                        <Route path={`${path}/upload-img`} exact>
                            <UploadImg/>
                        </Route>
                        <Route path={`${path}/delete-img`} exact>
                            <DeleteImg/>
                        </Route>
                        <Route path={`${path}/check-img`} exact>
                            <CheckImg/>
                        </Route>
                    </>
                )
            } else {
                return <h1>NOT ADMIN</h1>;
            }
        } else {
            return <h2>LOADING</h2>;
        }
    }
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/courses" exact component={Courses}/>
                    <Route path="/dev" exact component={Dev}/>
                    <Route path="/login" exact component={Login}/>
                    {outAdminComponent()}
                    {outRoutes()}
                    <Route>
                        <h1 className="text-dark">404 страница не найдена</h1>
                    </Route>
                </Switch>
            </div>
        );
}


export default App;
