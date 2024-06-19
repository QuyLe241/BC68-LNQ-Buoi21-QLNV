//      Kiểu dữ liệu rỗng
function checkEmptyValue (value,errorField) {
    //      Kiểm tra lỗi cho người dùng '
    if (!value) {
        //  Không có dữ liệu
        // document.getElementsByClassName("sp-thongbao").innerHTML = "Vui lòng không bỏ trống.";
        errorField.innerHTML = "Vui lòng không bỏ trống.";
        // return renderArrNhanVien();
        return false;
    } else {
        errorField.innerHTML = "";
        return true;
    }
}