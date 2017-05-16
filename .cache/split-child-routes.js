
    import React from 'react'

    // prefer default export if available
    const preferDefault = m => m && m.default || m
    const rootRoute = { childRoutes: [
      {
        path:'/',
        component: preferDefault(require('D:/alpha15/src/layouts/default')),
        indexRoute: 
      { 
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            const Component = preferDefault(require('D:/alpha15/src/pages/index.js'))
            require.ensure([], (require) => {
              const data = require('./json/index.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---index')
          }, 'page-component---')
        }
      },
    
        childRoutes: [
      
      { path:'ariel_brilliant',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            const Component = preferDefault(require('D:/alpha15/src/templates/products/product-details.js'))
            require.ensure([], (require) => {
              const data = require('./json/ariel-brilliant.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---ariel-brilliant')
          }, 'page-component---')
        }
      },
    
      { path:'ariel_matic',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            const Component = preferDefault(require('D:/alpha15/src/templates/products/product-details.js'))
            require.ensure([], (require) => {
              const data = require('./json/ariel-matic.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---ariel-matic')
          }, 'page-component---')
        }
      },
    
      { path:'ariel_topload',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            const Component = preferDefault(require('D:/alpha15/src/templates/products/product-details.js'))
            require.ensure([], (require) => {
              const data = require('./json/ariel-topload.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---ariel-topload')
          }, 'page-component---')
        }
      },
    
      { path:'ariel_24hrs',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            const Component = preferDefault(require('D:/alpha15/src/templates/products/product-details.js'))
            require.ensure([], (require) => {
              const data = require('./json/ariel-24-hrs.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---ariel-24-hrs')
          }, 'page-component---')
        }
      },
    
      { path:'/about-us/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            const Component = preferDefault(require('D:/alpha15/src/pages/about-us.js'))
            require.ensure([], (require) => {
              const data = require('./json/about-us.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---about-us')
          }, 'page-component---')
        }
      },
    
      { path:'/contact-us/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            const Component = preferDefault(require('D:/alpha15/src/pages/contact-us.js'))
            require.ensure([], (require) => {
              const data = require('./json/contact-us.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---contact-us')
          }, 'page-component---')
        }
      },
    
      { path:'/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            const Component = preferDefault(require('D:/alpha15/src/pages/index.js'))
            require.ensure([], (require) => {
              const data = require('./json/index.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---index')
          }, 'page-component---')
        }
      },
    ]},]}
    module.exports = rootRoute