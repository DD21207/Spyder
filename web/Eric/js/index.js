$(function() {
    $('#close').click(function() {
        $("#model").hide();
        $("#tooltip").hide();
    })
    $("#open").click(function() {
        $(window).scrollTop(0);
        $("#model").show();
        $("#tooltip").show();
    })
})





var app = new Vue({
    el: '#app',
    data: function() {
        return {
            Datas: [],
            columns: [
                { field: 'FY', title: 'FY', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, },
                { field: 'Platform', title: 'Platform', width: 20, titleAlign: 'center', columnAlign: 'center', isResize: true },
                { field: 'Data Type', title: 'Data Type', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true },
                { field: 'Filter', title: 'Filter', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true },
                { field: 'Segment', title: 'Segment', width: 50, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Jul', title: 'Jul', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Aug', title: 'Aug', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Sep', title: 'Sep', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Oct', title: 'Oct', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Nov', title: 'Nov', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Dec', title: 'Dec', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Jan', title: 'Jan', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Feb', title: 'Feb', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Mar', title: 'Mar', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Apr', title: 'Apr', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'May', title: 'May', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Jun', title: 'Jun', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
                { field: 'Remark', title: 'Remark', width: 10, titleAlign: 'center', columnAlign: 'center', isResize: true, isEdit: true, },
            ],
            Type: []
        }
    },
    mounted: function() {
        this.$nextTick(function() {})
    },
    methods: {
        validation: function() {
            var name = $('#Choose').val();
            var name2 = $('#Version_choose').val();

            this.$http.get('./test.json').then(function(data) {
                this.Type = data.body.Type;
                this.Datas = data.body.Data
            });
        },
        demo() {
            console.log(this.tableData1)
        },
        cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
            var num = this.Type.indexOf(rowData['Data Type']);
            this.Datas[num].tableData[rowIndex][field] = newValue;
        },
        submit() {
            var Version = $('#Version').val();
            $.ajax({
                type: "POST", //默认值: "GET")。请求方式 ("POST" 或 "GET")， 默认为 "GET"
                url: "Insert.php", //当前页地址。发送请求的地址
                data: {
                    Version: Version,
                    numList: this.Datas
                },
                success: function(data) {
                    $("#model").hide();
                    $("#tooltip").hide();
                    alert(data);
                },
                async: true, //true为异步请求，false为同步请求
                error: function() {
                    alert("请求失败");
                }
            });
        },
        count() {
            $.ajax({
                type: "POST", //默认值: "GET")。请求方式 ("POST" 或 "GET")， 默认为 "GET"
                url: "jisuan.php", //当前页地址。发送请求的地址
                data: {
                    numList: this.Datas
                },
                success: function(jisuan) {
                    data = $.parseJSON(jisuan);
                    console.log(data.Data);
                    alert('Done!');
                },
                async: true, //true为异步请求，false为同步请求
                error: function() {
                    alert("请求失败");
                }
            });

        },
        export_excel() {
            $.ajax({
                type: "POST", //默认值: "GET")。请求方式 ("POST" 或 "GET")， 默认为 "GET"
                url: "Export.php", //当前页地址。发送请求的地址
                data: {
                    numList: this.Datas
                },
                success: function(jisuan) {
                    data = $.parseJSON(jisuan);
                    console.log(data.Data);
                    alert('Done!');
                },
                async: true, //true为异步请求，false为同步请求
                error: function() {
                    alert("请求失败");
                }
            });

        }

    }
})