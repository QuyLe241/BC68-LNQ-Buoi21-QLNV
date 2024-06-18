class NhanVien {
    constructor() {
        this.tknv = "";
        this.name = "";
        this.email = "";
        this.password = "";
        this.datepicker = "";
        this.luongCB = "";
        this.chucvu = "";
        this.gioLam = "";

    }

    //  method Tính lương tổng và xếp loại

    // tongluong
    tongLuong = function() {
        if (this.chucvu == "Sếp") {
            return this.luongCB * 3;
        };
        if (this.chucvu == "Trưởng phòng") {
            return this.luongCB * 2;
        };
        if (this.chucvu == "Nhân viên") {
            return this.luongCB * 1;
        };
    };

    // Xếp loại
    xepLoai = function() {
        if (this.gioLam >= 0 && this.gioLam < 160) {
            xepLoai = "Trung Bình";
        };
        if (this.gioLam >= 160) {
            xepLoai = "Khá";
        };
        if (this.gioLam >= 176) {
            xepLoai = "Giỏi";
        };
        if (this.gioLam >= 192) {
            xepLoai = "Xuất Sắc";
        };
    };
}