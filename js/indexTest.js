let nhanvien_1 = new NhanVien("abc", "Huỳnh Văn A", "huynhvana@gmail.com", "12345678", "6/6/2024", "1");

let nhanvien_2 = new NhanVien("bcd", "Ngô Văn B", "ngovanb@gmail.com", "12345678", "6/6/2024", "2");

let nhanvien_3 =new NhanVien("edf", "Nguyển Văn C", "nguyenvanc@gmail.com", "12345678", "6/6/2024", "2");

let nhanvien_4 =new NhanVien("aeg", "Nguyễn Thị D", "nguyenthid@gmail.com", "12345678", "6/6/2024", "2");

let nhanvien_1_1 =new NhanVien("cdh", "Nguyễn Thị F", "nguyenthif@gmail.com", "12345678", "6/6/2024", "3");

// 
let congty = new CongTy();
congty.ThemNhanVien(nhanvien_1);
congty.ThemNhanVien(nhanvien_2);
congty.ThemNhanVien(nhanvien_3);
congty.ThemNhanVien(nhanvien_4);


//      Gọi modal
goiModal = (modal_title, readonly = false, type = 1) => {
    document.getElementById("header-title").innerHTML = modal_title;
    document.getElementById("msnv").readonly = readonly;

    switch(type) {
        case 1:     //Thêm NV
            document.getElementById("btnThemNV").style.display = "block";
            document.getElementById("btnCapNhatNV").style.display = "none";
        break;

        case 2:     // Sửa thông tin
        document.getElementById("btnThemNV").style.display = "none";
        document.getElementById("btnCapNhatNV").style.display = "block";
        break;
    }
}

//      Xóa Form
XoaForm = () => {
    let elements = document.getElementsByClassName("input-sm");
    for (let element of elements) {
        element.value = "";     //
    }
    document.getElementById("chucvu").selectedIndex = 0;
}

let trangHienTai = 1;
HienThiDanhSach = (dsnv) => {
    let tbody = document.getElementById("tableDanhSach");
    tbody.innerHTML = "";

    let soNV = dsnv.length;
    let nv, tr, td ;

    let ulPhanTrang = document.getElementById("ulPhanTrang");
    ulPhanTrang.innerHTML = "";

    let soDong = 3;
    let soTrang = math.ceil(soNV / soDong);

    for (let i = 1; i <= soTrang; i++) {
        let li = document.createElement('li');
        ulPhanTrang.appendChild(li);

        let a = document.createElement('a');
        a.setAttribute("class", "page-link");
        a.setAttribute("id", "trang_" + i);
        a.innerHTML = i;
        li.appendChild(a);

        //  Chuyển trang
        ChuyenTrang("trang_" + i);      //
    }
    
    let batDau = (trangHienTai - 1) * soDong;
    let ketThuc = (trangHienTai) * soDong;

    if (soNV < ketThuc) {
        ketThuc = soNV;
    }

    for (let i=batDau; i < ketThuc; i++) {
        nv = dsnv[i];

        tr = document.createElement('tr');
        tbody.appendChild(tr);

        for (let j = 0; j < nv.mangDoiChieu.length; i++) {
            td = document.createElement('td');
            td.innerHTML = nv.mangDoiChieu[j];
            tr.appendChild(td); 
        }

        //      btnSua
        let btnSua = `<a class="btn btn-primary text-white" data-toggle="modal" href="#"></a> `
        let btnXoa = `<a class="btn btn-danger text-white ml-2" id="xoa_${nv.maNV}" href="#"></a>`

        td = document.createElement('td');
        td.innerHTML = btnSua + btnXoa;
        td.setAttribute("align", "center");
        tr.appendChild(td);

        //      event xóa và sửa
        SuaNhanVien("sua_" + nv.maNV);
        XoaNhanVien("Xoa_") + nv.maNV;
    }
}

//      Thêm NV
document.getElementById("btnThem").addEventListener("click", () => {
    XoaForm();
    GoiModal("Thêm Người Dùng");
})

// 
document.getElementById("btnThemNV").addEventListener("click", () => {
    let maNV = document.getElementById("msnv").value;
    let hoTen = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let matKhau = document.getElementById("password").value;
    let ngayLam = document.getElementById("datepicker").value;
    let chucVu = document.getElementById("chucvu").selectedIndex;

    let nhanvienmoi = new NhanVien(maNV, hoTen, email, matKhau, ngayLam, chucVu);
    congty.ThemNhanVien(nhanvienmoi);

    swal("Thêm Thành Công", "Danh Sách Nhân Viên Đã Được Cập Nhật", "Success");

    HienThiDanhSach(congty.DanhSachNhanVien);
})

//      Sửa thông tin nhân viên
SuaNhanVien = (idButton) => {
    document.getElementById("idButton").addEventListener("click", () => {
        let id = idButton;
        let mangTam = id.split("_");
        let maNV = mangTam[1];

        let nhanvien = congty.TimNhanVienTheoMa(maNV);

        document.getElementById("msnv").value = maNV;
        document.getElementById("name").value = nhanvien.hoTen;
        document.getElementById("email").value = nhanvien.email;
        document.getElementById("password").value = nhanvien.matKhau;
        document.getElementById("datepicker").value = nhanvien.ngayLamViec;
        document.getElementById("chucvu").selectedIndex = nhanvien.chucVu;

        GoiModal("Cập Nhật Thông Tin", true , 2);
    })
}

document.getElementById("btnCapNhatNV").addEventListener("click", () => 
    {
        let maNV = document.getElementById("msnv").value;
        let hoTen = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let matKhau = document.getElementById("password").value;
        let ngayLam = document.getElementById("datepicker").value;
        let chucVu = document.getElementById("chucvu").selectedIndex;

        let nhanvienmoi = new NhanVien(maNV, hoTen, email, matKhau, ngayLam, chucVu);
        congty.SuaNhanVien(nhanvienmoi);

        swal("Cập Nhật Thành Công", "Danh Sách Nhân Viên Đã Được Cập Nhật", "success");
        HienThiDanhSach(congty.DanhSachNhanVien);

    })

    //      Xóa nhân viên
XoaNhanVien = (idButton) => {
    document.getElementById("idButton").addEventListener("click", () => {
        swal({
            title: "Bạn có muốn xóa ?",
            text: "Nếu xóa sẽ không thể khổi phục lại được",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                id = idButton;
                let mangTam = id.split("_");
                let maNV = mangTam[1];

                congty.XoaNhanVien(maNV);
                HienThiDanhSach(congty.DanhSachNhanVien);
                swal("Đã xóa thành công", {
                    icon: "success",

                });

            } else {
                swal("Dữ liệu an toàn");
            }
        });
    })
}

//      Tìm NV theo tên
document.getElementById("searchName").addEventListener("click", () => {
    let tukhoa = document.getElementById("searchName").value;
    let dskq = congty.TimNhanVienTheoTen(tukhoa);
    HienThiDanhSach(dskq.DanhSachNhanVien);
})

// 
document.getElementById("SapXepTang").addEventListener("click", () => {
    document.getElementById("SapXepTang").style.display = "none";
    document.getElementById("SapXepGiam").style.display = "inline";
})

// 
document.getElementById("SapXepTang").addEventListener("click", () => {
    document.getElementById("SapXepTang").style.display = "inline";
    document.getElementById("SapXepGiam").style.display = "none";
    congty.SapXepNhanVien(-1);
    HienThiDanhSach(congty.DanhSachNhanVien);
})

// chuyen trang
ChuyenTrang = (idButton) => {
    document.getElementById("idButton").addEventListener("click", () => {
        let id = idButton;
        let mangTam = id.split("_");
        trangHienTai = mangTam[1];
        HienThiDanhSach(congty.DanhSachNhanVien);
    })
}

//      Hiển thị danh sách ra ngoài màn hình
HienThiDanhSach(congty.DanhSachNhanVien);
document.getElementById("btnThemNV").innerHTML = `${HienThiDanhSach}`;