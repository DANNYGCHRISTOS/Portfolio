const getweather = (req, res) => {
    req.app
      .get('db')
      .get_weather()
      .then(response => res.status(200).send(response))
      .catch(err => res.status(500).send(err));
  };
  
  module.exports = {
    getweather
  };