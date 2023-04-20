var dropdown;
layui.define(function(){
    dropdown = layui.dropdown;
});

var selectData = [
    {
        title: "步枪"
        , id: "步枪"
        , child: [
            {
                title: '暴徒'
                , id: '暴徒'
                , child: [
                    {
                        title: "RGX 11z Pro 暴徒",
                        id: "RGX 11z Pro 暴徒"
                    }, {
                        title: "光之哨兵 暴徒",
                        id: "光之哨兵 暴徒"
                    }, {
                        title: "惡鬼 暴徒",
                        id: "惡鬼 暴徒"
                    }, {
                        title: "掠奪印象 暴徒",
                        id: "掠奪印象 暴徒"
                    }, {
                        title: "棄王遺思 暴徒",
                        id: "棄王遺思 暴徒"
                    }, {
                        title: "海洋星球 暴徒",
                        id: "海洋星球 暴徒"
                    }, {
                        title: "混沌序幕 暴徒",
                        id: "混沌序幕 暴徒"
                    }, {
                        title: "紫金狂潮 暴徒",
                        id: "紫金狂潮 暴徒"
                    }, {
                        title: "至尊龍燄 暴徒",
                        id: "至尊龍燄 暴徒"
                    }, {
                        title: "蓋亞復仇 暴徒",
                        id: "蓋亞復仇 暴徒"
                    }, {
                        title: "虛無時界 暴徒",
                        id: "虛無時界 暴徒"
                    }, {
                        title: "起源 暴徒",
                        id: "起源 暴徒"
                    }, {
                        title: "離子聖芒 暴徒",
                        id: "離子聖芒 暴徒"
                    }, {
                        title: "電幻普普 暴徒",
                        id: "電幻普普 暴徒"
                    }, {
                        title: "至尊龍燄 暴徒",
                        id: "至尊龍燄 暴徒"
                    }, {
                        title: "異星霸主 暴徒",
                        id: "異星霸主 暴徒"
                    },
                ]
            },
            {
                title: '幻象',
                id: '幻象',
                child: [
                    {
                        title: "781-A協定 幻象",
                        id: "781-A協定 幻象"
                    }, {
                        title: "RGX 11z Pro 幻象",
                        id: "RGX 11z Pro 幻象"
                    }, {
                        title: "偵察行動 幻象",
                        id: "偵察行動 幻象"
                    }, {
                        title: "光炫聲譜 幻象",
                        id: "光炫聲譜 幻象"
                    }, {
                        title: "咻咻X 幻象",
                        id: "咻咻X 幻象"
                    }, {
                        title: "奇點 幻象",
                        id: "奇點 幻象"
                    }, {
                        title: "惡鬼 幻象",
                        id: "惡鬼 幻象"
                    }, {
                        title: "掠奪印象 幻象",
                        id: "掠奪印象 幻象"
                    }, {
                        title: "紫金狂潮//2.0 幻象",
                        id: "紫金狂潮//2.0 幻象"
                    }, {
                        title: "虛無時界 幻象",
                        id: "虛無時界 幻象"
                    }, {
                        title: "輻能危機001 幻象",
                        id: "輻能危機001 幻象"
                    }, {
                        title: "離子聖芒 幻象",
                        id: "離子聖芒 幻象"
                    }, {
                        title: "電幻普普 幻象",
                        id: "電幻普普 幻象"
                    }
                ]
            },
            {
                title: '鬥牛犬'
                ,id: '鬥牛犬'
                ,child: [
                    {
                        title: "781-A協定 鬥牛犬",
                        id: "781-A協定 鬥牛犬"
                    }, {
                        title: "光炫聲譜 鬥牛犬",
                        id: "光炫聲譜 鬥牛犬"
                    }, {
                        title: "太空漫遊 鬥牛犬",
                        id: "太空漫遊 鬥牛犬"
                    }, {
                        title: "惡鬼 鬥牛犬",
                        id: "惡鬼 鬥牛犬"
                    }, {
                        title: "異星霸主 鬥牛犬",
                        id: "異星霸主 鬥牛犬"
                    }, {
                        title: "電幻普普 鬥牛犬",
                        id: "電幻普普 鬥牛犬"
                    },
                ]
            },
            {
                title: "捍衛者"
                ,id: "捍衛者"
                ,child: [
                    {
                        title: "RGX 11z Pro 捍衛者",
                        id: "RGX 11z Pro 捍衛者"
                    }, {
                        title: "偵察行動 捍衛者",
                        id: "偵察行動 捍衛者"
                    }, {
                        title: "光炫聲譜 捍衛者",
                        id: "光炫聲譜 捍衛者"
                    }, {
                        title: "惡鬼 捍衛者",
                        id: "惡鬼 捍衛者"
                    }, {
                        title: "掠奪印象 捍衛者",
                        id: "掠奪印象 捍衛者"
                    }, {
                        title: "殞落詛咒 捍衛者",
                        id: "殞落詛咒 捍衛者"
                    }, {
                        title: "海洋星球 捍衛者",
                        id: "海洋星球 捍衛者"
                    }, {
                        title: "紫金狂潮 捍衛者",
                        id: "紫金狂潮 捍衛者"
                    }, {
                        title: "蓋亞復仇 捍衛者",
                        id: "蓋亞復仇 捍衛者"
                    }, {
                        title: "鎏金帝王 捍衛者",
                        id: "鎏金帝王 捍衛者"
                    }
                ]
            }
        ]
    },
    {
        title: "狙击枪"
        , id: "狙击枪"
        , child: [
            {
                title: "間諜"
                ,id: "間諜"
                ,child: [
                    {
                        title: "RGX 11z Pro 間諜",
                        id: "RGX 11z Pro 間諜"
                    }, {
                        title: "光之哨兵 間諜",
                        id: "光之哨兵 間諜"
                    }, {
                        title: "掠奪印象 間諜",
                        id: "掠奪印象 間諜"
                    }, {
                        title: "棄王遺思 間諜",
                        id: "棄王遺思 間諜"
                    }, {
                        title: "混沌序幕 間諜",
                        id: "混沌序幕 間諜"
                    }, {
                        title: "異星霸主 間諜",
                        id: "異星霸主 間諜"
                    }, {
                        title: "至尊龍燄 間諜",
                        id: "至尊龍燄 間諜"
                    }, {
                        title: "起源 間諜",
                        id: "起源 間諜"
                    }, {
                        title: "離子聖芒 間諜",
                        id: "離子聖芒 間諜"
                    }, {
                        title: "電幻普普 間諜",
                        id: "電幻普普 間諜"
                    },
                ]
            },
            {
                title: "警長"
                ,id: "警長"
                ,child: [
                    {
                        title: "蓋亞復仇 警長",
                        id: "蓋亞復仇 警長"
                    }, {
                        title: "鎏金帝王 警長",
                        id: "鎏金帝王 警長"
                    }
                ]
            }
        ]
    },
    {
        title: "手枪"
        , id: "手枪"
        , child: [
            {
                title: "制式手槍"
                ,id: "制式手槍"
                ,child: [
                    {
                        title: "RGX 11z Pro 制式手槍",
                        id: "RGX 11z Pro 制式手槍"
                    }, {
                        title: "光炫聲譜 制式手槍",
                        id: "光炫聲譜 制式手槍"
                    }, {
                        title: "棄王遺思 制式手槍",
                        id: "棄王遺思 制式手槍"
                    }, {
                        title: "紫金狂潮 制式手槍",
                        id: "紫金狂潮 制式手槍"
                    }, {
                        title: "輻能危機001 制式手槍",
                        id: "輻能危機001 制式手槍"
                    }, {
                        title: "電幻普普 制式手槍",
                        id: "電幻普普 制式手槍"
                    }
                ]
            },
            {
                title: "鬼魅"
                ,id: "鬼魅"
                ,child: [
                    {
                        title: "偵察行動 鬼魅",
                        id: "偵察行動 鬼魅"
                    }, {
                        title: "奇幻龐克 鬼魅",
                        id: "奇幻龐克 鬼魅"
                    }, {
                        title: "掠奪印象 鬼魅",
                        id: "掠奪印象 鬼魅"
                    }, {
                        title: "殞落詛咒 鬼魅",
                        id: "殞落詛咒 鬼魅"
                    }, {
                        title: "蓋亞復仇 鬼魅",
                        id: "蓋亞復仇 鬼魅"
                    }, {
                        title: "鎏金帝王 鬼魅",
                        id: "鎏金帝王 鬼魅"
                    }
                ]
            },
            {
                title: "神射"
                ,id: "神射"
                ,child: [
                    {
                        title: "781-A協定 神射",
                        id: "781-A協定 神射"
                    }, {
                        title: "光之哨兵 神射",
                        id: "光之哨兵 神射"
                    }, {
                        title: "奇幻龐克 神射",
                        id: "奇幻龐克 神射"
                    }, {
                        title: "奇點 神射",
                        id: "奇點 神射"
                    }, {
                        title: "掠奪印象 神射",
                        id: "掠奪印象 神射"
                    }, {
                        title: "虛無時界 神射",
                        id: "虛無時界 神射"
                    }, {
                        title: "離子聖芒 神射",
                        id: "離子聖芒 神射"
                    }
                ]
            }
        ]
    },
    {
        title: "刀"
        , id: "刀"
        , child: [
            {
                title: "RGX 11z Pro 直刀",
                id: "RGX 11z Pro 直刀"
            }, {
                title: "RGX 11z Pro 螢光刃（显卡蝴蝶）",
                id: "RGX 11z Pro 螢光刃"
            }, {
                title: "個人近戰單位",
                id: "個人近戰單位"
            }, {
                title: "偵察行動 蝴蝶刀",
                id: "偵察行動 蝴蝶刀"
            }, {
                title: "夜戮的時尚蝴蝶梳",
                id: "夜戮的時尚蝴蝶梳"
            }, {
                title: "哨兵聖武",
                id: "哨兵聖武"
            }, {
                title: "天月耀春 摺扇",
                id: "天月耀春 摺扇"
            }, {
                title: "太極扇",
                id: "太極扇"
            }, {
                title: "奇點 小刀",
                id: "奇點 小刀"
            }, {
                title: "掠奪印象 爪刀",
                id: "掠奪印象 爪刀"
            }, {
                title: "殞落王者斷刃",
                id: "殞落王者斷刃"
            }, {
                title: "特戰英豪 GO！第1集 小刀",
                id: "特戰英豪 GO！第1集 小刀"
            }, {
                title: "紫金狂潮//2.0 爪刀",
                id: "紫金狂潮//2.0 爪刀"
            }, {
                title: "至尊龍燄 匕首",
                id: "至尊龍燄 匕首"
            }, {
                title: "蓋亞之怒",
                id: "蓋亞之怒"
            }, {
                title: "輻能危機001 球棒",
                id: "輻能危機001 球棒"
            }, {
                title: "鎏金帝王 長劍",
                id: "鎏金帝王 長劍"
            }, {
                title: "離子聖芒 爪刀",
                id: "離子聖芒 爪刀"
            }, {
                title: "離子聖芒 能量劍",
                id: "離子聖芒 能量劍"
            }, {
                title: "電幻普普 戰斧",
                id: "電幻普普 戰斧"
            }, {
                title: "鬼丸國綱",
                id: "鬼丸國綱"
            }, {
                title: "黑市 蝴蝶刀",
                id: "黑市 蝴蝶刀"
            }
        ]
    },
    {
        title: "皮肤系列关键词"
        , id: "皮肤系列关键词"
        , child: [
            {
                title: "781-A協定",
                id: "781-A協定"
            }, {
                title: "RGX 11z Pro",
                id: "RGX 11z Pro"
            }, {
                title: "偵察行動",
                id: "偵察行動"
            }, {
                title: "光之哨兵",
                id: "光之哨兵"
            }, {
                title: "光炫聲譜",
                id: "光炫聲譜"
            }, {
                title: "凌空之志",
                id: "凌空之志"
            }, {
                title: "咻咻X",
                id: "咻咻X"
            }, {
                title: "天月耀春",
                id: "天月耀春"
            }, {
                title: "太空漫遊",
                id: "太空漫遊"
            }, {
                title: "奇幻龐克",
                id: "奇幻龐克"
            }, {
                title: "奇點",
                id: "奇點"
            }, {
                title: "惡鬼",
                id: "惡鬼"
            }, {
                title: "掠奪印象",
                id: "掠奪印象"
            }, {
                title: "棄王遺思",
                id: "棄王遺思"
            }, {
                title: "殞落詛咒",
                id: "殞落詛咒"
            }, {
                title: "海洋星球",
                id: "海洋星球"
            }, {
                title: "深度凍結",
                id: "深度凍結"
            }, {
                title: "混沌序幕",
                id: "混沌序幕"
            }, {
                title: "紫金狂潮",
                id: "紫金狂潮"
            }, {
                title: "至尊龍燄",
                id: "至尊龍燄"
            }, {
                title: "蓋亞復仇",
                id: "蓋亞復仇"
            }, {
                title: "虛無時界",
                id: "虛無時界"
            }, {
                title: "起源",
                id: "起源"
            }, {
                title: "輻能危機001",
                id: "輻能危機001"
            }, {
                title: "鎏金帝王",
                id: "鎏金帝王"
            }, {
                title: "離子聖芒",
                id: "離子聖芒"
            }, {
                title: "電幻普普",
                id: "電幻普普"
            }, {
                title: "黑市",
                id: "黑市"
            }
        ]
    },
];

$(function () {
   // loadAllSelect();

    dropdown.render({
        elem: '#skin1' // 绑定的元素，可以是任意元素
        ,data: selectData
        ,id: 'skin1'
        //菜单被点击的事件
        ,click: function(obj, othis){
            $(this.elem).val(obj.id);
        }
    });
    dropdown.render({
        elem: '#skin2'
        ,data: selectData
        ,id: 'skin2'
        ,click: function(obj, othis){
            $(this.elem).val(obj.id);
        }
    });
    dropdown.render({
        elem: '#skin3'
        ,data: selectData
        ,id: 'skin3'
        ,click: function(obj, othis){
            $(this.elem).val(obj.id);
        }
    });
    dropdown.render({
        elem: '#skin4'
        ,data: selectData
        ,id: 'skin4'
        ,click: function(obj, othis){
            $(this.elem).val(obj.id);
        }
    });
    dropdown.render({
        elem: '#bonusSkin1'
        ,data: selectData
        ,id: 'bonusSkin1'
        ,click: function(obj, othis){
            $(this.elem).val(obj.id);
        }
    });
    dropdown.render({
        elem: '#bonusSkin2'
        ,data: selectData
        ,id: 'bonusSkin2'
        ,click: function(obj, othis){
            $(this.elem).val(obj.id);
        }
    });
    dropdown.render({
        elem: '#bonusSkin3'
        ,data: selectData
        ,id: 'bonusSkin3'
        ,click: function(obj, othis){
            $(this.elem).val(obj.id);
        }
    });
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
        {field: 'userId', title: '用户ID', sort: false, align: 'center', width: '10%', style: 'height:80px;',
            templet: '<div>{{=d.userId}}</div>'}
        ,{field: 'username', title: '用户名', sort: false, align: 'center', width: '8%', style: 'height:80px;',
            templet: '<div>{{=d.username}}</div>'}
        // ,{field: 'date', title: '日期', sort: false, align: 'center', width: '10%', style: 'height:80px;',
        //     templet: '<div>{{=d.date}}</div>'}
        ,{field: 'displayName', title: '每日商店', sort: false, align: 'center', width: '35%', style: 'height:80px;',
            templet: function (d) {
                let res = '';
                for(let i = 0; i < d.displayNameList.length; ++i) {
                    res += d.displayNameList[i] + "， " //+ d.costList[i] + "VP" + "， ";
                }
                return res;
            }}
        ,{field: 'cost', title: '夜市', sort: false, align: 'center', width: '45%', style: 'height:80px;',
            templet: function (d) {
                let res = '';
                if(d.bonusOffer != null) {
                    for(let i = 0; i < d.bonusOffer.displayNameList.length; ++i) {
                        res += d.bonusOffer.displayNameList[i] + " -" + d.bonusOffer.discountPercentList[i] + "%" + "， ";
                        if(i === 2) {
                            res += '<br/>';
                        }
                    }
                }
                return res;
            }}
    ]]
    ,totalRow: false

    ,url: app.util.api.getAPIUrl('valorant.storefront.batchQueryBoth')
    ,method: 'GET'
    // ,contentType: 'application/json'
    ,headers: {}
    ,where: {
        skin1: $('#skin1').val(),
        skin2: $('#skin2').val(),
        skin3: $('#skin3').val(),
        skin4: $('#skin4').val(),
        bonusSkin1: $('#bonusSkin1').val(),
        bonusSkin2: $('#bonusSkin2').val(),
        bonusSkin3: $('#bonusSkin3').val(),
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
                skin1: $('#skin1').val(),
                skin2: $('#skin2').val(),
                skin3: $('#skin3').val(),
                skin4: $('#skin4').val(),
                bonusSkin1: $('#bonusSkin1').val(),
                bonusSkin2: $('#bonusSkin2').val(),
                bonusSkin3: $('#bonusSkin3').val(),
            }
        });
    },
    clear: function(){
        $('#skin1').val('');
        $('#skin2').val('');
        $('#skin3').val('');
        $('#skin4').val('');
        $('#bonusSkin1').val('');
        $('#bonusSkin2').val('');
        $('#bonusSkin3').val('');
        table.reloadData('dataTable', {
            where: {}
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
        case 'batchUpdateBoth' :
            batchUpdateBoth();
            break;
    };
});

function batchUpdateBoth() {
    app.util.ajax.post(app.util.api.getAPIUrl('valorant.storefront.batchUpdateBoth'),
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
        },
        true,
        8000000
    );
}
