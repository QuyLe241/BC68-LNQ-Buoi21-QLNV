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
function checkMinMaxValue(value,errorField,min,max) {
    if (min <= value.length && value.length <= max) {
        //      Đúng với dữ liệu quy định
        errorField.innerHTML = "";
        return true;
    } else {
        errorField.innerHTML = `Số ký tự ${min} đến ${max}`;
        getValueForm().reset();     //
        return false;
    };
};

//      Kiểm tra password
function checkMinMaxPassword(value,errorField,min,max) {
    if (min <= value.length && value.length <= max) {
        //      Đúng với dữ liệu quy định
        errorField.innerHTML = "";
        return true;
    } else {
        errorField.innerHTML = `Số ký tự ${min} đến ${max}`;
        getValueForm().reset();     //
        return false;
    };
};

//      Kiểm tra email
function checkEmail (value,errorField) {
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // sử dụng chuỗi regex để kiểm tra value
    let isValisd = regexEmail.test(value);

    if (isValisd) {
        //      Đúng định dạng mail
        errorField.innerHTML = "";
        return true;
    } else {
        errorField.innerHTML = "Nhập đúng định dạng mail.";
        getValueForm().reset();     //
        return false;       //
    };

};

//      Kiểm tra lương
function checkSalary (value,min,max,errorField) {
    //      đúng
    if (min <= value && value <= max) {
        errorField.innerHTML = "";
        return true;
    } else {
        errorField.innerHTML = `Lương từ ${min} đến ${max}`;
        getValueForm().reset();     // 
        return false;
    };
};

//      Kiểm tra số giờ làm
function checkTime (value,min,max,errorField) {
    //      đúng
    if (min <= value && value <= max) {
        errorField.innerHTML = "";
        return true;
    } else {
        errorField.innerHTML = `Giờ làm từ ${min} đến ${max}`;
        getValueForm().reset();
        return false;
    };
};

//      Kiểm tra số điện thoại
// function checkPhoneNumber (value,errorField) {
//     //      regex +84
//     //      /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/
//     let regexPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
//     let isValisd = regexPhone.test(value);
//      if (isValisd) {
//         //  SDT đúng
//         errorField.innerHTML = "";
//         return true;
//      } else {
//         errorField.innerHTML = "Nhập đúng Định dạng VN";
//         return false;
//      };
// };

