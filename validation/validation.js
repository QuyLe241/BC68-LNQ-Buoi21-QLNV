//      Kiểu dữ liệu rỗng
function checkEmptyValue (value,errorField) {
    //      Kiểm tra lỗi cho người dùng '
    if (!value) {
        //  Không có dữ liệu
        // alert("Vui lòng không bỏ trống.");
        // document.getElementsByClassName("sp-thongbao").innerHTML = "Vui lòng không bỏ trống.";
        errorField.innerHTML = "Vui lòng không bỏ trống.";
        getValueForm().reset(); 
        // return renderArrNhanVien();
        return false;    
    } else {
        errorField.innerHTML = "";
        return true;
    };
};


//      Kiểm tra độ dài chuỗi
function checkLenghtValue(value,errorField,min,max) {

}