
    import React from 'react'

    // prefer default export if available
    const preferDefault = m => m && m.default || m

    /**
     * Warning from React Router, caused by react-hot-loader.
     * The warning can be safely ignored, so filter it from the console.
     * Otherwise you'll see it every time something changes.
     * See https://github.com/gaearon/react-hot-loader/issues/298
     */
    if (module.hot) {
        const isString = require('lodash/isString')

      const orgError = console.error;
      console.error = (...args) => {
      if (args && args.length === 1 && isString(args[0]) && args[0].indexOf('You cannot change <Router routes>;') > -1) {
        // React route changed
      } else {
        // Log the error as normally
        orgError.apply(console, args);
      }
      };
    }

    class ComponentArielBrilliant extends React.Component {
          render () {
            const Component = preferDefault(require('D:/alpha15/src/templates/products/product-details.js'))
            const data = require('./json/ariel-brilliant.json')
            return <Component {...this.props} {...data} />
          }
        }
class ComponentArielMatic extends React.Component {
          render () {
            const Component = preferDefault(require('D:/alpha15/src/templates/products/product-details.js'))
            const data = require('./json/ariel-matic.json')
            return <Component {...this.props} {...data} />
          }
        }
class ComponentArielTopload extends React.Component {
          render () {
            const Component = preferDefault(require('D:/alpha15/src/templates/products/product-details.js'))
            const data = require('./json/ariel-topload.json')
            return <Component {...this.props} {...data} />
          }
        }
class ComponentAriel24Hrs extends React.Component {
          render () {
            const Component = preferDefault(require('D:/alpha15/src/templates/products/product-details.js'))
            const data = require('./json/ariel-24-hrs.json')
            return <Component {...this.props} {...data} />
          }
        }
class ComponentAboutUs extends React.Component {
          render () {
            const Component = preferDefault(require('D:/alpha15/src/pages/about-us.js'))
            const data = require('./json/about-us.json')
            return <Component {...this.props} {...data} />
          }
        }
class ComponentContactUs extends React.Component {
          render () {
            const Component = preferDefault(require('D:/alpha15/src/pages/contact-us.js'))
            const data = require('./json/contact-us.json')
            return <Component {...this.props} {...data} />
          }
        }
class ComponentIndex extends React.Component {
          render () {
            const Component = preferDefault(require('D:/alpha15/src/pages/index.js'))
            const data = require('./json/index.json')
            return <Component {...this.props} {...data} />
          }
        }
    const rootRoute = { childRoutes: [
      {
        path: '/',
        component: preferDefault(require('D:/alpha15/src/layouts/default')),
        indexRoute: 
      {
        
        component: ComponentIndex,
      },
    
        childRoutes: [
      
      {
        path:'ariel_brilliant',
        component: ComponentArielBrilliant,
      },
    
      {
        path:'ariel_matic',
        component: ComponentArielMatic,
      },
    
      {
        path:'ariel_topload',
        component: ComponentArielTopload,
      },
    
      {
        path:'ariel_24hrs',
        component: ComponentAriel24Hrs,
      },
    
      {
        path:'/about-us/',
        component: ComponentAboutUs,
      },
    
      {
        path:'/contact-us/',
        component: ComponentContactUs,
      },
    
      {
        path:'/',
        component: ComponentIndex,
      },
    ]},]}
    module.exports = rootRoute