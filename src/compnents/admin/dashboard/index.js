import DashboardItem from './dashboardItem';


const data = [
	{
		text: 'Курсы',
		options: [
			{
				text: 'Добавление',
				link: '/admin/add-course'
			},
			{
				text: 'Изменение',
				link: '/admin/courses'
			},
			{
				text: 'Удаление',
				link: '/admin/courses'
			},
		]
	},
	{
		text: 'Проекты',
		options: [
			{
				text: 'Добавление',
				link: '/admin/add-project'
			},
			{
				text: 'Изменение',
				link: '/admin/projects'
			},
			{
				text: 'Удаление',
				link: '/admin/projects'
			},
		]
	},
	{
		text: 'Услуги',
		options: [
			{
				text: 'Добавление',
				link: '/admin/add-service'
			},
			{
				text: 'Изменение',
				link: '/admin/services'
			},
			{
				text: 'Удаление',
				link: '/admin/services'
			},
			{
				text: 'Изменение индексов',
				link: '/admin/change-services-order'
			},
		]
	},
	{
		text: 'Медия',
		options: [
			{
				text: 'Добавление изображение',
				link: '/admin/upload-img'
			},
			{
				text: 'Удаление изображение',
				link: '/admin/delete-img'
			},
			{
				text: 'Проверка изображения',
				link: '/admin/check-img'
			},
		]
	}
]

const Dashboard = () => {

	return (
		<div className="dashboard">
			<div className="dashboard__wrapper">
				<h1>Админка</h1>
				<div className="dashboard__row">
					{data.map((elem, i) => {
						return <DashboardItem item={elem} key={elem.text} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Dashboard;