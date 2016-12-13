import React from 'react';
import { Link } from 'react-router';
import { Search } from 'components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends React.Component {



    constructor(props) {
        super(props);

        // IMPLEMENT: CREATE A SEARCH STATUS

        this.state = {
            search: false
        };

        this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleSearch() {
        this.setState({
            search: !this.state.search
        });
    }

    render() {


        const loginButton = (
            <li>
                <Link to="/login">
                    Login
                </Link>
                <Link to="/register">
                    Join Us
                </Link>
            </li>
        );

        const logoutButton = (
            <li>
                <a onClick={this.props.onLogout}><i className="material-icons">exit_to_app</i></a>
            </li>
        );

        const search = (
            <li><a onClick={this.toggleSearch}><i className="material-icons">search</i></a></li>

        );

        const projectButton = (
            <li><Link to="/projects"><i className="material-icons">content_copy</i></Link></li>
        );

        return (
            <div>
                <nav>
                    <div className="nav-wrapper blue darken-1 nav-style">

                        <ul className="hide-on-med-and-down">
                            <li><Link to="/"><i className="material-icons" >home</i></Link></li>
                                { this.props.isLoggedIn ? projectButton : ""}
                        </ul>
                        <div className="col s12">
                            <ul className="right hide-on-med-and-down">
                                { this.props.isLoggedIn ? logoutButton : loginButton }
                            </ul>
                        </div>
                    </div>
                </nav>
                    <ReactCSSTransitionGroup transitionName="search" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                        { /* IMPLEMENT: SHOW SEARCH WHEN SEARCH STATUS IS TRUE */}
                        {this.state.search ? <Search onClose={this.toggleSearch}
                        onSearch={this.props.onSearch}
                        usernames={this.props.usernames}/> : undefined }
                    </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func,
    usernames: React.PropTypes.array
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");},
    usernames: []
};

export default Header;
