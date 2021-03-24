
module.exports = {
    login (req, res) {

        try {
            return res.render('painel/index', {
                title: 'Painel - SG'
            })
        } catch (error) {
            return res.render('error', {
                title: 'Not found Page 404'
            })
        }
    }
}