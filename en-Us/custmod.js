/*Custom module for querying json file
  developed on: 5/4/2017
*/
//dependencys
const fs = require("fs");
const jsonQuery = require('json-query');
const Promise = require("bluebird");

//args(file,qury) type:string
exports.qry = function (file, qury) {
    return new Promise((resolve, reject) => {
        var jsonContent = {};
        var res;
        // Validating the args
        if (typeof file != 'string' || typeof qury != 'string' || file == '' || qury == '') {
            reject("No arguments passed/invalid type");
        }
        // Reading file to get contents
        fs.readFile(file, function (err, contents) {
            if (err) {
                reject(err);
            }
            // Define to JSON type
            jsonContent = JSON.parse(contents);
            // Querying the contents
            try {
                res = jsonQuery(qury, {
                    data: jsonContent
                }).value
            }
            catch (e) {
                reject(e);
            }
            // validating for resultset empty or not
            if (res.length <= 0)
                reject("Result empty")
            else
                resolve(res);
        });
    });

}