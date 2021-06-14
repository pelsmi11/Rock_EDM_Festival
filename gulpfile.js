const { series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');

//Funcion de copilar SASS

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    img: './build/img'
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
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series( css, imagenes, versionWebp, watchArchivos);