import './index.css'

import {BiChevronRightSquare} from 'react-icons/bi'

import {Link} from 'react-router-dom'

const SuggestionItem = props => {
  const {
    suggestionDetails,
    //  covidData
  } = props

  const {name, stateCode} = suggestionDetails

  return (
    <Link to={`/state/${stateCode}`} className="link-item">
      <li className="suggestion-item-container">
        <button type="button" className="suggestion-item-btn">
          <p className="state-name-text">{name}</p>
          <div className="state-code-container">
            <p className="state-code-text">{stateCode}</p>
            <BiChevronRightSquare className="state-code-btn-icon" />
          </div>
        </button>
      </li>
    </Link>
  )
}

export default SuggestionItem
