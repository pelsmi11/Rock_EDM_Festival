const { series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat')

//Funcion de copilar SASS

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    img: './build/img',
    js: 'src/js/**/*.js'
}

function css(){
    
    return src(paths.scss)
    .pipe( sass())
    .pipe( dest('./build/css'));
}
function minificarcss(){
    
    return src(paths.scss)
    .pipe( sass( {
        outputStyle: 'compressed'
    }))
    .pipe( dest('./build/css'));
}

function javascript(){
    return src(paths.js)
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'));
}

function imagenes(){
    return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest(paths.img))
    //.pipe(notify({message: 'Imagen Minificada'}))
    ;
}

function versionWebp(){
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest(paths.img));
}

function watchArchivos(){
    watch(paths.scss, css);// *  = La carpeta actual ---- **= Todoso los archivos con esa extension
    watch(paths.js, javascript);
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.javascript = javascript;

exports.default = series( css, javascript, imagenes, versionWebp, watchArchivos);