//      Arr Nhân viên 
//      Chứa tất cả các thuộc tính object NhanVien
let arrNhanVien = [];

//      Lấy dữu liệu từ form
function getValueForm () {
    let arrField = document.querySelectorAll("#formQLNV input,#formQLNV select");
    let nhanVien = new NhanVien();

    // 
    for (let field of arrField) {
        // console.log(field);

        //      Lấy dữ liệu từ id và thêm vào arrnhanVien
        let {value, id} = field;
        nhanVien[id] = value;

        //      Xử lý validation
        //  Xử dụng thẻ cha chứa input để DOM và hiện thông báo
        //      Bằng parentElement
        //      field là từng input đang có
        // let parent = field.parentElement; 
        // let errorField = parent.querySelector("span");
        // // console.log(errorField);
        // let check = checkEmptyValue(value, errorField);
    }
    return nhanVien;
}

//  Thêm nhân viên
//  Tạo sự kiện onsubmit tại => button thêm người dùng
//  Lưu ý : type = submit , tạo sự kiện onclick ="" tại HTML
document.getElementById("formQLNV").onsubmit = function (event) {
    event.preventDefault(); //ngăn trang web reload khi thay đổi dữ liệu
    //      Lấy dữ liệu từ getValueForm
    let nhanVien = getValueForm();


    //              Lấy dữ liệu theo cách thườn
    // let arrField = document.querySelectorAll("#formQLNV input,#formQLNV select");        // DOM tới dữ liệu input và select
    // // console.log(arrField);

    // let nhanVien = new NhanVien();
    // // console.log(nhanVien);

    // //  vòng lặp for of để xử lý và lấy dữ liệu
    // for (let field of arrField) {
    //     // console.log(field);

    //     //      Lấy dữ liệu từ id và thêm vào arrnhanVien
    //     let {value, id} = field;
    //     nhanVien[id] = value;
    // }

    // //  validation
    //     let parent = field.parentElement; 
    //     let errorField = parent.querySelector("span");
    //     // console.log(errorField);
    //     let check = checkEmptyValue(value, errorField);

    // thêm nhân viên vào arr
    arrNhanVien.push(nhanVien);

    //  gọi tới hàm để hiển thị
    renderArrNhanVien();

    //      Thông báo thêm thành công
    // alert("Thêm Thành Công");


    //Gọi tới localStorage để lưu dữ liệu
    saveLocalStorage(); 


    // xóa dữ liệu sau khi người dùng nhập dữ liệu xong
    document.getElementById("formQLNV").reset();

    // getValueForm().reset();
    console.log(arrNhanVien);
    // document.getElementById("tableDanhSach").innerHTML = "11111";

}

//      Hiển thị nội dung lên giao diện
// let content = ""; 
function renderArrNhanVien (arr = arrNhanVien) {
    // Tạo vòng lặp duyệt NV trong mảng For of
    let content = "";       // chứa các giá trị hiển thị ra thẻ html
    for (let nhanVien of arr){
        let newArrNhanVien = new NhanVien();
        Object.assign(newArrNhanVien,nhanVien);
        // destructuring
        // lấy dữ liệu từ nhanVien

        let {tknv, name, email, datepicker, chucvu} = newArrNhanVien;

        // <td>${nhanVien.tongLuong()}</td>
        // <td>${nhanVien.xepLoai()}</td>
        content += `
        <tr>
            <td>${tknv}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${datepicker}</td>
            <td>${chucvu}</td>
            <td>${newArrNhanVien.tongLuong()}</td>
            <td>${newArrNhanVien.xepLoai()}</td>
            <td>
            <button onclick="deleteNhanVien('${tknv}')" class="btn btn-danger">Xoá</button>
            <button
                    onclick="getInforNhanVien('${tknv}')"
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
    // getLocalStorage();
}

//  lưu ý
// renderArrNhanVien();

//  gọi tới hàm lấy dữ liệu từ localStorage
getLocalStorage(); 
// getLocalStorage();


// 
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
function saveLocalStorage (key="arrNhanVien", value=arrNhanVien) {
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
        saveLocalStorage();
        document.getElementById("formQLNV").reset();
        // getValueForm().reset();
    }
}


//      Chức năng xóa
function deleteNhanVien (ftknv) {
    //      Tạo sự kiệ onclick tại nút button ở function render
    console.log(ftknv);
    // tìm vị trí của nhân viên đang cần xóa trong mảng
    //  Thực hiện cấc phương thúc xóa của măng
    //      Sử dụng findIndex
    let index = arrNhanVien.findIndex((item,index) => {
        return item.tknv == ftknv;
    });
    console.log(index);

    //  Xóa , nếu vị trí index != -1
    if (index != -1) {
        arrNhanVien.splice(index,1);

    // gọi đến render và saveLocal
    renderArrNhanVien();
    // luu y
    saveLocalStorage();
    };

}  


//  Lấy thông tin NV
//      Gắn vào btn-Sua
function getInforNhanVien (tknv) {
    //  tìm tới tknv , duyệt mảng arrNhanVien tìm tới phần tử và lấy thông tin
    //  sư dụng Find để lấy phần tử trong mảng
    let nhanVien = arrNhanVien.find((item,index) => {
        return item.tknv == tknv;
    });

    if (nhanVien) {
        //  Xử lý đưa dũ liệu nhân viên lên giao diện
        let arrField  = document.querySelectorAll("#formQLNV input,#formQLNV select");
        // console.log(arrField);
        for ( let field of arrField) {
            //  field đại diện cho từng input và select có trong mảng
            let id = field.id;
            field.value = nhanVien[id];
        }
        //  Chặn người dùng chỉnh sửa tknv
        document.getElementById("tknv").readOnly = true;
    }

    // renderArrNhanVien();

}


//      Cập nhật NV
function updateNhanVien () {
    console.log("update");
    // Lấy dữ liệu đã được sửa từ dùng
    //      Gọi tới hàm lấy dữ liệu để sử dụng
    let nhanVien = getValueForm();

    //              Lấy dữ liệu theo cách thườn
    // let arrField = document.querySelectorAll("#formQLNV input,#formQLNV select");        // DOM tới dữ liệu input và select
    // // console.log(arrField);

    // let nhanVien = new NhanVien();
    // // console.log(nhanVien);

    // //  vòng lặp for of để xử lý và lấy dữ liệu
    // for (let field of arrField) {
    //     // console.log(field);

    //     //      Lấy dữ liệu từ id và thêm vào arrnhanVien
    //     let {value, id} = field;
    //     nhanVien[id] = value;
    // }
    
    // Tìm kím vị trí của từng phần tử trong mảng
    let index = arrNhanVien.findIndex((item,index) => {
        return item.tknv == nhanVien.tknv;
    });

    if(index != -1) {
        arrNhanVien[index] = nhanVien;
        console.log(arrNhanVien);
        renderArrNhanVien(); 
        saveLocalStorage();
        document.getElementById("formQLNV").reset();
        alert("Cập nhật thành công");        
    };

    // Cập nhật lại dữ liệu

    // document.getElementById("myModal").style.display = "none";
    // document.getElementById("myModal").classList.remove("show");
    // document.getElementsByTagName("body").style.display = "none";
    // document.getElementsByTagName("body").classList.remove("modal-open");
}

// DOM tới btn-update
//          hàm updateNhanVien không có () Vì hàm chỉ chạy khi người dùng bấm click
//      Để truyền tham số vào ()  Thì
//      document.getElementById("btnCapNhatNV").onclick = function (){
//          updateNhanVien(Tham số);
//      };
//      
document.getElementById("btnCapNhatNV").onclick = updateNhanVien;


//          Chức năng tìm kíêm - search
//      Sử dụng onInput
function searchNhanVien (event) {
//      convert dữ liệu
//      - chuyển dữ liệu cần lọc thành chữ thường : toLowerCase
//      - Loại bỏ tất cả dấu tiếng việt
//      - Loại bỏ khoảng cách: trim

    let newKeyWord = removeVietnameseTones (
        event.target.value.toLowerCase().trim()
    );
    console.log(newKeyWord);

    //      Loc
    //      filter hoạt động hàm sẽ lọc và trả về arrNhanVienFilter
    //          Lọc theo tên
    let arrNhanVienFilter = arrNhanVien.filter((item,index) => {
        //      Kiểm tra keyword có đươc chứ trong tknv Nhân viên hay không
        let newTenNhanVien = removeVietnameseTones(
            item.tknv.toLowerCase().trim()
        );

        //      includes để kiểm tra 
        //      nam =>  n , na ,...
        return newTenNhanVien.includes(newKeyWord); 
    });

    //  Lọc theo TK
    let arrNhanVienFilterTK = arrNhanVien.filter((item,index) => {
        //      Kiểm tra keyword có đươc chứ trong tknv Nhân viên hay không
        let newTenNhanVien = removeVietnameseTones(
            item.name.toLowerCase().trim()
        );

        //      includes để kiểm tra 
        //      nam =>  n , na ,...
        return newTenNhanVien.includes(newKeyWord); 
    });

    // 
    let arrNhanVienFilterXL = arrNhanVien.filter((item,index) => {
        //      Kiểm tra keyword có đươc chứ trong tknv Nhân viên hay không
        // let xl = xepLoai();
        let newTenNhanVien = removeVietnameseTones(
            item.xepLoai().toLowerCase().trim()
        );

        //      includes để kiểm tra 
        //      nam =>  n , na ,...
        return newTenNhanVien.includes(newKeyWord); 
    });


    //      gọi hàm hiển thị 
    renderArrNhanVien(arrNhanVienFilter,arrNhanVienFilterTK,arrNhanVienFilterXL);

};
//      oninput
document.getElementById("searchName").oninput = searchNhanVien;



