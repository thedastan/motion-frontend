import React from 'react';
import axiosAPI from "../../axiosAPI";
import ServiceItem from "./serviceItem";


const Service1 = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [services, setServices] = React.useState([]);
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = React.useCallback(async () => {
        try{
            const res = await axiosAPI.post('/api/services/get-services');
            setServices(res.data.services)
        }catch (e) {
            setHasError(true);
        }finally {
            setIsLoaded(true);
        }
    }, [])

    const outServices = () => {
        if(isLoaded){
            if(hasError){
                return <h2>Произошло ошибка на стороне сервера</h2>
            }
            if(services.length){
                return services.map((elem, i) => {
                    return <ServiceItem item={elem} />
                })
            }
        }else {
            return <h2>LOADING ...</h2>
        }
    }
    return (
        <section id="service1">
            <div className="container">
                <h1 className="works__title">Наши услуги</h1>
                <div className="row">
                    {outServices()}
                </div>
            </div>

        </section>
    )

}
export default Service1