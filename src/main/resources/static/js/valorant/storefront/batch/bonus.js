// var laydate;
// layui.define(function(){
//     laydate = layui.laydate;
// });

$(function () {
   // loadAllSelect();
   //  laydate.render({
   //      elem: '#date',
   //      value: new Date()
   //  });
});

// function loadAllSelect() {
//     loadSelect(app.util.api.getAPIUrl('valorant.account.select'), $('#userId'), "username", "userId", false, null, true);
// }

table.render({
    elem: '#data-table'
    ,id: 'dataTable'
    // ,height: 500
    ,toolbar: '#toolbar'
    ,cols: [[ //表头
        {field: 'userId', title: '账号ID', sort: false, align: 'center', width: '10%', style: 'height:150px;',
            templet: '<div>{{=d.userId}}</div>'}
        ,{field: 'username', title: '账号名称', sort: false, align: 'center', width: '10%', style: 'height:150px;',
            templet: '<div>{{=d.username}}</div>'}
        ,{field: 'date', title: '日期', sort: false, align: 'center', width: '10%', style: 'height:150px;',
            templet: '<div>{{=d.date}}</div>'}
        ,{field: 'displayName', title: '皮肤名称', sort: false, align: 'center', width: '10%', style: 'height:150px;',
            templet: '<div>{{=d.displayName}}</div>'}
        ,{field: 'cost', title: '价格', sort: false, align: 'center', width: '5%', style: 'height:150px;',
            templet: '<div><del>{{=d.cost}} VP</del><br/>-{{=d.discountPercent}}%<br/>{{=d.discountCost}} VP</div>'}

    ]]
    ,totalRow: false

    ,url: app.util.api.getAPIUrl('valorant.storefront.batchQueryBonus')
    ,method: 'GET'
    // ,contentType: 'application/json'
    ,headers: {}
    ,where: {
        displayName: $('#displayName').val(),
    }
    ,page: false //分页
    ,before: function(req) {
        let authToken = app.util.token.auth.get();
        if(app.util.string.isNotEmpty(authToken)) {
            req.headers["Authorization"] = "Bearer " + authToken;
        }
    }
    ,request: {
        // pageName: 'page' //页码的参数名称，默认：page
        // ,limitName: 'limit' //每页数据量的参数名，默认：limit
    }
    ,response: {
        statusName: 'code' //规定数据状态的字段名称，默认：code
        ,statusCode: 200 //规定成功的状态码，默认：0
        ,msgName: 'msg' //规定状态信息的字段名称，默认：msg
        ,countName: 'count' //规定数据总数的字段名称，默认：count
        ,dataName: 'data' //规定数据列表的字段名称，默认：data
    }
    ,parseData(res) { //将返回的任意数据格式解析成 table 组件规定的数据格式
        //console.log(res);
        return {
            "code": res.code,
            "msg": res.msg,
            "count": res.total,
            "data": res.data
        };
    }
});

// 刷新表格，不包含任何条件，恢复到初始状态
function refreshTable() {
    table.reloadData('dataTable', {
        where: {} // 清空搜索条件内容
    });
}

// 按钮的点击事件，关键数据：data-type="reload/clear"
var active = {
    reload: function(){
        table.reloadData('dataTable', {
            // page: {
            //     curr: 1 //重新从第 1 页开始
            // },
            where: { //设定异步数据接口的额外参数
                displayName: $("#displayName").val(),
            }
        });
    },
};

// 监听按钮的点击事件
$('#table-div .layui-btn').on('click', function(){
    let type = $(this).data('type');
    active[type] ? active[type].call(this) : '';
});

// 顶部工具栏事件
table.on('toolbar(dataTable)', function(obj){
    switch(obj.event){
        case 'batchUpdateBonus' :
            batchUpdateBonus();
            break;
    };
});

function batchUpdateBonus() {
    app.util.ajax.post(app.util.api.getAPIUrl('valorant.storefront.batchUpdateBonus'),
        null,
        function (res) {
            // console.log(res);
            if(res.code === app.RESPONSE_CODE.SUCCESS) {
                parent.layer.msg('更新数据成功。', {time: 2000});
            } else {
                parent.layer.msg('更新数据失败！', {time: 2000});
            }
        },
        function (res) {
            parent.layer.msg('请求失败！', {time: 2000});
        },
        function () {
            this.layerIndex = layer.load(2, { shade: [0.2, '#ccc'] });
        },
        function () {
            layer.close(this.layerIndex);
        }
    );
}

// function layerOpenVideo(videoUrl) {
//     layer.open({
//         title: '皮肤预览',
//         type: 1,
//         content: '<video src="' + videoUrl + '" controls style="height:auto; width:auto; max-height:100%; max-width:100%;" preload="metadata">',
//         area: ['900px', '560px'],
//         shadeClose: true
//     });
// }
//
// function layerOpenImg(imgUrl) {
//     layer.open({
//         title: '皮肤预览',
//         type: 1,
//         content: '<img src="' + imgUrl + '" controls style="height:auto; width:auto; max-height:100%; max-width:100%;">',
//         area: ['900px', '560px'],
//         shadeClose: true
//     });
// }
