module.exports = {
  index(req, res) {

    return res.render('painel/index', {
      title: 'Painel - SG'
    })
  }
}