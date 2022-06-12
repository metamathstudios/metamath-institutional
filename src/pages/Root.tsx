import { Component } from 'react'
import Header from '../components/Header'
import SectionFirst from '../components/Sections/Page-Root/First'

export default class Root extends Component {
  render() {
    return (
      <>
        <Header />
        <SectionFirst />
      </>
    )
  }
}
