import { Component } from 'react';

/**
 * This component renders a post input form.
 * Props
 *      title           String      The title of the input field
 *      placeholder     String      The placeholder of the input
 *      errorclassName
 *      errorMessage
 */
export default class PostInput extends Component {
    propTypes: {
        title: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string.isRequired
    }
    render () {
        const errorClassName = "form-group " + this.props.errorClassName;
        const inputClass = "form-control "+this.props.title.toLowerCase();
        return (
            <div className={errorClassName}>
                <label className="control-label" htmlFor={this.props.title.toLowerCase()}>{this.props.title}</label>

                <div className="controls">
                    <input
                        name={this.props.title.toLowerCase()}
                        id={this.props.title.toLowerCase()}
                        type="text"
                        placeholder={this.props.placeholder}
                        defaultValue={this.props.value}
                        className={inputClass}
                        />
                    <span className="help-block">{this.props.errorMessage}</span>
                </div>
            </div>
        );
    }
}