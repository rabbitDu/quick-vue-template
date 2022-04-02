import XLSX from 'xlsx'
import XLSXStyle from 'xlsx-style'
import XLSX_SAVE from 'file-saver'

//1.创建工作簿(包含 SheetNames:[];Sheets:{})
//2.将数据源转化为二维数组 [[ 第一行],[第二行]]
//3.将数据源转化为sheet 数据格式 XLSX.utils.aoa_to_sheet 格式为（A1：{}）
//4.设置单元格的格式


//默认格式
let defaultCellStyle = {
    font: {
        name: "Arial",
        sz: 10
    },
    // fill: {
    //     patternType: 'solid',
    //     fgColor: {rgb: "FF029749"}
    // },
    border: {
        top: {
            style: 'thin'
        },
        bottom: {
            style: 'thin'
        },
        left: {
            style: 'thin'
        },
        right: {
            style: 'thin'
        },
    }
};

/**
 *
 * @param fileName 导出文件的名字
 * @param dataArray  data
 *  {
 *     sheet1: [[1,2,3,4],[2,3,4,5]]  ,
 *     sheet2:[[1,2,3,4],[2,3,4,5]]
 *  }
 * @param options  options 表格配置  {
 * defaultCellStyle 默认单元格设置
 *  colsWidth  列宽 格式为数组 [100,220,.....]  默认列宽为80
 *  mergeCells  合并单元格  mergeCells: [{row: 0, col: 0,rowspan: 3, colspan: 1}],
 *   cellStyle  cellStyle
 * }

 */
function exportExcel(fileName, dataArray, options) {
    let sheetsList = XLSX.utils.aoa_to_sheet(dataArray);
    formatCell(sheetsList, options);
    let wb = createWorkBook(sheetNames, sheetsList);
    const wbout = XLSXStyle.write(wb, {
        type: 'binary',
        bookType: 'xlsx',
    })
    XLSX_SAVE.saveAs(
        new Blob([s2ab(wbout)], {
            type: 'application/octet-stream',
        }),
        fileName + '.xlsx'
    )
}

//设置单元格样式
function formatCell(data, opt) {
    for (const key in data) {
        if (key.indexOf("!") === 0) {
            continue
        }
        Object.assign(data[key], defaultCellStyle, opt&&opt.defaultCellStyle)
    }


}
//设置列宽
function setColsWidth(sheetsList,colsWidth){
    for (let i = 0; i < sheetsList.length; i++) {

    }

}

//设置合并单元格
function setMergeCells(sheetsList,mergeCells){}

function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

function createWorkBook(sheetNames, sheetsList) {
    const wb = XLSX.utils.book_new();
    wb["SheetNames"] = sheetNames;
    wb["Sheets"] = sheetsList;
    return wb
}


export {
    exportExcel,
}
