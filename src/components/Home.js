import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <div className="home_header">
                    <h3>Hello!</h3>
                </div>
                <div className="home_details">
                    <p>Usage:</p>
                    <p>Click Add Survey to fill survey</p>
                    <p>Click Surveys Results to view submitted surveys result</p>
                    <p>Click List Surveys to view surveys in details</p>

                </div>
            </div>

        );
    }
}

export default Home;