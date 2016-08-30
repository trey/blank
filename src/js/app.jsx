var App = React.createClass({
    componentDidMount() {
        console.info('Welcome! You can edit me in /src/js/jsx/app.jsx. If you have any questions, ask https://twitter.com/trey.');
    },

    render() {
        return (
            <div>
                <h1>Hello from React and <a href="https://github.com/trey/blank">Trey&rsquo;s Blank Slate</a>.</h1>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.querySelector('header')
);
