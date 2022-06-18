import { Component } from 'react'

import Header from '../components/Header'
import Hero from '../components/Sections/Products/Hero'
import SmartContract from '../components/Sections/Products/Smart-Contract'

export default class Products extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <SmartContract />
      </>
    )
  }
}
