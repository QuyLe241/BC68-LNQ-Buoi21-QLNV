//      Công ty
class CongTy {
    constructor() {
        this.DanhSachNhanVien = new Array();
    }

    ThemNhanVien (nhanVienMoi) {
        this.DanhSachNhanVien = [...this.DanhSachNhanVien, nhanVienMoi];
    }

    //          Tìm vị trí
    TimViTriTheoMa (maNV) {
        for (let vitri in this.DanhSachNhanVien) {
            if (this.DanhSachNhanVien[vitri].maNV === maNV){
                return vitri;
                break;
            }
        }
    }

//          Tìm nhân viên
    TimNhanVienTheoMa (maNV) {
        for (let nhanVien of this.DanhSachNhanVien){
            if (nhanVien.maNV === maNV){
                return nhanVien;
                break;
            }
        }
    }

    //      Xóa nhân viên
    XoaNhanVien (maNV) {
        let vitri = this.TimViTriTheoMa(maNV);
        this.DanhSachNhanVien.splice(vitri, 1);
    }

    //      Sửa thông tin nhân viên
    SuaNhanVien (nhanVien) {
        let vitri = this.TimViTriTheoMa(nhanVien.maNV);
        this.DanhSachNhanVien[vitri] = nhanVien;
    }

    //      Tìm nhân viên theo tên
    TimNhanVienTheoTen (hoTen) {
        let dskq = new Company();
        hoTen = hoTen.trim().toUpperCase();

        for (let nhanVien of this.DanhSachNhanVien) {
            let hoTenNV = nhanVien.hoTen.trim().toUpperCase();

            if (hoTenNV.search(hoTen) !== -1 ) {
                dskq.DanhSachNhanVien = [...dskq.DanhSachNhanVien, nhanVien];
            }
        }

        return dskq;
    }

    //      Sắp xếp danh sách nhân viên
    SapXepNhanVien(type) {
        if (type === 1) {
            this.DanhSachNhanVien.sort((a, b) => {
                let x = a.maNV.toLowerCase(); 
                let y = b.maNV.toLowerCase();
                if (x > y) { return 1;}
                if (x < y) { return -1;}
                return 0;
            })
        }   else {
            let x = a.maNV.toLowerCase(); 
                let y = b.maNV.toLowerCase();
                if (x > y) { return -1;}
                if (x < y) { return 1;}
                return 0;
        }

    }



}

