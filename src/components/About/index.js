import React from 'react'

import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import FaqItem from '../FaqItem'

import './index.css'

export default class About extends React.Component {
  state = {
    isLoading: true,
    faqsList: [],
  }

  componentDidMount() {
    this.renderFaqData()
  }

  renderFaqData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-faqs'
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    this.setState({faqsList: data.faq, isLoading: false})
  }

  renderAboutContainer = () => {
    const {faqsList} = this.state

    return (
      <div className="about-route-content">
        <h1 className="about-heading">About</h1>
        <p className="update-paragraph">Last updated on march 28th 2021</p>
        <h1 className="vaccine-ready-heading">
          COVID-19 vaccines be ready for distribution
        </h1>
        <ul
          className="faqs-unordered-list" // testid="faqsUnorderedList"
        >
          {faqsList.map(each => (
            <FaqItem each={each} key={each.qno} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div
      className="loading-container" // testid="aboutRouteLoader"
    >
      <Loader type="TailSpin" color="#0467d4" height={70} width={70} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="about-route">
        <Header />
        {isLoading ? this.renderLoadingView() : this.renderAboutContainer()}
        <Footer />
      </div>
    )
  }
}
