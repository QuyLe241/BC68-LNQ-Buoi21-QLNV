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

    //  gọi tới hàm để hiển thị
    renderArrNhanVien();

    //Gọi tới localStorage để lưu dữ liệu
    saveLocalStorage(); 


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
            <button onclick="deleteNhanVien('${tknv}')" class="btn btn-danger">Xoá</button>
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

//  gọi tới hàm lấy dữ liệu từ localStorage
// getLocalStorage();



//                  TEST
// document.getElementById("tableDanhSach").innerHTML = content;
// document.getElementById("tableDanhSach").innerHTML = "11111qeqeqeqeq111111111111";
    // document.getElementById("btnThemNV").onclick = function () {
    //     document.getElementById("tableDanhSach").innerHTML = "11111qeqeqeqeq111111111111";
    // }


    //      Lưu trữ lên local storage
    //  JSON.stringify : dùng để chuyển đổi dữ liệu từ object sang chuỗi để lưu lên local storage
    //  JSON.parse : dùng để chuyển dữ liệu từ chuổi sang object và in ra giao diên
        //  sử dụng local storage
        // localStorage.setItem  : thêm dữ liệu vào localStorage
        // localStorage.getItem  : lấy dữ liệu từ localStorage
        // localStorage.removeItem  : xóa dữ liệu từ localStorage

//  Lưu trữ dữ liệu xuống localStorage
function saveLocalStorage (key="arrNhanVien", value="arrNhanVien") {
    // Lấy trữ từ mang sang chuổi để lưu trữ
    // Đi đến sự kiện onsubmit để gọi function này
    let stringJson = JSON.stringify(value);
    localStorage.setItem(key, stringJson);
}

function getLocalStorage (key="arrNhanVien") {
    //  đi đến renderArrNhanVien để gọi và hiển thị

    // chuyển dữ liệu từ localStorage sang mảng để hiển thị
    let arrLocal = localStorage.getItem(key);
    // Sử dụng :  truethy và falsy
    //          Nếu arrLocal đúng là chuỗi thì parse và ko phải là chuỗi thì trả về rỗng. tránh trường hợp null dẫn đến sai dữ liệu
    // arrNhanVien = arrLocal ? JSON.parse(arrLocal) : [];  Hoặc
    if (arrLocal) {
        arrNhanVien = JSON.parse(arrLocal);
        // gọi đến hàm render
        renderArrNhanVien();
    }
}


//      Chức năng xóa
function deleteNhanVien (tknv) {
    //      Tạo sự kiệ onclick tại nút button ở function render
    console.log(tknv);
    // tìm vị trí của nhân viên đang cần xóa trong mảng
    //  Thực hiện cấc phương thúc xóa của măng
    //      Sử dụng findIndex
    let index = arrNhanVien.findIndex((item,index) => {
        return item.tknv == tknv;
    });
    console.log(index);

    //  Xóa , nếu vị trí index != -1
    if (index != -1) {
        arrNhanVien.splice(index,1);

    // gọi đến render và saveLocal
    renderArrNhanVien();

    };


}  