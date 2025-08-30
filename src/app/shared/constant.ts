export const NETWORK_STATUS = {
    OFFLINE: 'Không có mạng',
    SLOW: 'Kém',
    AVERAGE: 'Trung bình',
    GOOD: 'Tốt'
}

export const CHUC_NANG_QUAN_LY_SAY_GO = [
    {
        tab: 0,
        title: 'Xếp sấy',
    },
    {
        tab: 1,
        title: 'Tạo kế hoạch sấy',
    },
    {
        tab: 2,
        title: 'Vào lò',
    },
    {
        tab: 3,
        title: 'Kiểm tra lò sấy',
    },
    {
        tab: 4,
        title: 'Lò sấy',
    },
    {
        tab: 5,
        title: 'Đánh giá mẻ sấy',
    },
]

// Woodsland App Permission
const GUARD_NAME_MES = "web";

export const FUNCTION_NAME = [
    {
        id: 1,
        name: "Chức năng quản lý sấy gỗ"
    },
    {
        id: 2,
        name: "Chức năng quản lý sản xuất"
    },
    {
        id: 3,
        name: "Chức năng quản lý hàng hóa"
    },
    {
        id: 4,
        name: "Chức năng quản trị"
    },
    {
        id: 5,
        name: "Báo cáo sấy phôi",
    },
    {
        id: 6,
        name: "Báo cáo chế biến gỗ",
    },
    {
        id: 7,
        name: "Báo cáo ván công nghiệp",
    }
]

export const PERMISSION_NAME = {
    XEP_SAY: "XEP_SAY",
    KE_HOACH_SAY: "KE_HOACH_SAY",
    VAO_LO: "VAO_LO",
    KIEM_TRA_LO_SAY: "KIEM_TRA_LO_SAY",
    LO_SAY: "LO_SAY",
    DANH_GIA_ME_SAY: "DANH_GIA_ME_SAY",
    SAN_LUONG_CHE_BIEN_GO: "SAN_LUONG_CHE_BIEN_GO",
    KIEM_DINH_CHAT_LUONG_CHE_BIEN_GO: "KIEM_DINH_CHAT_LUONG_CHE_BIEN_GO",
    SAN_LUONG_VAN_CONG_NGHIEP: "SAN_LUONG_VAN_CONG_NGHIEP",
    KIEM_DINH_CHAT_LUONG_VAN_CONG_NGHIEP: "KIEM_DINH_CHAT_LUONG_VAN_CONG_NGHIEP",
    SAN_LUONG_NOI_DIA: "SAN_LUONG_NOI_DIA",
    TIEN_DO_LAP_DAT_NOI_DIA: "TIEN_DO_LAP_DAT_NOI_DIA",
    DIEU_CHUYEN_HANG_HOA_THEO_BIN: "DIEU_CHUYEN_HANG_HOA_THEO_BIN",
    QUAN_LY_NGUOI_DUNG: "QUAN_LY_NGUOI_DUNG",
    QUAN_LY_ROLE: "QUAN_LY_ROLE",
    BAO_CAO_BIEN_BAN_VAO_LO: "BAO_CAO_BIEN_BAN_VAO_LO",
    BAO_CAO_BIEN_BAN_KIEM_TRA_LO_SAY: "BAO_CAO_BIEN_BAN_KIEM_TRA_LO_SAY",
    BAO_CAO_KE_HOACH_SAY: "BAO_CAO_KE_HOACH_SAY",
    BAO_CAO_XEP_SAY_KHOI_CHE_BIEN_GO: "BAO_CAO_XEP_SAY_KHOI_CHE_BIEN_GO",
    BAO_CAO_XEP_CHO_SAY: "BAO_CAO_XEP_CHO_SAY",
    BAO_CAO_THONG_TIN_SAN_LUONG_NHAN_TAI_SAP: "BAO_CAO_THONG_TIN_SAN_LUONG_NHAN_TAI_SAP",
    BAO_CAO_THONG_TIN_CHI_TIET_GIAO_NHAN: "BAO_CAO_THONG_TIN_CHI_TIET_GIAO_NHAN",
    BAO_CAO_BIEN_PHAP_XU_LY_LOI: "BAO_CAO_BIEN_PHAP_XU_LY_LOI",
    BAO_CAO_TON_NGUYEN_VAT_LIEU_XU_LY_LOI: "BAO_CAO_TON_NGUYEN_VAT_LIEU_XU_LY_LOI",
    BAO_CAO_SAN_LUONG_THEO_NGAY_TUAN_THANG: "BAO_CAO_SAN_LUONG_THEO_NGAY_TUAN_THANG",
    BAO_CAO_SAN_LUONG_CHI_TIET_THEO_TUAN: "BAO_CAO_SAN_LUONG_CHI_TIET_THEO_TUAN",
    BAO_CAO_NHAP_XUAT_TON_THEO_CONG_DOAN: "BAO_CAO_NHAP_XUAT_TON_THEO_CONG_DOAN",
    BAO_CAO_SAN_LUONG_THEO_LENH_SAN_XUAT: "BAO_CAO_SAN_LUONG_THEO_LENH_SAN_XUAT",
    BAO_CAO_DIEU_CHUYEN_CAC_NHA_MAY: "BAO_CAO_DIEU_CHUYEN_CAC_NHA_MAY",
    BAO_CAO_VCN_THONG_TIN_SAN_LUONG_NHAN_TAI_SAP: "BAO_CAO_VCN_THONG_TIN_SAN_LUONG_NHAN_TAI_SAP",
    BAO_CAO_VCN_BIEN_PHAP_XU_LY_LOI: "BAO_CAO_VCN_BIEN_PHAP_XU_LY_LOI",
    BAO_CAO_VCN_NHAP_XUAT_TON_THEO_CONG_DOAN: "BAO_CAO_VCN_NHAP_XUAT_TON_THEO_CONG_DOAN",
    BAO_CAO_VCN_SAN_LUONG_THEO_LENH_SAN_XUAT: "BAO_CAO_VCN_SAN_LUONG_THEO_LENH_SAN_XUAT",
    BAO_CAO_VCN_SAN_LUONG_THEO_NGAY_TUAN_THANG: "BAO_CAO_VCN_SAN_LUONG_THEO_NGAY_TUAN_THANG"
}

export const WL_PERMISSION_BASE = [
    {
        id: 1,
        name: PERMISSION_NAME.XEP_SAY,
        guard_name: GUARD_NAME_MES,
        label: "Xếp sấy",
        function_id: 1
    },
    {
        id: 2,
        name: PERMISSION_NAME.KE_HOACH_SAY,
        guard_name: GUARD_NAME_MES,
        label: "Kế hoạch sấy",
        function_id: 1
    },
    {
        id: 3,
        name: PERMISSION_NAME.VAO_LO,
        guard_name: GUARD_NAME_MES,
        label: "Vào lò",
        function_id: 1
    },
    {
        id: 4,
        name: PERMISSION_NAME.KIEM_TRA_LO_SAY,
        guard_name: GUARD_NAME_MES,
        label: "Kiểm tra lò sấy",
        function_id: 1
    },
    {
        id: 5,
        name: PERMISSION_NAME.LO_SAY,
        guard_name: GUARD_NAME_MES,
        label: "Lò sấy",
        function_id: 1
    },
    {
        id: 6,
        name: PERMISSION_NAME.DANH_GIA_ME_SAY,
        guard_name: GUARD_NAME_MES,
        label: "Đánh giá mẻ sấy",
        function_id: 1
    },
    {
        id: 7,
        name: PERMISSION_NAME.SAN_LUONG_CHE_BIEN_GO,
        guard_name: GUARD_NAME_MES,
        label: "Sản lượng chế biến gỗ",
        function_id: 2
    },
    {
        id: 8,
        name: PERMISSION_NAME.KIEM_DINH_CHAT_LUONG_CHE_BIEN_GO,
        guard_name: GUARD_NAME_MES,
        label: "Kiểm định chất lượng chế biến gỗ",
        function_id: 2
    },
    {
        id: 9,
        name: PERMISSION_NAME.SAN_LUONG_VAN_CONG_NGHIEP,
        guard_name: GUARD_NAME_MES,
        label: "Sản lượng ván công nghiệp",
        function_id: 2
    },
    {
        id: 10,
        name: PERMISSION_NAME.KIEM_DINH_CHAT_LUONG_VAN_CONG_NGHIEP,
        guard_name: GUARD_NAME_MES,
        label: "Kiểm định chất lượng ván công nghiệp",
        function_id: 2
    },
    {
        id: 11,
        name: PERMISSION_NAME.SAN_LUONG_NOI_DIA,
        guard_name: GUARD_NAME_MES,
        label: "Sản lượng nội địa",
        function_id: 2
    },
    {
        id: 12,
        name: PERMISSION_NAME.TIEN_DO_LAP_DAT_NOI_DIA,
        guard_name: GUARD_NAME_MES,
        label: "Tiến độ lắp đặt nội địa",
        function_id: 2
    },
    {
        id: 13,
        name: PERMISSION_NAME.DIEU_CHUYEN_HANG_HOA_THEO_BIN,
        guard_name: GUARD_NAME_MES,
        label: "Điều chuyển hàng hóa theo BIN",
        function_id: 3
    },
    {
        id: 14,
        name: PERMISSION_NAME.QUAN_LY_NGUOI_DUNG,
        guard_name: GUARD_NAME_MES,
        label: "Quản lý người dùng",
        function_id: 4
    },
    {
        id: 15,
        name: PERMISSION_NAME.QUAN_LY_ROLE,
        guard_name: GUARD_NAME_MES,
        label: "Quản lý role",
        function_id: 4
    },
    {
        id: 16,
        name: PERMISSION_NAME.BAO_CAO_BIEN_BAN_VAO_LO,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo biên bản vào lò",
        function_id: 5
    },
    {
        id: 17,
        name: PERMISSION_NAME.BAO_CAO_BIEN_BAN_KIEM_TRA_LO_SAY,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo biên bản kiểm tra lò sấy",
        function_id: 5
    },
    {
        id: 18,
        name: PERMISSION_NAME.BAO_CAO_KE_HOACH_SAY,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo kế hoạch sấy",
        function_id: 5
    },
    {
        id: 19,
        name: PERMISSION_NAME.BAO_CAO_XEP_SAY_KHOI_CHE_BIEN_GO,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo xếp sấy khối chế biến gỗ",
        function_id: 5
    },
    {
        id: 20,
        name: PERMISSION_NAME.BAO_CAO_XEP_CHO_SAY,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo xếp chờ sấy",
        function_id: 5
    },
    {
        id: 21,
        name: PERMISSION_NAME.BAO_CAO_THONG_TIN_SAN_LUONG_NHAN_TAI_SAP,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo thông tin sản lượng nhận tại SAP",
        function_id: 6
    },
    {
        id: 22,
        name: PERMISSION_NAME.BAO_CAO_THONG_TIN_CHI_TIET_GIAO_NHAN,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo thông tin sản lượng nhận tại SAP",
        function_id: 6
    },
    {
        id: 23,
        name: PERMISSION_NAME.BAO_CAO_BIEN_PHAP_XU_LY_LOI,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo biện pháp xử lý lỗi",
        function_id: 6
    },
    {
        id: 24,
        name: PERMISSION_NAME.BAO_CAO_TON_NGUYEN_VAT_LIEU_XU_LY_LOI,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo tồn nguyên liệu xử lý lỗi",
        function_id: 6
    },
    {
        id: 25,
        name: PERMISSION_NAME.BAO_CAO_SAN_LUONG_THEO_NGAY_TUAN_THANG,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo sản lượng theo ngày/tuần/tháng",
        function_id: 6
    },
    {
        id: 26,
        name: PERMISSION_NAME.BAO_CAO_SAN_LUONG_CHI_TIET_THEO_TUAN,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo sản lượng chi tiết theo tuần",
        function_id: 6
    },
    {
        id: 27,
        name: PERMISSION_NAME.BAO_CAO_NHAP_XUAT_TON_THEO_CONG_DOAN,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo nhập xuất tồn theo công đoạn",
        function_id: 6
    },
    {
        id: 28,
        name: PERMISSION_NAME.BAO_CAO_SAN_LUONG_THEO_LENH_SAN_XUAT,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo sản lượng theo lệnh sản xuất",
        function_id: 6
    },
    {
        id: 29,
        name: PERMISSION_NAME.BAO_CAO_DIEU_CHUYEN_CAC_NHA_MAY,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo điều chuyển các nhà máy",
        function_id: 6
    },
    {
        id: 30,
        name: PERMISSION_NAME.BAO_CAO_VCN_THONG_TIN_SAN_LUONG_NHAN_TAI_SAP,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo VCN thông tin sản lượng nhận tại SAP",
        function_id: 7
    },
    {
        id: 31,
        name: PERMISSION_NAME.BAO_CAO_VCN_BIEN_PHAP_XU_LY_LOI,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo biện pháp xử lý lỗi",
        function_id: 7
    },
    {
        id: 32,
        name: PERMISSION_NAME.BAO_CAO_VCN_NHAP_XUAT_TON_THEO_CONG_DOAN,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo nhập xuất tồn theo công đoạn",
        function_id: 7
    },
    {
        id: 33,
        name: PERMISSION_NAME.BAO_CAO_VCN_SAN_LUONG_THEO_LENH_SAN_XUAT,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo sản lượng theo lệnh sản xuất",
        function_id: 7
    },
    {
        id: 33,
        name: PERMISSION_NAME.BAO_CAO_VCN_SAN_LUONG_THEO_NGAY_TUAN_THANG,
        guard_name: GUARD_NAME_MES,
        label: "Báo cáo sản lượng theo ngày/tuần/tháng",
        function_id: 7
    }
]


export const UNAUTHORIZED_STATUS = 401;
export const BAD_REQUEST_STATUS = 400;
export const NOT_FOUND_STATUS = 404;
export const FORBIDDEN_STATUS = 403;
export const SERVICE_UNAVAILABLE_STATUS = 503;
export const SERVER_INTERNAL_ERROR_STATUS = 500;

export const NAVBAR_MENU = [
    { label: 'Trang chủ', icon: 'fa-solid fa-house', url: '' },
    { label: 'Quản lý sấy gỗ', icon: 'fa-solid fa-industry', url: 'quan-ly-say-go' },
    { label: 'Quản lý sản xuất', icon: 'fa-solid fa-industry', url: 'quan-ly-san-xuat' },
    { label: 'Quản lý hàng hóa', icon: 'fa-solid fa-industry', url: 'quan-ly-hang-hoa' },
    { label: 'Quản lý người dùng', icon: 'fa-solid fa-user', url: 'quan-ly-nguoi-dung' },
    { label: 'Báo cáo', icon: 'fa-solid fa-file', url: 'bao-cao' },
];
