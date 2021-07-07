import StartUp from './startUp';

let port = process.env.PORT || '3000';
console.log(port);

StartUp.app.listen(port, function() {
    console.log(`servidor executando na porta!!!!!! ${port}`);
})