function clicked(){
			var user=document.getElementById('user').value;
            var password=document.getElementById('psw').value;
             if(user==''){
             	alert('user is not entered')
             }
             else if(password==''){
             	alert('password is not entered')
             }
             else{
             	alert('hello coder'+' '+user)
             }
            }