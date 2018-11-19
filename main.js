var app = new Vue({
	el: '#app',
	data:{
        cont:0,
		title: "Список дел",
        inputText:'',   
		list:[
		{text:"Читать книги", checked: false},
		{text:"Гулять", checked: false},
		{text:"Много спать", checked: false},
		{text:"Много есть", checked: false},
		]
	},
	
	methods: {
		addItem: function() {
    if(this.inputText != '') {
      this.list.push({text: this.inputText,checked:false});
      this.inputText = '';
        	}
		},

		deleteElement: function (index) {
           if(this.list[index].checked==true){
                this.cont--;
                this.list.splice(index, 1); 
            }else this.list.splice(index, 1);    		
    	},
        
         performedElements:function(index){
             if(this.list[index].checked==true){
                 this.cont++
             }
             else{
                 this.cont--
             }
	}
    },
	computed:{
        count:function(){
            count=this.list.length
            return count
        }
    }
    
})