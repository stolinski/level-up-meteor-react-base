HomeLayout = React.createClass({
    displayName: 'HomeLayout',
    render() {
        return (
            <div>

                <main>
                  {this.props.content}
                </main>
                <footer className="site-footer">

                </footer>
            </div>
        );
    }
});