module.exports = function () {

    var gulpConfig = {
        srcCSS: './public_html/src/assets/css/*.css',
        srcLESS: './public_html/src/assets/less/*.less',
        htmlFiles: './public_html/app/*.html, ./public_html/src/*.html',
        appCSSBundled: 'bundled.css',
        appCSSDirectory: './public_html/app/assets/css/bundled',
        webFiles: ['./public_html/src/assets/css/*.css', './public_html/src/assets/less/*.less', './public_html/src/*.html', 
                        './public_html/app/assets/css/*.css','./public_html/app/*.html']
    };

    return gulpConfig;
};