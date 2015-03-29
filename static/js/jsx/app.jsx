var App = React.createClass({
    componentDidMount: function(){
        console.log('Welcome! You can edit me in /static/js/jsx/app.jsx. If you have any questions, ask https://twitter.com/trey.');
    },

    render: function(){
        return (
            <div>
                <h1>Hello from React and <a href="https://github.com/trey/blank">Trey&rsquo;s Blank Slate</a>.</h1>
            </div>
        );
    }
});

React.render(
    <App />,
    $('header')[0]
);
