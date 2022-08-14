const axios = require('axios');
const md5 = require('md5');
const mailChimpAPI = process.env.MAILCHIMP_API_KEY;
const mailChimpListID = process.env.MAILCHIMP_LIST_ID;

exports.handler = (event, context, callback) => {
  let body = {}
  console.log("EVENT")
  console.log(event)
  console.log("CONTEXT")
  console.log(context)
  console.log("CALLBACK")
  console.log(callback)
  body = JSON.parse(event.body)

  if (!body.email) {
    console.log('missing email')
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: 'missing email'
      })
    })
  }

  if (!mailChimpAPI) {
    console.log('missing mailChimpAPI key')
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: 'missing mailChimpAPI key'
      })
    })
  }

  if (!mailChimpListID) {
    console.log('missing mailChimpListID key')
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: 'missing mailChimpListID key'
      })
    })
  }

  const data = {
    email_address: body.email,
    merge_fields: {
      FNAME: body.fName,
      ZIP: body.zip,
    },
    status: "pending",
  };

  const subscriber = JSON.stringify(data);
  console.log("Sending data to mailchimp", subscriber);

  // Subscribe an email

  axios(
    {
      method: 'put',
      url: `https://${mailChimpAPI.split("-")[1]}.api.mailchimp.com/3.0/lists/${mailChimpListID}/members/${md5(data.email_address)}`, //change region (${mailChimpAPI.split[1]}) based on last values of ListId.
      data: subscriber,
      auth: {
        username: 'apikey', // any value will work 
        password: mailChimpAPI
      }
    }
  ).then(response =>{
    console.log(`status:${response.status}` )
    console.log(`data:${response.data}` )
    console.log(`headers:${response.headers}` )

    console.log(`EMAIL ${body.email} SUCCESSFULLY SUBSCRIBED`)

    // if (response.headers['content-type'] === 'application/x-www-form-urlencoded') {
    //   // Do redirect for non JS enabled browsers
    //   return callback(null, {
    //     statusCode: 302,
    //     headers: {
    //       Location: '/thanks.html',
    //       'Cache-Control': 'no-cache',
    //     },
    //     body: JSON.stringify({})
    //   });
    // }

    // Return data to AJAX request
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ emailAdded: true })
    })
  }).catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
    return callback(error, {
      statusCode: 400,
      body: JSON.stringify({data:"An unspecified error has occured."}),
    })
  });
};
