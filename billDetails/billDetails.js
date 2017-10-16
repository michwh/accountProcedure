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
       
        sTime:'',
        sPlace:'',
        sType:'',
        sUser:'',
        sMoney:'',
        sPurpose:'',
        sRemark:'',
        sState:'',
        sStateNum:'', 
        searchList:[],
        searchShow:false,
        value:'time',
		},
        created:function(){
       axios.get('../json/bill.json').then(

            function(response){
                               
                 vm.username=response.data.ID;
                 vm.list=response.data.bills;
                    
                    
                },
            function(response){
                alert("连接json文件失败");
            });//axios.get结束

        
    },//created结束
		methods:{
            show:function(even){//选中下拉框不同的选项，文本框中会出现不同的提示
            	if(even.target.value=='time'){
                    this.tips='例 20161015';
                    this.value=even.target.value;
            	}
            	if(even.target.value=='user'){
            		this.tips='例 李明';
                    this.value=even.target.value;
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
            search(){
                this.searchList=[];
            if(this.value==='time'){ 
                for(var i=0,len=this.list.length;i<len;i++){
                    if(this.tips===this.list[i].time){
                         vm.searchList.push({
                        time:this.list[i].time,
                        place:this.list[i].place,
                        type:this.list[i].type,
                        user:this.list[i].user,
                        money:this.list[i].money,
                        purpose:this.list[i].purpose,
                        remark:this.list[i].remark,
                        state:this.list[i].state, 
                                               
                      })
                    }
                }
            }
            if(this.value==='user'){
                for(var i=0,len=this.list.length;i<len;i++){
                    if(this.tips===this.list[i].user){
                         vm.searchList.push({
                        time:this.list[i].time,
                        place:this.list[i].place,
                        type:this.list[i].type,
                        user:this.list[i].user,
                        money:this.list[i].money,
                        purpose:this.list[i].purpose,
                        remark:this.list[i].remark,
                        state:this.list[i].state, 
                                               
                      })
                    }
                }
            }
                
              this.searchShow=true;

            },
            

	    }//methods结束
    })//var vm=new Vue结束





}	