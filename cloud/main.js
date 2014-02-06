
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define('foo', function(request, response) {
    response.success({foo: 'bar'});
});

Parse.Cloud.beforeSave('Foo', function(request, response) {
    var c = request.object.get('content');
    if (c == 'ehehe') {
        response.error('ng');
    } else {
        response.success();
    }
});
