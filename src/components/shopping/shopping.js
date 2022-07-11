class ShoopingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shooping List for {this.props.name}</h1>
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
            </div>
        );
    }
}