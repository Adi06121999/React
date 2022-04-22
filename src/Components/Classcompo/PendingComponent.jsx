const PendingComponent = (props) => {
    return (
        <>
            <h1>Pending Task</h1>
            {props.prop1.map((item) => {
                return(
                <h3>{item.title}</h3>
                )
            })}
        </>
    )
}
export default PendingComponent


