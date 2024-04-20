// Thêm nav vào trang
function Nav() {
    document.write(`   
	<nav>
       <div class="container">
        <ul>
            <li style="height: 50px;"><a href="../html/index.html" style="line-height: 50px;">XShop</a></li>
            <li><a  data-bs-target="#diadiem" data-bs-toggle="modal" href="" style="text-decoration: none;"><p style="color: white; font-size: 10px; text-decoration: none; padding-top: 15px;">Xem giá, khuyến mãi tại <br> <span style="font-size: 10px;" id="Diemmuadt">Hồ Chí Minh...</span><i class="fas fa-sort-down"></i> </p></a></li>
            <li> <a href="# "><input type="text" class="search input" placeholder="Tìm kiếm...." style="padding-left: 6px;"> <i class="fas fa-search"></a></i></li>
            <li><button onclick="window.open('../html/giohang.html');"><i class="fas fa-shopping-cart"></i> Giỏ hàng</button></li>
            <li class="khungnav"><a href="../html/index.html" class="textnone">Trang Chủ</a></li>
            <li class="khungnav"><a href="../html/GioiThieu.html" class="textnone">Giới thiệu</a></li>
            <li class="khungnav"><a href="../html/LienHe.html" class="textnone">Liên hệ</a></li>
            <li class="khungnav" style=" width: 100px;"><a href="#" class="textnone" id="linktt" data-bs-toggle="modal" data-bs-target="#modallog"><span href="#" class="fas fa-user-alt fa-1.4x" style="margin-right: 3px; display: none;" id="anhdn"></span><span id="logtext">Đăng nhập</span></a></li>
            <li class="khungnav"><a href="#" class="textnone"  data-bs-toggle="modal" data-bs-target="#modalId"> Đăng ký</a></li>
            
        </ul>
       </div>
    </nav>`);
	addModal();
}

// Thêm header

function Header() {
    document.write(` 
    <div class="menu" style="margin-bottom: 10px;">
         <ul class="main-menu" style="justify-content: space-between;">
            <li>
                <a href="#iphone" class="textmenu" onclick="showProductsByCategory2('iPhone')"> iPhone <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width:151px;">
                    <li style="width: 149px;"><a href="#sec" class="liip" onclick="showProductsByCategory2('iPhone 15 Pro Max')">iPhone 15 Pro Max</a>       
                    </li>
                    <li style="width: 149px;"><a href="#sec" class="liip" onclick="showProductsByCategory2('iPhone14')">iPhone14 </a>
                        <ul class="sup-menu" style="width: 200px;">
                            <li><a href="#sec" onclick="showProductsByCategory2('iPhone14 Pro Max')">iPhone14 Pro Max</a></li>
                            <li><a href="#sec" onclick="showProductsByCategory2('iPhone14 Pro')">iPhone14 Pro </a></li>
                            <li><a href="#sec" onclick="showProductsByCategory2('iPhone14 Plus')">iPhone14 Plus</a></li>
                            
                        </ul>
                    </li>
                    <li style="width: 149px;"><a href="#sec" class="liip">iPhone13 Pro Max</a></li>
                    <li style="width: 149px;"><a href="#sec" class="liip">iPhone12 Pro Max</a></li>
                    <li style="width: 149px;"><a href="#sec">iPhone11 Pro Max</a></li>
                </ul>
            </li>
            <li>
                <a href="#sec" class="textmenu"> Vivo <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 151px;">
                    <li class="livv" style="width: 151px"><a href="#sec" >Vivo Y17s</a></li>
                    <li class="livv" style="width: 151px"><a href="#sec" >Vivo Y22</a>
                        <ul class="sup-menu " style="width: 200px;">
                            <li><a href="#sec">Vivo Y22x</a></li>
                            <li><a href="#sec">Vivo Y22y </a></li>
                            <li><a href="#sec">Vivo Y22z</a></li>
                            
                        </ul></li>
                    <li class="livv" style="width: 151px"><a href="#sec" >Vivo V29 5G</a></li>
                </ul>
            </li>
            <li>
                <a href="#oppo" class="textmenu"> OPPO <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 200px;">
                    <li style="width: 200px;"><a href="#sec">OPPO Reno11</a></li>
                    <li style="width: 200px;"><a href="#sec">OPPO A18</a></li>
                    <li style="width: 200px;"><a href="#sec">OPPO Find N2</a></li>
                </ul>
            </li>
            <li>
                <a href="#samsung" class="textmenu"> Samsung <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 203px;">
                    <li><a href="#sec">Samsung Galaxy S24 </a></li>
                    <li><a href="#sec">Samsung Galaxy S23</a></li>
                    <li><a href="#sec">Samsung Galaxy Z Fold5</a></li>
                    <li><a href="#sec">Samsung Galaxy Z Fild5</a></li>
                </ul>
            </li>
            <li>
                <a href="#sec" class="textmenu"> Xiaomi <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 200px;">
                    <li><a href="#sec">Xiaomi 14</a></li>
                            <li style="width: 250px;"><a href="#" style="width: 250px;">Xiaomi Redmi Note 13 Pro</a></li>
                            <li><a href="#sec">Xiaomi 13T Pro</a></li>
                            <li><a href="#sec">Xiaomi Redmi A2 series</a></li>
                </ul>
            </li>
            <li>
                <a href="#sec" class="textmenu"> Redmi <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 180px;">
                    <li><a href="#sec" class="">Realmi Note 50</a></li>
                    <li><a href="#sec" class="">Realmi C55</a></li>
                    <li><a href="#sec" class="">Realmi 11</a></li>
                    <li><a href="#sec" class="">Realmi C30s</a></li>
                </ul>
            </li>        
         </ul>
    </div>`);
}
//Footer
function Footer() {
    document.write(`
    <footer class="footer bg-white" style="width: 100%">
    <section class="footer-top clearfix">
        <div class="footer-col">
            <h6 class="footer-title">
                Thông tin và chính sách
            </h6>
            <ul class="footer-menu " id="menu-list">
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Chính sách bảo hành</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Chính sách đổi trả</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Mua hàng trả góp Online</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Mua hàng trả góp bằng thẻ tín dụng</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Giao hàng &amp; Thanh toán</a></li>
                <li class="footer-list-link" id="xem-them"><a class="footer-text-link" href="#">Xem thêm<span class='rotate-up'>▼</span></a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h6 class="footer-title">
                Dịch vụ và thông tin khác
            </h6>
            <ul class="footer-menu">
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Liên hệ hợp tác kinh doanh</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Chính sách bảo mật thông tin cá nhân</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Gửi góp ý, khiếu nại</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Dịch vụ bảo hành điện thoại</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Dịch vụ bảo hành mở rộng</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h6 class="footer-title">
                Tổng đài hỗ trợ miễn phí
            </h6>
            <ul class="footer-menu">
                <li class="footer-list-contact"><p class="footer-text-call">Gọi mua hàng:</p><a class="footer-text-contact" target="_blank" href="tel:+84393465113" >0393465113</a></li>
                <li class="footer-list-contact"><p class="footer-text-call">Gọi Khiếu nại:</p><a class="footer-text-contact" target="_blank" href="tel:+84393465113" >0393465113</a></li>    
                <li class="footer-list-contact"><p class="footer-text-call">Gọi bảo hành:</p><a class="footer-text-contact" target="_blank" href="mailto: tranngochung19112004@gmail.com">tranngochung19112004@gmail.com</a></li>   
            </ul>
        </div>
        <div class="footer-col">
            <h6 class="footer-title">
                Kết nối với XShop
            </h6>
            <ul class="footer-menu">
                <li class="footer-list-logo"><a target="_blank" href="https://www.facebook.com/HeungMinSonOfficial"><img class="footer-img-logo" src="../img/logofacebook.png" alt=""></a></li>
                <li class="footer-list-logo"><a target="_blank" href="https://www.instagram.com/hm_son7/"><img class="footer-img-logo"g src="../img/logoinstagram.png" alt=""></a></li>
                <li class="footer-list-logo"><a target="_blank" href="https://www.youtube.com/@TottenhamHotspur"><img class="footer-img-logo" src="../img/logoyoutube.png" alt=""></a></li>
                <li class="footer-list-logo"><a target="_blank" href="https://www.tiktok.com/@spursofficial"><img class="footer-img-logo" src="../img/logotiktok.png" alt=""></a></li>
                <li class="footer-list-logo"><a target="_blank" href=""><img class="footer-img-logo" src="../img/logozalo.webp" alt=""></a></li>
            </ul>
            <h6 class="footer-title">
                Website thành viên
            </h6>
            <ul class="footer-menu">
                <li class="footer-list-avarta"><a target="_blank" href="https://www.4kfarm.com/"><img class="footer-avarta-member" src="../img/avarta-4kfarm.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="https://avafashion.org/#!"><img class="footer-avarta-member" src="../img/avarta-AVAfashion.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="http://ww25.avaji.org/?subid1=20240327-2224-1045-b8f4-5d311a1a1a85"><img class="footer-avarta-member" src="../img/avarta-AVAJi.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="https://www.avakids.com/online-gia-re?utm_source=facebook&utm_medium=cpc&utm_campaign=avakids-km&gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppB8JtQ6TUErr-t6vDZKkWJkHzzzayK8djIrnE8VJPuqEg8t1zhRUyxoCo1wQAvD_BwE"><img class="footer-avarta-member" src="../img/avarta-AVAKid.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="https://www.bachhoaxanh.com/"><img class="footer-avarta-member" src="../img/avarta-bachhoaxanh1.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="https://www.nhathuocankhang.com/"><img class="footer-avarta-member" src="../img/avarta-nhathuoc.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="https://www.topzone.vn/"><img class="footer-avarta-member" src="../img/avarta-topfarm.png" alt=""></a></li>
            </ul>
            <h6 class="footer-title">
                Phương thức thanh toán
            </h6>
            <ul class="footer-menu">
                <li class="footer-list-avartapay"><img class="footer-avarta-pay" src="../img/avarta-card.png" alt=""></li>
                <li class="footer-list-avartapay"><img class="footer-avarta-pay" src="../img/avarta-jcb.png" alt=""></li>
                <li class="footer-list-avartapay"><img class="footer-avarta-pay" src="../img/avarta-atm.png" alt=""></li>
                <li class="footer-list-avartapay"><img class="footer-avarta-pay" src="../img/avarta-tragop.png" alt=""></li>
                <li class="footer-list-avartapay"><img class="footer-avarta-pay" src="../img/avarta-visa.png" alt=""></li>
            </ul>
        </div>
    </section>
     <div class="footer-bot" style="background-color: #f1f1f1">
        <p>© Bản quyền 2024 - Lớp đại học kỹ thuật phần mềm 18A (Đại học Công Nghiệp Thành phố Hồ Chí Minh) <br>
        <span><em style="font-size:10px; font-weight:normal">Mọi hành động sử dụng nội dung đăng tải trên Website XShop.com phải có sự đồng ý bằng văn bản của <b><a href="../html/index.html" style="text-decoration: none; color: black;">XShop</a></b>.</em></span>
        </p>
    </div>
    </footer>`);
}
//Modal
function addModal(){
	document.write(`
	<!-- Modal Đăng nhập -->
    <div class="modal" id="modallog">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: rgba(0,0,0,0.8);">
                <div class="modal-header">
                    <h5 class="modal-title" style="font-size: 25px; padding-top: 5px; color: #c4b22a">
                        Đăng nhập 
                     </h5>
                     <button class="btn btn-close btn-light" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div>
                            <span id="tb" style="color: red;font-style: italic;"></span></span>
                        </div>
                        <div class="form-group">
                            <label for="dn"> Tên đăng nhập:</label>
                            <span id="errdn" style="color: red;font-style: italic;">(*)</span>
                            <input type="text" name="" id="dn" class="form-control" placeholder="Tên đăng nhập" value="22711231"> 
                        </div>
                        
                        <div class="form-group">
                            <label for="mk">Mật khẩu:</label>
                        <span id="errmk" style="color: red;font-style: italic;">(*)</span>    
                        <input type="password" class="form-control" name="" id="mk" placeholder="Mật khẩu" value="Hung123@">
                        </div>
                        
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-toggle="modal" onclick="dangnhap()"  >Đăng nhập</button>
                    <button data-bs-dismiss="modal" class="btn btn-light" id="dong" onclick="dong()" >Đóng</button>
                </div>
            </div>

        </div>
    </div>
    <!-- Modal Đăng nhâp thành công -->
    <div class="modal" id="dntc">
        <div class="modal-dialog">
            <div class="modal-content"  style="background-color: rgba(0,0,0,0.8);">
                <div class="modal-header">
                    <button data-bs-dismiss="modal" class="btn btn-close btn-light" style="color: white;"></button>
                </div>
                <div class="modal-body text-white " style="text-align: center; font-weight: bold; font-size: 30px;      ">
                    <p>Đăng nhập thành công</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal chọn đăng ký -->

    <div
        class="modal fade"
        id="modalId"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="background-color: rgba(0,0,0,0.8);" >
                <div class="modal-header">
                    <h5  id="modalTitleId" style="text-align: center;">
                        Mời Bạn Chọn!!!
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body" style="text-align: center;">
                    <div class="container-fluid">
                        <button class="btn btn-light" data-bs-target="#dangki" data-bs-toggle="modal" onclick="dongmodal()">Đăng ký Tài Khoản</button>
                        <a href="../html/hoso1.html"><button class="btn btn-primary text-none">Đăng Ký Thành Viên</button></a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    </div>
    
<!-- Modal Đăng ký -->
    <div class="modal" id="dangki">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: rgba(0,0,0,0.8);" >
                <div class="modal-header">
                    <h3 style="font-size: 25px; padding-top: 5px; color: #c4b22a;">
                        Đăng ký
                    </h3>
                    <button class=" btn btn-light btn-close"  data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <p id="tb" style="text-align: center; color: white; font-size: 15px;"></p>
                            <label for="user">Tên người dùng:</label>
                            <span id="err1" style="color: red;font-style: italic;"></span>
                            <input type="text" id="user"  class="form-control" placeholder="Nhập tên người dùng(gồm chữ và số)" value="Tran Ngoc Hung" >
                        </div>
                        
                        <div class="form-group">
                            <label for="sdt">Số điện thoại:</label>
                            <span id="err2" style="color: red;font-style: italic;"></span>
                            <input type="tel" id="sdt" placeholder="Số điện thoại" class="form-control" value="0393465113" >
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <span id="err3" style="color: red;font-style: italic;"></span>
                            <input type="email" class="form-control" id="email" placeholder="Email" value="tranngochung19112004@gmail.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="password"> Mật khẩu:</label>
                            <span id="err4" style="color: red;font-style: italic;"></span>
                            <input type="password" id="password" class="form-control" placeholder="Mật khẩu có ít nhất một chữ hoa, một chữ thường và một ký tự đặc biệt" value="Hung1234@" >
                        </div>
                        
                        <div class="form-group">
                            <label for="againpassword">Nhập lại mật khẩu:</label>
                            <span id="err5" style="color: red;font-style: italic;"></span>
                            <input type="password" id="againpassword" class="form-control" placeholder="Nhập lại mật khẩu" value="Hung1234@">
                        </div>
                        <div class="form-group" style="margin-left: 300px;margin-top: 10px;">
                            <input id="closemodal" type="button" class="btn btn-primary" onclick="dangky()" value="Đăng ký" data-bs-toggle="modal"></input>
                            <button data-bs-dismiss="modal" class="btn btn-light" id="dong" onclick="dong()">Đóng</button>
                        </div>
                    </form>

                </div>
                
            </div>

        </div>
    </div>

<!-- Modal Đăng ký thành công -->
    <div class="modal" id="dktc">
        <div class="modal-dialog">
            <div class="modal-content"  style="background-color: rgba(0,0,0,0.8);">
                <div class="modal-header">
                    <button data-bs-dismiss="modal" class="btn btn-close" style="color: white;"></button>
                </div>
                <div class="modal-body text-white " style="text-align: center; font-weight: bold; font-size: 30px;      ">
                    <p>Đăng ký thành công</p>
                </div>
            </div>
        </div>
    </div>
<!-- Modal Dịa điểm -->
    <div class="modal" id="diadiem">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="background-color: rgb(47,128,237);">
                    <p style="margin-top: 5px;">Mời bạn chọn địa chỉ <span id="diadiemchon">...</span></p>
                    <button data-bs-dismiss="modal" class="btn btn-blue text-white" style="border: 1px solid lightblue;">Đóng</button>

                </div>
                <div class="modal-body text-dark">
                    <div class="modal-bodydd">
                        <div class="row ">
                            <div class="col-5" >
                                <p><a href="#" id="q1" class="loc">Quận 1</a></p>
                            </div>
                            <div class="col-5" >
                                <p><a href="#" id="q3" class="loc">Quận 3</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="q4">
                                <p><a href="#" class="loc">Quận 4</a></p>
                            </div>
                            <div class="col-5" id="q5">
                                <p><a href="#" class="loc">Quận 5</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="q6">
                                <p><a href="#" class="loc">Quận 6</a></p>
                            </div>
                            <div class="col-5" id="q7">
                                <p><a href="#" class="loc">Quận 7</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="q8">
                                <p><a href="#" class="loc">Quận 8</a></p>
                            </div>
                            <div class="col-5" id="q10">
                                <p><a href="#" class="loc">Quận 10</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="q11">
                                <p><a href="#" class="loc">Quận 11</a></p>
                            </div>
                            <div class="col-5" id="q12">
                                <p><a href="#" class="loc">Quận 12</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="qbt">
                                <p><a href="#" class="loc">Quận Bình Tân</a></p>
                            </div>
                            <div class="col-5" id="abth">
                                <p><a href="#" class="loc">Quận Bình Thạnh</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="qgv">
                                <p><a href="#" class="loc">Quận Gò Vấp</a></p>
                            </div>
                            <div class="col-5" id="qpn">
                                <p><a href="#" class="loc">Quận Phú Nhuận</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="qtb">
                                <p><a href="#" class="loc">Quận Tân Bình</a></p>
                            </div>
                            <div class="col-5" id="qtp">
                                <p><a href="#" class="loc">Quận Tân Phú</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="qbc">
                                <p><a href="#" class="loc">Huyện Bình Chánh</a></p>
                            </div>
                            <div class="col-5" id="hcg">
                                <p><a href="#" class="loc">Huyện Cần Giờ</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="hcc">
                                <p><a href="#" class="loc">Huyện Củ Chi</a></p>
                            </div>
                            <div class="col-5" id="hhm">
                                <p><a href="#" class="loc">Huyện Hóc Môn</a> </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="hnb">
                                <p><a href="#" class="loc">Huyện Nhà Bè</a></p>
                            </div>
                            <div class="col-5" >
                                <p><a href="#" id="tptd" class="loc">TP.Thủ Đức</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
	`);
}