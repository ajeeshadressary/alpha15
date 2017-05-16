const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const slug = require("slug")
const slash = require("slash")
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const callContentful = require('./contentful_wrap');
//const custmod = require('./custmod');
//var graphql = require ('graphql').graphql
//var Schema = require('./schema')
//var query = 'query { todos { id, title } }'


var demoProducts=[
{slug:"ariel_brilliant",productName:"Ariel Brilliant Stain Removal in 1 Wash",productDescription:"Use Ariel to experience brilliant stain removal in 1 WASH. Designed to work in all semi-automatic washing machines, as well as when handwashing, Ariel is perfect for all your washes. It’s been designed to work in semi-automatic washing machines and with handwashing too.",productPrice:"101.00",category:['Normal wash',"Mild wash","Front load wash"]},
{slug:"ariel_matic",productName:"Ariel Matic Front Load",productDescription:"Ariel Matic has been developed to bring you India’s BEST stain removal in 1 WASH for front loading washing machines*. Especially designed to be used in front loading machines, Ariel Matic offers brilliant stain removal for full loads. Not only that, but it provides deep down cleaning and long lasting freshness for any load.",productPrice:"122.00",category:['Top load wash',"Heavy wash"]},
{slug:"ariel_topload",productName:"Ariel Matic Top Load",productDescription:"Especially designed to be used in top loading machines, Ariel Matic offers brilliant stain removal for full loads. Not only that, but it provides deep down cleaning and long lasting freshness for any load.",productPrice:"115.00",category:['Top load wash',"Hand wash","Front load wash"]},
{slug:"ariel_24hrs",productName:"Ariel 24 Hours Fresh",productDescription:"Ariel 24 Hour Fresh is specially designed to help remove tough stains and provide your clothes with long lasting freshness. Perfect in your semi-automatic machine, as well as when handwashing, Ariel 24 Hour Fresh offers a wonderful laundry experience that gives you confidence all day long.",productPrice:"210.00",category:['Hand wash',"Mild wash"]},
]

//using contentful direct
exports.createPages = ({boundActionCreators }) => {
  const { upsertPage } = boundActionCreators
  const productListTemplate = path.resolve(`src/templates/product-list.js`)
  const productDetailTemplate = path.resolve(`src/templates/products/product-details.js`)
  const articleListTemplate = path.resolve(`src/templates/article-list.js`)
  const articleDetailTemplate = path.resolve(`src/templates/articles/article-detail.js`)

  return new Promise((resolve, reject) => {
callContentful.client.getEntries({
  content_type: '2PqfXUJwE8qSYKuM0U6w8M',
})
    .then((result) => {
      //console.log(JSON.stringify(result.includes.Asset));
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
        /*upsertPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: slug('article-list'),
          component: slash(articleListTemplate),
          context: {
            push_data: result.items,
          },
        })*/
      // Create image post pages.
      // We want to create a detailed page for each
      // Instagram post. Since the scrapped Instagram data
      // already includes an ID field, we just use that for
      // each page's path.
    _.each(demoProducts, edge => {
       //console.log(edge.fields.slug);
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "upsertPage"
        // to interact with Gatsby.
        upsertPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: slug(edge.slug),
          component: slash(productDetailTemplate),
          context: {
            push_data: edge,
            //push_image:result.includes.Asset[0]
          },
        })
      })
      resolve()
    })
  })
}

//using graphql
//graphql(Schema, query).then( function(results) {
  //console.log(JSON.stringify(results));
//});

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programatically
// create pages.
/*exports.createPages = ({boundActionCreators }) => {
  const { upsertPage } = boundActionCreators

  return new Promise((resolve, reject) => {
graphql(Schema, query)
    .then((result) => {
      console.log(JSON.stringify(result))
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      // Create image post pages.
      const postTemplate = path.resolve(`src/templates/article-list.js`)
      // We want to create a detailed page for each
      // Instagram post. Since the scrapped Instagram data
      // already includes an ID field, we just use that for
      // each page's path.
     _.each(result.data.todos, edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "upsertPage"
        // to interact with Gatsby.
        upsertPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: slug(edge.id),
          component: slash(postTemplate),
          context: {
            id: edge,
          },
        })
      })
      resolve()
    })
  })
}*/

//using custom build module with json-query NPM pacakage
/*exports.createPages = ({boundActionCreators }) => {
  const { upsertPage } = boundActionCreators
  const postTemplate = path.resolve('./src/templates/article-list.js');

  const filepath = './data/posts.json';
  const queryStatement = '[*id=394910241079418429_31593318]';

  custmod.qry(filepath, queryStatement)
    .then(function (data) {
      var res = data;
      //for (var i in res) {
      upsertPage({
        // Each page is required to have a `path` as well
        // as a template component. The `context` is
        // optional but is often necessary so the template
        // can query data specific to each page.
        path: slug(res[0].id),
        component: slash(postTemplate),
        context: {
          id: res[0],
        },
      })
      //}
    },
    function (err) {
      console.log("Error occured:", err);
    })


  /*return new Promise((resolve, reject) => {
    // Get content from file
    var jsonContent = {};
    var res;
    fs.readFile('./data/posts.json', function (err, contents) {
      if (err) {
        reject(err);
        //return console.error(err);
      }
      // Define to JSON type
      jsonContent = JSON.parse(contents);
      res = jsonQuery('[*username=kyle__mathews].id', {
        data: jsonContent
      }).value

      for (var i in res) {
        upsertPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: slug(res[i]),
          component: slash(postTemplate),
          context: {
            id: res[i],
          },
        })
      }
      resolve();

    });

  })
}*/

//Overriding webpackConfig for SCSS compilation on 5/3/2017 by ajeesh@mindtree
exports.modifyWebpackConfig = function (args) {
  var { config, stage } = args;
  switch (stage) {
    case "develop":
      config.loader("sass", {
        test: /\.(sass|scss)$/,
        exclude: /\.module\.(sass|scss)$/,
        loaders: ["style", "css", "postcss", "sass"],
      })

      break

    case "build-css":
      config.loader("sass", {
        test: /\.(sass|scss)$/,
        exclude: /\.module\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(["css?minimize", "postcss", "sass"]),
      })

      break

    case "build-html":
      config.loader("sass", {
        test: /\.(sass|scss)$/,
        exclude: /\.module\.(sass|scss)$/,
        loader: "null",
      })

      break

    case "build-javascript":
      config.loader("sass", {
        test: /\.(sass|scss)$/,
        exclude: /\.module\.(sass|scss)$/,
        loader: "null",
      })

      break
  }

  return config
}



