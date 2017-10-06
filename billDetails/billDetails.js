window.onload=function(){
	
var vm=new Vue({
		el:'.all',
		data:{
			tips:'例 20161015',
           options: [
             { text: '时间', value: 'time'},
             { text: '使用人',value: 'user'},
            ],
        list:[],//所有账单
        isActive:false,
        username:'',
        mes:'',
        user:'',
        sTime:'',
        sPlace:'',
        sType:'',
        sUser:'',
        sMoney:'',
        sPurpose:'',
        sRemark:'',
        sState:'',
        sStateNum:'', 
        
		},
        created:function(){
       axios.get('../json/bill.json').then(

            function(response){
                
                mes=response.data.bills;
                 user=response.data.ID;
                 vm.username=user;
                for(var i=0;i<mes.length;i++){
                      vm.list.push({
                        time:mes[i].time,
                        place:mes[i].place,
                        type:mes[i].type,
                        user:mes[i].user,
                        money:mes[i].money,
                        purpose:mes[i].purpose,
                        remark:mes[i].remark,
                        state:mes[i].state, 
                                               
                      })
                    }
                    
                    
                },
            function(response){
                alert("连接json文件失败");
            });//axios.get结束

        
    },//created结束
		methods:{
            show:function(even){//选中下拉框不同的选项，文本框中会出现不同的提示
            	if(even.target.value=='time'){
                    this.tips='例 20161015';
            	}
            	if(even.target.value=='user'){
            		this.tips='例 李明';
            	}
            },
            disappearCue:function(){//点击文本框后，文本框里面的提示消失
            	this.tips='';
            },
            addBill(){
               this.isActive=true;
            },
            changeActive() {
                     
                  
                    this.isActive=false;
                
            },
            saveMessage(){
                

                vm.list.push({
                        time:this.sTime,
                        place:this.sPlace,
                        type:this.sType,
                        user:this.sUser,
                        money:this.sMoney,
                        purpose:this.sPurpose,
                        remark:this.sRemark,
                        state:this.sState, 
                                               
                      })
                this.isActive=false;
            },

	    }//methods结束
    })//var vm=new Vue结束





}	
