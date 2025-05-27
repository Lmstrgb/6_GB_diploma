<template>
    <section class="banner center">
        <div class="banner__content">
            <div class="banner__subcontent-box">
                <div class="bunner__subcontent">
                    <h3 class="banner__subcontent-heading">Быстрая диагностика сложных неисправностей</h3>
                    <p class="banner__subcontent-text">Если у вас сложная неисправность оборудования, требуется настройка, запуск или сервисное обслуживание станков, систем автоматизации</p>
                </div>
                <BlackButton :button-text="buttonText" :link="link"/>
                <!-- class="button" -->
            </div>
        </div>
    </section>
    <section class="project center">
        <div class="project__content">
            <h2 class="project__heading">Резерв сервис</h2>
            <div class="project__text-box">
                <p class="project__text">
                    Предлагает полный спектр решений по диагностике, оптимизации и повышению эффективности работы Вашего оборудования
                </p>
            </div>
            <div class="project__items">
                <div v-for="(project, index) in listOfProjects" :key="project.id" class="project__item">
                    <img class="project__item-image" 
                        :class="`project__item-image--${index + 1}`" 
                        :src="project.src" 
                        :alt="project.alt">
                    <div class="project__item-content">
                        <div class="project__item-box">
                            <p class="project__item-title">{{ project.firstparagraph }}</p>
                            <p class="project__item-subtitle">{{ project.secondparagraph }}</p>
                        </div>
                        <router-link :to="secondLink" class="project__item-button">
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.27101 14.9525L7.21387 8.26683L1.27101 1.58112" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="counter">
        <div class="counter__content">
            <div class="counter__content-items">
                <div v-for="counter in listOfCounters" :key="counter.id" class="counter__content-item">
                    <p class="content-item__number">{{ counter.number }}</p>
                    <p class="content-item__text">{{ counter.text }}</p>
                </div>
            </div>
        </div>
    </div>
    <section class="blog center">
        <div class="blog__content">
            <h2 class="blog__heading">Выполненные работы</h2>
            <div class="blog__text-box ">
                <p class="blog__text">Все работы были выполнены в срок и без претензий со стороны заказчика</p>
            </div>
            <div class="blog__items">
                <ArticleCard v-for="item in listOfBlogs" :item="item" />
            </div>
        </div>
    </section>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'
import BlackButton from '@/components/BlackButton.vue';

export default {
    name: 'HomePage',

    components: {
        ArticleCard,
        BlackButton
    },

    data() {
        return {
            buttonText: 'Напишите нам',
            link: '/Contacts',
            secondLink: '/Contacts',
            listOfProjects: [
                {
                    id: 'first-project', 
                    src: require('@/assets/images/rs/machine/machine_freepik.jpg'), 
                    alt: 'first project', 
                    firstparagraph: 'Станки 500VT', 
                    secondparagraph: 'ТО / Ремонт'
                },
                {
                    id: 'second-project', 
                    src: require('@/assets/images/rs/automation/plc-scada-based-control-solutions-img.jpg'), 
                    alt: 'second project', 
                    firstparagraph: 'Автоматизация', 
                    secondparagraph: 'ПНР / Доработка'
                },
                {
                    id: 'third-project', 
                    src: require('@/assets/images/rs/automation/crystal-kwok-unsplash.jpg'), 
                    alt: 'third project', 
                    firstparagraph: 'Автоматизация', 
                    secondparagraph: 'ТО / Ремонт'
                },
                {
                    id: 'fourth-project', 
                    src: require('@/assets/images/rs/machine/Machine_1-unsplash.jpg'), 
                    alt: 'fourth project', 
                    firstparagraph: 'Станки', 
                    secondparagraph: 'ТО / Ремонт'
                }
            ],
            listOfCounters: [
                {
                    id: 'first-counter', 
                    number: '12', 
                    text: 'Лет опыта'
                },
                {
                    id: 'second-counter', 
                    number: '85', 
                    text: 'Успешных проектов'
                },
                {
                    id: 'third-counter', 
                    number: '15', 
                    text: 'Активных проекта'
                },
                {
                    id: 'fourth-counter', 
                    number: '95', 
                    text: 'Счастливых заказчиков'
                }
            ],
            listOfBlogs: [
                {
                    id: 'first-blog', 
                    src: require('@/assets/images/rs/machine/Tagil_500VT.jpg'), 
                    alt: 'first blog', 
                    tag: 'Станок 500VT', 
                    title: 'Стерлитамакские станки на УВЗ, Н.Тагил', 
                    date: 'Октябрь,2020'
                },
                {
                    id: 'second-blog', 
                    src: require('@/assets/images/rs/machine/Tagil_CKD.jpg'), 
                    alt: 'second blog', 
                    tag: 'Станок CKD', 
                    title: 'Чешский станок TOS', 
                    date: 'Август,2020'
                },
                {
                    id: 'third-blog', 
                    src: require('@/assets/images/rs/automation/kogalim/SIKN.jpg'), 
                    alt: 'third blog', 
                    tag: 'АРМ СИКН', 
                    title: 'Доработка проекта', 
                    date: 'Декабрь,2020'
                }
            ]
        };
    },
};
</script>

<style lang="scss" scoped>
.button :deep(.button__paddings) {
    padding: 26px 49px 26px 48px;
}
</style>