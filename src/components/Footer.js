const Footer=()=>{
    return(<footer class="fixed-bottom p-3 bg-dark text-white">
                <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">                                                      
                           <p class="text-secondary">Test {new Date().getFullYear()}</p>
                        </div>
                    </div>
           </footer>);
}

export default Footer;