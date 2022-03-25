import React from "react";

function Footer (){
    return (
        <React.Fragment>
           <div className="w-full h-auto bg-[#1e1e27] mt-10 py-10">
                <div className="text-white w-5/6 m-auto h-72 flex justify-between items-center">
                    <div className="w-1/5 h-full pt-10 flex flex-col items-start">
                        <div className="font-medium">
                            THỂ LOẠI
                        </div>
                        <div className="mt-10 flex flex-col items-start">
                            <div className="mb-3">Nam</div>
                            <div className="">Nữ</div>
                        </div>
                    </div>
                    <div className="w-1/5 h-full pt-10 flex flex-col items-start">
                        <div className="font-medium">
                            CỨU GIÚP
                        </div>
                        <div className="mt-10 flex flex-col items-start">
                            <div className="">Theo dõi thứ tự</div>
                            <div className="mt-3">Lợi nhuận</div>
                            <div className="mt-3">Đang chuyển hàng</div>
                            <div className="mt-3">Câu hỏi thường gặp</div>
                        </div>
                    </div>
                    <div className="w-1/5 h-full pt-10 flex flex-col items-start">
                        <div className="font-medium">
                            LIÊN LẠC
                        </div>
                        <div className="mt-10 flex flex-col items-start">
                           <div className="text-left">
                                Có câu hỏi nào không ? Hãy cho chúng tôi biết tại cửa hàng HAI BÀ TRƯNG, CỬA NAM, HOÀN KIẾM, HÀ NỘI, hoặc gọi cho chúng tôi theo số (+1)96 716 6879
                           </div>
                        </div>
                    </div>
                    <div className="w-1/5 h-full pt-10 flex flex-col items-start">
                        <div className="font-medium">
                            THÔNG TIN
                        </div>
                        <div className="mt-10 flex flex-col items-start">
                            <div className="">Về chúng tôi</div>
                            <div className="mt-3">Thông tin giao hàng</div>
                            <div className="mt-3">Chính sách bảo mật</div>
                            <div className="mt-3">Điều khoản và điều kiện</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;