var contentful = require('contentful');
var spaceId='t85dib4uujju';
var token='9f5f9d7134d389cba552c334473c4ea008ef256f2877dd7337acb6697d484feb';

exports.client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms 
  space: spaceId,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app 
  accessToken: token
})
