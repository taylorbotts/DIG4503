const Express = require('express');
const App = Express();
const port = 80;

App.use(Express.json());
App.use('/', Express.static('public'));

App.get('/api/:value', (req,res) => {
    
    let result = {"error":"error message"};

    if(req.params.value == 5){
        result = {"secret":"you knew the secret!"};
    }

    res.json(result);
})

App.listen(port, ()=>{
    console.log('server running...');
})