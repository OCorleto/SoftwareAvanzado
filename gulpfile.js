const gulp = require('gulp');
const zip = require('gulp-zip');
 
gulp.task('Repartidor',function(){
    return gulp.src('src/Repartidor/*')
        .pipe(zip('Repartidor.zip'))
        .pipe(gulp.dest('dist'))
})

gulp.task('Restaurante',function(){
    return gulp.src('src/Restaurante/*')
        .pipe(zip('Restaurante.zip'))
        .pipe(gulp.dest('dist'))
})

gulp.task('ESB',function(){
    return gulp.src('src/ESB/*')
        .pipe(zip('ESB.zip'))
        .pipe(gulp.dest('dist'))
})

gulp.task('Cliente',function(){
    return gulp.src('src/Cliente/*')
        .pipe(zip('Cliente.zip'))
        .pipe(gulp.dest('dist'))
})


gulp.task('default', gulp.series('Repartidor', 'Restaurante', 'ESB', 'Cliente'))