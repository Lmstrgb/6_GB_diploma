<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item">
                <router-link to="/" class="navigation__link">О КОМПАНИИ</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/project" class="navigation__link">ПРОЕКТЫ</router-link>
            </li>
            <!-- <li class="navigation__item">
                <router-link to="/blog" class="navigation__link">НОВОСТИ</router-link>
            </li> -->
            <li class="navigation__item">
                <router-link to="/contacts" class="navigation__link">КОНТАКТЫ</router-link>
             </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
};
</script>

