/* eslint-disable */
/// <reference path="node_modules/typescript/lib/lib.esnext.d.ts" />
import * as gulp from 'gulp';
const g = require('gulp-load-plugins')();

gulp.task('remark', function() {
    return gulp.src('README.md')
        .pipe(
            g.remark()
                .use(require('remark-toc'))
                .use(require('remark-license'))
        );
});

gulp.task('remark:fix', function(done) {
    const doclint: any = gulp.task('doclint');
    return doclint().pipe(gulp.dest('.'));
});

// gulp.task('eslint', () => {
//     return gulp.src('src/**/*.ts', { since: g.memoryCache.lastMtime('source') })
//         .pipe(g.memoryCache('source'))
//         .pipe(g.ignore.exclude('*.d.ts'))
//         .pipe(g.if('*.spec.ts', specLint(), sourceLint()))
//         .pipe(g.eslint.format());
// });

// gulp.task('eslint:w', (done) => {
//     const w = gulp.watch('src/**/*.ts', { ignoreInitial: false }, gulp.series('eslint'));
//     w.on('change', g.memoryCache.update('source'));
//     w.on('unlink', file => g.memoryCache.forget('source', file, file => resolve(file)));
//     process.on('SIGINT', () => {
//         w.close();
//         done();
//     });
// });

