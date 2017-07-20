import React from 'react'

export class Menu extends React.Component {
    render() {
        return (<nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/add-survey">Add Survey</a></li>
                <li><a href="/survey-results">Survey Results</a></li>
                <li><a href="/survey-list">Survey List</a></li>
            </ul>

        </nav>);
    }
}

export default Menu;