import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'
import {MdMenuOpen} from 'react-icons/md'

import './index.css'

class Header extends Component {
  state = {
    showMobileMenu: false,
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({showMobileMenu: !prevState.showMobileMenu}))
  }

  render() {
    const {showMobileMenu} = this.state

    return (
      <>
        <div className="header">
          <Link to="/" className="logo-link">
            <h1 className="header-logo-title">
              COVID19<span>INDIA</span>
            </h1>
          </Link>

          <ul className="header-link-container">
            <li className="header-link-item">
              <Link to="/" className="nav-link">
                <button className="link-button" type="button">
                  Home
                </button>
              </Link>
            </li>
            <li className="header-link-item">
              <Link to="/about" className="nav-link">
                <button className="link-button" type="button">
                  About
                </button>
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={this.toggleMobileMenu}
            aria-label="close-button"
          >
            <MdMenuOpen size="30" color="#ffff" />
          </button>
        </div>
        {showMobileMenu && (
          <ul className="mobile-header-link-container">
            <li className="header-link-item">
              <Link to="/" className="nav-link">
                <button className="link-button" type="button">
                  Home
                </button>
              </Link>
            </li>
            <li className="header-link-item">
              <Link to="/about" className="nav-link">
                <button className="link-button" type="button">
                  About
                </button>
              </Link>
            </li>
          </ul>
        )}
      </>
    )
  }
}

export default withRouter(Header)
