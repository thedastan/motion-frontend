


const Item = ({ item, onDragStart, onDragLeave, onDragEnd, onDragOver, onDrop }) => {

    const outDescription = () => {
        if(item.description.length > 50){
            return `${item.description.slice(0, 50)}...`
        }
        return item.description;
    }
	return (
        <div className="col-4 service__item" 
            draggable={true}
            onDragStart={onDragStart}
            onDragLeave={onDragLeave}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
    		<div className="border d-flex flex-column align-items-start justify-content-start">
                <h2 className="text-dark">{item.title}</h2>
                <p className="text-dark">{outDescription()}</p>
            </div>
        </div>
	)
}


export default Item;