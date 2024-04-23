var tenDN = "admin1"
var pass  = "Admin1@"

 function dangky(){
        let dem=0;
        let user = document.getElementById("user").value;
        let regexuser = /^[a-zA-Z0-9' ]{6,15}$/;
        
        if(!regexuser.test(user) || user.trim() == ""){
            document.getElementById("err1").innerHTML = "* Bắt buộc, gồm (6-15 kí tự) chữ và số";
            dem++;
        } else {
            document.getElementById("err1").innerHTML = "(*)";
            tenDN = user;
            
        }
        
    
        let sdt = document.getElementById("sdt").value;
        let regexsdt = /^[0][3-9]{1}[0-9]{8}$/;
        if(!regexsdt.test(sdt) || sdt.trim() == "")
        {
            document.getElementById("err2").innerHTML = "* Bắt đầu từ 0(3-9), gồm 10 kí tự số";
            dem++
        }else{
            document.getElementById("err2").innerHTML ="(*)";
            
        }
    
        let email = document.getElementById("email").value;
        let regexMail = /^[A-Za-z0-9]{1,}\@(gmail|email|yahoo)\.com$/;
        if ( !regexMail.test(email) || email.trim() == "") {
            document.getElementById("err3").innerHTML = "* Không đúng định dạng";
            dem++
        }else{
            document.getElementById("err3").innerHTML = "(*)";
            
        }
            
    
        let matkhau = document.getElementById("password").value;
        let regexmatkhau = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,}/;
        if (matkhau.trim() == "" || !regexmatkhau.test(matkhau)) {
           document.getElementById("err4").innerHTML = "* Mật khẩu gồm chữ hoa, chữ thường và ký tự đặc biệt";
           dem++
        }else{
            document.getElementById("err4").innerHTML ="(*)";
            
        }
        
    
        let matkhauagain = document.getElementById("againpassword").value;
        if( matkhauagain.trim() == ""){
            document.getElementById("err5").innerHTML = "* Vui lòng nhập lại mật khẩu";
            dem++
        }
        else
            if (matkhauagain != matkhau) {
            document.getElementById("err5").innerHTML = "* Không trùng khớp";
            dem++
            return false;
        }else{
            pass=matkhau;
            document.getElementById("err5").innerHTML ="(*)";
            
        }
        
        if(dem==0){
        // alert('ĐĂNG KÝ THÀNH CÔNG !');
       
        $('#dangki').modal('hide');
        $('#dktc').modal('show');
        document.getElementById("user").value="";
        document.getElementById("sdt").value="";
        document.getElementById("password").value="";
        document.getElementById("email").value="";
        document.getElementById("againpassword").value="";
        } 
       
}

function dangnhap(){
    let dem=0;
    let ten = document.getElementById("dn").value
    if(ten != tenDN || ten.trim()=="")
    {
        dem++
    }

    let pas =document.getElementById("mk").value
    if(pas != pass || pas.trim()=="")
    {
        dem++
    }

    if(dem==0 ){
        // alert("ĐĂNG NHẬP THÀNH CÔNG")
        $('#modallog').modal('hide');
        $('#dntc').modal('show');
        document.getElementById("dn").value="";
        document.getElementById("mk").value="";
        let logtext= document.getElementById("logtext")
        logtext.style.display= "none";
        let linktt= document.getElementById("linktt");
        linktt.href="../html/hoso1.html"
        linktt.setAttribute("data-bs-target", "#xemtt")
        let anhdn= document.getElementById("anhdn")
        anhdn.style.display="inline-block"
        anhdn.href="../html/hoso1.html/"
        return dem;
    }else{
        document.getElementById("tb").innerHTML= "Thông tin đăng nhập chưa đúng"
        document.getElementById("mk").value="";
    }
}

function dong(){
        document.getElementById("dn").value="";
        document.getElementById("mk").value="";
}




