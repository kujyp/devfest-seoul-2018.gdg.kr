import React from 'react'
import App, { Container } from 'next/app'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NavProvider } from '../NavProvider'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <NavProvider>
        <Container>
          <Component {...pageProps} />
          <Header />
          <SideNav />
          <Footer />
        </Container>
      </NavProvider>
    )
  }
}

export default MyApp
