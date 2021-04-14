function ListItem(props) {
    return (
        <p className = 'listItem'>
        <span>
            {props.match} - {props.prediction}
        </span>
    </p>  
    );

}
export default ListItem;