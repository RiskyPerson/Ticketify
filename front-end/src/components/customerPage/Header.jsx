import React, { useEffect, useState, useRef } from "react";
import SearchButton from './SearchButton'

function HomepageHeader(username) {
    useEffect(() => {
        return () => {
            $('.btn-logout').on('click', function () {
                $('#logoutModal').modal('show');
            });
            $('.close-logout').on('click', function () {
                $('#logoutModal').modal('hide');
            });
            
        }
    }, []);
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#FFF1A8' }}>
            <div className="container-fluid d-flex justify-content-center">
                <a className="navbar-brand" href="/"><img src="/Logo.png" style={{ height: '3rem' }} alt='logo'></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav nav-bar">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Phim mới</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Phim đánh giá cao</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Thể loại
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <SearchButton />
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav nav-bar">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {username.username}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item btn-logout" href="#" >Đăng xuất</a></li>
                                <li><a className="dropdown-item btn-changePW" href="#">Đổi mật khẩu</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HomepageHeader