window.onload=function(){
   var vm=new Vue({
   	el:'.main',
   	data:{
   		login:true,
         k:0,
   		user:[],
   		sID:'',
   		sPassword:'',
   		newID:'',
      newPassword:'',
   	},
   	created(){
   		 axios.get('../json/user.json').then(

            function(response){
              vm.user=response.data.users;
           
       },
       function(response){
       	alert("获取json文件失败！");
       })
   	},//created结束
   	methods:{
        playLogin(){
        	this.login=true;

        },
        playRegister(){
        	this.login=false;
        },
        submit(){

        	
        	for(i=0,len=this.user.length;i<len;i++){
                 if(this.sID===this.user[i].ID&&this.sPassword===this.user[i].password){
                     this.k=1;

                     break;
                 }

        	}
        	if(this.k==1){
        		
                 	alert("登录成功！");
                  window.location.href='../billDetails/billDetails.html';
                 }
             else{
                 	alert("账号或密码错误！");
                 }
          this.k=0;
          
        },
        submit2(){
        	for(i=0,len=this.user.length;i<len;i++){
        		if(this.newID===this.user[i].ID){
        			this.k=1;
        			break;
        		}
            if(this.newID===''){
              this.k=2;
              break;
            }
        	}
        	if(this.k===1){
        			alert("该用户名已存在！");
        		}
        		else if(this.k===2){
        			alert("用户名不能为空！");
        		}
            else{
              alert("注册成功！");
            }
        		this.k=0;
        this.user.push({
          ID:this.newID,
          password:this.newPassword,
        })
        vm.login=true;
        }
   	}//methods结束
   })//new Vue结束
}//window.onload结束