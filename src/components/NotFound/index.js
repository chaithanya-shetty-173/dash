import {Link, withRouter} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-route">
    <img
      className="not-found-image"
      alt="not-found-pic"
      src="https://th.bing.com/th/id/OIP.wrhV89ZbVqiO_r5pIi2L6AHaDu?pid=ImgDet&rs=1"
    />
    <h1 className="not-found-heading">PAGE NOT FOUND</h1>
    <p className="not-found-paragraph">
      we are sorry, the page you requested could not be found Please go back to
      the home page
    </p>
    <Link to="/">
      <button type="button" className="button">
        Home
      </button>
    </Link>
  </div>
)

export default withRouter(NotFound)
