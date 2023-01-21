
<template>
    <div class="glass_bar">
        <div class="d-flex flex-column flex-shrink-0 " style="width: 4.5rem;">
            <a href="/" class="d-block p-3 link-dark text-decoration-none " title="" data-bs-toggle="tooltip"
                data-bs-placement="right" data-bs-original-title="Icon-only">

                <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    class="bi bi-arrow-down-right-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z" />
                </svg>
                <span class="visually-hidden">Icon-only</span>
            </a>
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
       
                <li>
                    <a href="#" class="nav-link py-3 active" title="" data-bs-toggle="tooltip"
                        data-bs-placement="right" data-bs-original-title="Dashboard">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-arrow-down-right-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link py-3 " title="" data-bs-toggle="tooltip"
                        data-bs-placement="right" data-bs-original-title="Orders">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-arrow-down-right-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link py-3 " title="" data-bs-toggle="tooltip"
                        data-bs-placement="right" data-bs-original-title="Products">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-arrow-down-right-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link py-3 " title="" data-bs-toggle="tooltip"
                        data-bs-placement="right" data-bs-original-title="Customers">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-arrow-down-right-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z" />
                        </svg>
                    </a>
                </li>
            </ul>
            <div class="dropdown border-top">
                <a href="#"
                    class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none "
                    id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false" >
                    <img src="@/assets/image/avater.png" alt="mdo" width="45" height="45" style="background-color: white;" class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small shadow "  aria-labelledby="dropdownUser3">
                    <li><a class="dropdown-item" href="#">プロフィール編集</a></li>
                    <li><a class="dropdown-item" href="#">設定</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">ログアウト</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav-link.active{
    color: aqua;
    background-color: #00aed6;
}
.nav-link{
    color: white;
}
.target {
  color: red;
  border-bottom: 1px solid currentColor; /* color で指定している色が適応される */
}
.glass_bar {

    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 5;
    /* padding: 1rem;   nav太くする用 */
    color: white;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>

<script>
import { Toast } from 'bootstrap';

export default {
    name: 'BootstrapToast',

};
</script>