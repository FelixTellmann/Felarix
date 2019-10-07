import React from 'react';
import App from 'next/app';
import fetch from 'isomorphic-unfetch';

import './_app.scss';

class Layout extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    /* let navData = await (await fetch(`https://liquix-react.myshopify.com/pages/navigation`)).json();
     navData = (navData.filter(({ handle }) => handle.includes('nav')))[0];*/
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { ...pageProps /*navData*/ };
  }
  
  render() {
    const { Component, pageProps, navData } = this.props;
    return (
      <div className="DataProvider Settings">
        <page className="fullscreenWrapper">
          <layout>
            <static className="header">Header</static>
            <static className="main">
              <Component {...pageProps} />
            </static>
            <static className="footer">Footer</static>
          </layout>
        </page>
      </div>
    );
  }
}

export default Layout;