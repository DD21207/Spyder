var app = new Vue({
  el: '#detail_box',
  data: {
    Month_list: "",
    Category_list: ""
  },
  mounted: function() {
    this.$nextTick(function() {
      app.load();
    })
  },
  methods: {
    load: function() {
      this.$http.get('./date.json').then(function(data) {
        this.Category_list = data.body.Category;
      });
      this.$http.post('https://www.starcompass.net/DEMOINTG/onLoadBMWDigitalSpot.do', {
        "platform": "PC",
         "target":"M19-40岁"
      }).then(function(data) {
        this.Month_list = data.body.Month;
        this.$http.post('https://www.starcompass.net/DEMOINTG/getBMWDigitalSpotChart.do', {
        "platform": "PC",
        "month": this.Month_list[0],
        "category": "CAR",
        "target":"M19-40岁"
      }).then(function(data) {
       
        charts(data.body)
      });
      });
      // this.$http.get('./example.json').then(function(data) {
      //  charts(data.body)
      // });
  
      
    },
		onChange:function(){
			var Month = this.trim(document.getElementById('Month').value);
			var Category = this.trim(document.getElementById('Category').value);
			this.$http.post('https://www.starcompass.net/DEMOINTG/getBMWDigitalSpotChart.do', {
        "platform": "PC",
        "month": Month,
        "category": Category,
        "target":"M19-40岁"
      }).then(function(data) {
        charts(data.body)
      });
		},
		trim: function(str){
			return str.replace(/(^\s*)|(\s*$)/g, "");
		},
  }
})
