import * as React from 'react';

const AutoComplete = ({data: suggestions = []}) => {
    const [activeSuggestion, setActiveSuggestion] = React.useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
    const [showSuggestions, setShowSuggestions] = React.useState(false);
    const [userInput, setUserInput] = React.useState('');

    const onChange = e => {
        const userInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setActiveSuggestion(0);
        setFilteredSuggestions(filteredSuggestions);
        setShowSuggestions(true);
        setUserInput(e.currentTarget.value)
    };

    const onKeyDown = e => {
        // const {activeSuggestion, filteredSuggestions} = this.state;

        if (e.keyCode === 13) {
            // this.setState({
            //     activeSuggestion: 0,
            //     showSuggestions: false,
            //     userInput: filteredSuggestions[activeSuggestion]
            // });
        } else if (e.keyCode === 38) {
            // if (activeSuggestion === 0) {
            //     return;
            // }
            // this.setState({activeSuggestion: activeSuggestion - 1});
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            // if (activeSuggestion - 1 === filteredSuggestions.length) {
            //     return;
            // }
            // this.setState({activeSuggestion: activeSuggestion + 1});
        }
    };


    return (
        <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
        />
    )
}
export default AutoComplete;
