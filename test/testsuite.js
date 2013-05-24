require.config({
    baseUrl: "../",
    paths: {
        'jquery': 'components/jquery/jquery',
        'underscore': 'components/underscore-amd/underscore',
        'qunit': 'components/qunit/qunit'
    },
    shim: {
        'qunit': {
            exports: 'QUnit'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
});
var testModules = [
    "test/modules/hello"
];

require(['require', 'underscore', 'qunit'], function (require, _, qunit) {
    qunit.config.autostart = false;
    require(testModules, function () {
        qunit.load();
        qunit.start();
    });
});
