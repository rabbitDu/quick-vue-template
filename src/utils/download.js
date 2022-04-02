import {saveAs} from 'file-saver'
import JSZip from 'jszip';

const baseURL = process.env.VUE_APP_BASE_API

/**
 * 前端下载
 * 前端拿到文件内容 进行下载
 * @param content 文件内容
 * @param fileName 文件名称
 * @param fileType 文件后缀 example .vue
 */
export function frontDownload(content, fileName, fileType) {
    const blob = new Blob([content], {type: 'text/plain;charset=utf-8'})
    saveAs(blob, fileName + fileType)
}

/**
 * 这是前端下载文件
 *前端拿到文件内容 压缩文件下载
 * @param contentList 多文件 格式为[{label:'xxx',content:'xxxxx'}]
 * @param fileName  压缩文件名称
 */
export function frontDownloadZip(contentList, fileName) {
    if (Array.isArray(contentList)) {
        const zip = new JSZip();   // 实例化zip
        for (let i = 0; i < contentList.length; i++) {
            zip.file(contentList[i].label, contentList[i].content);
        }
        zip.generateAsync({type: "blob"})   // zip下载
            .then(function (content) {
                saveAs(content, fileName + ".zip");  // zip下载后的名字
            });
    }
}

export function blobDownLoad(blob, fileName, fileType) {
    saveAs(blob, fileName + fileType)

}

/**
 *后端下载
 * @param path  文件路径
 * @param name  文件名
 */
export function fileDownload(path, name) {
    let a = document.createElement('a')
    a.href = baseURL + '/project/file/download?name=' + encodeURIComponent(name) + '&path=' + encodeURIComponent(path)
    a.click();
}


