import {FaTwitter} from 'react-icons/fa'
import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {withRouter} from 'react-router-dom'

import './index.css'

const Footer = () => (
  <div className="footer">
    <h1 className="footer-logo-title">
      COVID19<span>INDIA</span>
    </h1>
    <p className="footer-paragraph">
      we stand with everyone fighting on the front lines
    </p>
    <div className="footer-icon-container">
      <VscGithubAlt size="30" className="footer-icon" />
      <FiInstagram size="30" className="footer-icon" />
      <FaTwitter size="30" className="footer-icon" />
    </div>
  </div>
)

export default withRouter(Footer)
