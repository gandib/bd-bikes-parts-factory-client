import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer class="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span class="footer-title">Services</span>
                    <Link to='/' class="link link-hover">Home</Link>
                    <Link to='/blog' class="link link-hover">Blog</Link>
                    <Link to='/myportfolio' class="link link-hover">Portfolio</Link>
                    <Link to='/signup' class="link link-hover">Signup</Link>
                </div>

                <div>
                    <span class="footer-title">Legal</span>
                    <Link to='' class="link link-hover">Terms of use</Link>
                    <Link to='' class="link link-hover">Privacy policy</Link>
                    <Link to='' class="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span class="footer-title">Newsletter</span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text">Enter your email address</span>
                        </label>
                        <div class="relative">
                            <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;