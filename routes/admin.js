const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    // console.log('Fist middleware');
    res.send('<form action= "/admin/add-product" method ="POST"><input type= "text" name= "title"><button type ="submit">Add Product</button></input></form>');
});

// /admin/add-product => POST
router.post('/product', (req, res, next) => { //triggers only for POST request
    console.log(req.body); //will be parsed by the body parser
    res.redirect('/'); //to redirect to / route
})

module.exports = router;