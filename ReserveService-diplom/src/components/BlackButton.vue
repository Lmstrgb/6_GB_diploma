<template>
    <div class="button__box">
        <router-link :to="link" class="btn"> 
            <!-- class="button__content button__paddings" -->
            {{ buttonText }}
            <!-- <svg class="button__arrow" width="19" height="17" viewBox="0 0 19 17" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
                    stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            </svg> -->
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'BlackButton',

    props: {
        buttonText: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/black-button.scss';

</style>