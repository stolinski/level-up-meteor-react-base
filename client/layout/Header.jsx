Header = React.createClass({
    displayName: 'Header',
    render() {
        return (
            <header className="main-header">
                <h1>React Meteor Base</h1>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <a href="#">Not</a>
                        </li>
                        <li>
                            <a href="#">Actually</a>
                        </li>
                        <li>
                            <a href="#">Linking</a>
                        </li>
                        <li>
                            <a href="#">Anywhere</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
});