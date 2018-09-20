import React from 'react';

class RefExample extends React.Component {
    constructor(props) {
        super(props);
        this.searchBox = React.createRef();
    }

    componentDidMount() {
        this.searchBox.current.focus();
    }

    render() {
        return (
            <div>
                <input type='text' name='searchBox' placeholder='Enter some text...' ref={this.searchBox}/>
            </div>
        );
    }
}

export default RefExample;