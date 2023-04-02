class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ``
    }
}
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-12">
                <h3>Website Sepak Bola</h3>
                <p>Indonesia batal jadi tuan rumah Piala Dunia U-20, kemarahan warganet tertuju pada Ganjar Pranowo dan I Wayan Koster.</p>
            </div>
            <div class="col-md-4 col-sm-12">
                <h3>Tentang Kami</h3>
                <p>
                Kami kelompok 2 dari kelas IV-D. Kami membuat website ini untuk memenuhi tugas mata kuliah Pemrograman Web pada semester 4.
                </p>
            </div>
            <div class="col-md-4">
                <h3>Follow Us</h3>
                <ul class="list-unstyled">
                    <li><a href="https://github.com/shuyshuys/pemweb-uts-inball"><i class="fa-brands fa-github"></i> Github</a></li>
                    <li><a href="https://www.infinityfree.net"><i class="fa-solid fa-infinity"></i> Infinity Free for hositng</a></li>
                </ul>
            </div>
        </div>
        `
    }
}


customElements.define('header-component', Header);
customElements.define('footer-component', Footer);

customElements.define('header-component', Header);
customElements.define('footer-component', Footer);