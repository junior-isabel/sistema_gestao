
module.exports = {
  /* GET home page. */
  index(req, res) {

    return res.render('users/index', {
      title: 'login'
    })
  },
  create (req, res) {

    return res.render('users/account', {
      title: 'create account'
    })
  }
}