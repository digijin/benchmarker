module.exports = (suite) => {
    return suite.on('cycle', function(event) {
        console.log(event.currentTarget.name, String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
}