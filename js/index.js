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
    // xóa dữ liệu sau khi người dùng nhập dữ liệu xong
    document.getElementById("formQLNV").reset();
    console.log(arrNhanVien);
}

//      Hiển thị nội dung lên giao diện
// let content = ""; 
function renderArrNhanVien (arr = arrNhanVien) {
    // Tạo vòng lặp duyệt NV trong mảng For of
    let content = "";       // chứa các giá trị hiển thị ra thẻ html
    for (let nhanVien of arr){
        // destructuring
        // lấy dữ liệu từ nhanVien
        let {tknv, name, email, datepicker, chucvu} = arrNhanVien;
        content += `
                <tr>
                    <td>${tknv}</td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${datepicker}</td>
                    <td>${chucvu}</td>
                    <td>${arrNhanVien.tongLuong()}</td>
                    <td>${arrNhanVien.xepLoai()}</td>
                    <td>
                    <button onclick="deleteSinhVien('${txtMaSV}')" class="btn btn-danger">Xoá</button>
                    </td>
                  </tr>   
        `;
    } 

    //  DOM tới tbody và hiển thị
    document.getElementById("tableDanhSach").innerHTML = content;
}
// document.getElementById("tableDanhSach").innerHTML = content;

