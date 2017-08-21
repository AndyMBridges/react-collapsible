import React from 'react';
import PropTypes from 'prop-types';

class Collapsible extends React.Component {

    // Set constructor to store props
    constructor(props){
        super(props)
        this.state = {
            isExpanded: false
        }
    }

    handleToggle(e) {
        e.preventDefault();
        console.log(this.refs.inner.clientHeight);
        this.setState({
            // Set to opposite of current value
            isExpanded: !this.state.isExpanded,
            // Get the ref attribute
            height: this.refs.inner.clientHeight
        })
    }

    render() {
        // Save props to variable
        // Children will render anything inside the Collapsible element
        const {title, children} = this.props;
        const {isExpanded, height} = this.state;
        // If element is expanded then match content height, else set to zero
        const currentHeight = isExpanded ? height : 0;
        return (
            <div className={`panel ${isExpanded ? 'is-expanded' : ''}`} onClick={(e) => this.handleToggle(e)}>
                <div className="panel-heading">
                    <h2>{title}</h2>
                </div>
                <div className="panel-collapse" style={{height: currentHeight+'px'}}>
                    <div className="panel-body" ref="inner">
                        {children}
                    </div>
                </div>
            </div>
        )
    }

}

// Define proptypes
// Object
Collapsible.PropTypes = {
    // Title is a string
    title: PropTypes.string
}


// Export
export default Collapsible;
