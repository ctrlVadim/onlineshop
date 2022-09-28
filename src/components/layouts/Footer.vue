<template>
    <footer class="footer">
        <ul class="footer__nav">
            <li>
                <router-link active-class="active" :to="{name: 'home'}">
                    <img src="@/assets/img/icon/home.svg" alt="">
                </router-link>
            </li>
            <li>
                <router-link active-class="active" :to="{name: 'catalog'}">
                    <img src="@/assets/img/icon/wallet.svg" alt="">
                </router-link>
            </li>
            <li>
                <router-link active-class="active" :to="{name: 'cart'}">
                    <img src="@/assets/img/icon/cart.svg" alt="">
                </router-link>
            </li>
            <li>
                <router-link active-class="active" :to="{name: 'profile'}">
                    <img src="@/assets/img/icon/user.svg" alt="">
                </router-link>
            </li>
        </ul>
    </footer>
</template>

<script>

</script>
