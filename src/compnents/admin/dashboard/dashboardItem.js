import { NavLink } from 'react-router-dom';

const DashboardItem = ({ item }) => {

	return (
		<div className="dashboard__item">
			<h4>{item.text}</h4>
			<div className="dashboard__item-options">
				{item.options.map((elem, i) => {
					return <NavLink to={elem.link} key={i} className="option__item">
						{elem.text}
					</NavLink>
				})}
			</div>
		</div>
	)
}

export default DashboardItem;