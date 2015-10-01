HomeLayout = React.createClass({
    displayName: 'HomeLayout',
    render() {
        return (
            <div>
                <Header />
                <main>
                  {this.props.content}
                </main>
                <footer className="site-footer">

                </footer>
            </div>
        );
    }
});