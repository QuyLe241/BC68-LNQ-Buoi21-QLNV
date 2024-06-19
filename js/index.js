//      Arr Nhân viên 
//      Chứa tất cả các thuộc tính object NhanVien
let arrNhanVien = [];

//  Thêm nhân viên
//  Tạo sự kiện onsubmit tại => button thêm người dùng
//  Lưu ý : type = submit , tạo sự kiện onclick ="" tại HTML
document.getElementById("formQLNV").onsubmit = function (event) {
    event.preventDefault(); //ngăn trang web reload khi thay đổi dữ liệu
    let arrField = document.querySelectorAll("#formQLNV input,#formQLNV select");        // DOM tới dữ liệu input và select
    // console.log(arrField);

    let nhanVien = new NhanVien();
    // console.log(nhanVien);

    //  vòng lặp for of để xử lý và lấy dữ liệu
    for (let field of arrField) {
        // console.log(field);

        //      Lấy dữ liệu từ id và thêm vào arrnhanVien
        let {value, id} = field;
        nhanVien[id] = value;
    }

    // thêm nhân viên vào arr
    arrNhanVien.push(nhanVien);
    renderArrNhanVien();
    // xóa dữ liệu sau khi người dùng nhập dữ liệu xong
    document.getElementById("formQLNV").reset();
    console.log(arrNhanVien);
    // document.getElementById("tableDanhSach").innerHTML = "11111";
}

//      Hiển thị nội dung lên giao diện
// let content = ""; 
function renderArrNhanVien () {
    // Tạo vòng lặp duyệt NV trong mảng For of
    let content = "";       // chứa các giá trị hiển thị ra thẻ html
    for (let nhanVien of arrNhanVien){
        // let newArrNhanVien = new nhanVien();
        // Object.assign(newArrNhanVien,nhanVien);
        // destructuring
        // lấy dữ liệu từ nhanVien

        let {tknv, name, email, datepicker, chucvu} = nhanVien;

        // <td>${nhanVien.tongLuong()}</td>
        // <td>${nhanVien.xepLoai()}</td>
        content += `
        <tr>
            <td>${tknv}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${datepicker}</td>
            <td>${chucvu}</td>
            <td>${nhanVien.tongLuong()}</td>
            <td>${nhanVien.xepLoai()}</td>
            <td>
            <button onclick="" class="btn btn-danger">Xoá</button>
            <button
                    class="btn btn-warning"
                    id="btnThem"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Sửa
                  </button>
            </td>
        </tr>   
        `;
        
    } 

    //  DOM tới tbody và hiển thị
    //     document.getElementById("btnThemNV").onclick = function () {
    //     document.getElementById("tableDanhSach").innerHTML = content;
    // }
    document.getElementById("tableDanhSach").innerHTML = content;
}
renderArrNhanVien();
// document.getElementById("tableDanhSach").innerHTML = content;
// document.getElementById("tableDanhSach").innerHTML = "11111qeqeqeqeq111111111111";
    // document.getElementById("btnThemNV").onclick = function () {
    //     document.getElementById("tableDanhSach").innerHTML = "11111qeqeqeqeq111111111111";
    // }
