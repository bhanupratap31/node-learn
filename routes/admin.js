const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    // console.log('Fist middleware');
    res.send('<form action= "/product" method ="POST"><input type= "text" name= "title"><button type ="submit">Add Product</button></input></form>');
});

router.post('/product', (req, res, next) => { //triggers only for POST request
    console.log(req.body); //will be parsed by the body parser
    res.redirect('/'); //to redirect to /
})

module.exports = router;