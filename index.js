const axios = require('axios');
 
axios.get('https://api.github.com/users/makkaba/events/public')
  .then(function(response){
    console.log(response.data[0].created_at);
  })
  .catch(function(error){
    console.log(error);
  });
