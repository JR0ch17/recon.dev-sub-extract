const axios = require('axios');
const isValidDomain = require('is-valid-domain')
const hasFlag = require('has-flag');

let domain = process.argv[2];
const key = process.env.API_RECON_DEV;
let subdomains = [];

validation();

function validation() {
  if (!process.env.API_RECON_DEV) {
    console.error("Missing API Key");
  } else if (!isValidDomain(domain)) {
      console.error("Incorrect domain name syntax");
  } else {
      subdomainRecon();
    }
};

function subdomainRecon() {
  axios.get(`https://recon.dev/api/search?key=${key}&domain=${domain}`)
    .then(function (response) {
      response.data.map(data => {
        data.rawDomains.forEach(subdomain => {
          subdomains.push(subdomain);
        });
      });
      subdomains = [...new Set(subdomains.sort())];
      if (hasFlag('text')) {
        subdomains.forEach(subdomain => {
          console.log(subdomain)
        })
      } else {
        console.dir(subdomains, { 'maxArrayLength': null });
      }
    })
    .catch(function (error) {
      console.error(`Could not fetch subdomains: ${error}`);
    })
    .finally(function () {
    });
  };
