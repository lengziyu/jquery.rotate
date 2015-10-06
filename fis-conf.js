
//开启MD5戳
fis.match('*.{js,scss,css,png}', {
useHash: true
});﻿

//编译
fis.match('*.scss', {
  parser: fis.plugin('sass'),
  rExt: '.css'
});

//压缩
fis.match('*.scss', {
  optimizer: fis.plugin('clean-css')
});
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});


/*-------相对路径插件----*/
// 启用插件
fis.hook('relative');

// 让所有文件，都使用相对路径。
fis.match('**', {
  relative: true
})
/*---相对路径插件  end---*/
