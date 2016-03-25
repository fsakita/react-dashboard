import React, { Component, PropTypes } from 'react';
import { analytics } from '../../config';

// https://analytics.google.com/
const trackingCode =
  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
  `ga('create','${analytics.google.trackingId}','auto');`;

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string.isRequired,
    entry: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <style id="css" dangerouslySetInnerHTML={{ __html: this.props.css }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: this.props.body }} ></div>
        <script src={this.props.entry}></script>
        <script dangerouslySetInnerHTML={{ __html: trackingCode }} ></script>
        <script src="https://www.google-analytics.com/analytics.js" async defer ></script>
      </body>
      </html>
    );
  }

}

export default Html;
