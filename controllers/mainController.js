const mainController = {
    home:  function(req, res) {
        res.render("home");
      },
    register:  function(req, res) {
        res.render("register");
      },
    login:  function(req, res) {
        res.render("login");
      },
};

module.exports = mainController;