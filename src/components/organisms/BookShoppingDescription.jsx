export default function BookShoppingDescription(props) {
    return (
        <div className="book-description-container">
            <h2>Descripción</h2>
            <p className="book-description">
                {props.description}
            </p>
        </div>
    );
}
