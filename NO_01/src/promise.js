function loadImg(src) {
    let promise = new Promise(function (resolve,reject) {
        let img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
           reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}

let src = 'https://img2.mukewang.com/5a9fc8070001a82402060220-100-100.jpg'

let result = loadImg(src)

result.then(function (img) {
    //part1
    alert(`width:${img.width}`)
}).then(function (img) {
    //part2
    alert(`height: ${img.height}`)
}).catch(function (ex) {
    //part3
    alert(ex)
})
