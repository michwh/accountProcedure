window.onload=function(){
	
var vm=	new Vue({
		el:'.all',
		data:{
			user:'123',
      password:'',
      newPass1:'',
      newPass2:'',
      oldPass:'',
      
            
		},
        created:function(){
       axios.get('../json/bill.json').then(

            function(response){

                 vm.user=response.data.ID;//为什么不能用this.user和this.password
                 vm.password=response.data.password;                 
             },
             function(response){
                alert("连接json文件失败");
            });//axios.get结束 

    },//created结束


		methods:{
            
            submit(){
              
                
                
              if(this.oldPass==''){
                alert('原密码不能为空！');
              }
               else if(this.newPass1==''){
                alert('新密码不能为空！');
              }
              else if(this.oldPass!=this.password){
                
                alert("原密码填写错误！");
              }
               else if(this.newPass1!=this.newPass2){
                alert("两次填写的新密码不相同！");
              }
              else{
                alert("修改成功！");
                 window.location.reload();
              }
            },
    },


    })





}	