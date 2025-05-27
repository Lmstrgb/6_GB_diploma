<template>
  <section class="projects-intro">
    <div class="projects-intro__content">
      <div class="projects-intro__title-content">
        <h2 class="projects-intro__heading">Наши проекты</h2>
        <ul class="projects-intro__breadcrumbs">
          <li class="projects-intro__breadcrumbs-item">
            <router-link to="/" class="projects-intro__breadcrumbs-link"
              >О НАС</router-link
            >
          </li>
          <li class="projects-intro__breadcrumbs-item">
            <a href="#" class="projects-intro__breadcrumbs-link">ПРОЕКТЫ</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <div class="projects center">
    <div class="projects__content">
      <div class="categories">
        <div class="categories__content">
          <button
            v-for="button in listOfButtons"
            :key="button.id"
            @click="changeCurrentCategoryList(button.id)"
            type="button"
            :class="[
              'categories__btn',
              button.id === buttonIsActive ? 'categories__btn_active' : false,
            ]"
          >
            {{ button.title }}
          </button>
        </div>
      </div>
      <div class="projects__items">
        <div
          v-for="project in displayedCards"
          :key="project.id"
          class="projects__item"
        >
          <div class="star-box">
            <svg
              @click="changeStarColor"
                class="star"
                :class="{ 'star_active': project.isStarActive }"
                :id="project.id"
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_993_156)">
                <path
                  d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_993_156"
                  x="0.186424"
                  y="0.431396"
                  width="35.6271"
                  height="34.3619"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_993_156"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_993_156"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <img
            class="projects__item-image"
            :src="project.src"
            :alt="project.alt"
          />
          <div class="projects__item-content">
            <div class="projects__item-box">
              <p class="projects__item-title">{{ project.firstparagraph }}</p>
              <p class="projects__item-subtitle">
                {{ project.secondparagraph }}
              </p>
            </div>
            <router-link
              :to="`/projectdetails/${project.id}`"
              class="projects__item-button"
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.27101 14.9525L7.21387 8.26683L1.27101 1.58112"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
      <Pagination
        :totalNumberPaginationPages="setTotalNumberOfPages()"
        :currentPage="currentPage"
        :pageKey="pageKey"
        @pagechanged="changeCurrentPage"
      />
    </div>
  </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import { mapGetters } from "vuex";

export default {
  name: "Project",

  components: {
    Pagination,
  },

  data() {
    return {
      currentPage: 1,
      limitOfCardsPerPage: 8,
      pageKey: "project",

      currentCategoryList: [
        {
          id: "65",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/pyakaha/Cameron_1.jpg"),
          alt: "compressor one",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "66",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/pyakaha/Cameron.jpg"),
          alt: "compressor two",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "67",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/pyakaha/Electrik_box.jpg"),
          alt: "compressor three",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "68",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp1.jpg"),
          alt: "compressor four",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "69",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp2.jpg"),
          alt: "compressor five",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "70",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp3.jpg"),
          alt: "compressor six",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "71",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp4.jpg"),
          alt: "compressor seven",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "72",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp5.jpg"),
          alt: "compressor eight",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },

        {
          id: "73",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp6.jpg"),
          alt: "compressor nine",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "74",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp7.jpg"),
          alt: "compressor ten",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "75",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp8.jpg"),
          alt: "compressor eleven",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "76",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp9.jpg"),
          alt: "compressor twelve",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "77",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp1.jpg"),
          alt: "compressor thirteen",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "78",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp2.jpg"),
          alt: "compressor fourteen",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "79",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp3.jpg"),
          alt: "compressor fifteen",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "80",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp4.jpg"),
          alt: "compressor sixteen",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },

        {
          id: "81",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp5.jpg"),
          alt: "compressor seventeen",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "82",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp6.jpg"),
          alt: "compressor eighteen",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "83",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp7.jpg"),
          alt: "compressor nineteen",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "84",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp8.jpg"),
          alt: "compressor twenty",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "85",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp9.jpg"),
          alt: "compressor twenty-one",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "86",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp10.jpg"),
          alt: "compressor twenty-two",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "87",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp1.jpg"),
          alt: "compressor twenty-three",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "88",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp2.jpg"),
          alt: "compressor twenty-four",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },

        {
          id: "89",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp3.jpg"),
          alt: "compressor twenty-five",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "90",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp4.jpg"),
          alt: "compressor twenty-six",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "91",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp5.jpg"),
          alt: "compressor twenty-seven",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "92",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp6.jpg"),
          alt: "compressor twenty-eight",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "93",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp7.jpg"),
          alt: "compressor twenty-nine",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "94",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp8.jpg"),
          alt: "compressor thirty",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "95",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp9.jpg"),
          alt: "compressor thirty-one",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
        {
          id: "96",
          tag: "compressor",
          src: require("@/assets/images/rs/compressor/comp_fake/comp10.jpg"),
          alt: "compressor thirty-two",
          firstparagraph: "Modern Compressor",
          secondparagraph: "Decor / Artchitecture",
          isStarActive: false
        },
      ],

      listOfButtons: [
        { id: "machine", title: "Станки" },
        { id: "automation", title: "Автоматизация" },
        { id: "compressor", title: "Компрессора" },
        { id: "mpp", title: "ГОК" },
      ],
      buttonIsActive: "compressor",
    };
  },
  methods: {
    setTotalNumberOfPages() {
      return Math.ceil(
        this.currentCategoryList.length / this.limitOfCardsPerPage
      );
    },
    paginateListOfCards(currentCategoryList) {
      const newList = currentCategoryList;
      //console.log(newList);
      let page = this.currentPage;
      let perPage = this.limitOfCardsPerPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return newList.slice(from, to);
    },
    changeCurrentPage(page) {
      //console.log(page);
      this.currentPage = page;
      this.$router.push(
        `/${this.pageKey}/${this.buttonIsActive}/${this.currentPage}`
      );
    },
    changeCurrentCategoryList(id) {
      const buttonId = id;
      this.currentCategoryList = [];
      this.getAllCategoriesList.forEach((category) => {
        if (category.tag === buttonId) {
          this.buttonIsActive = buttonId;
          this.currentPage = 1;
          this.$router.push(
            `/${this.pageKey}/${this.buttonIsActive}/${this.currentPage}`
          );
          return this.currentCategoryList.push(category);
        }
      });
    },
    changeStarColor(e) {
    const starId = e.target.closest(".star").id;
    const projectIndex = this.currentCategoryList.findIndex(project => project.id === starId);
        if (projectIndex !== -1) {
      this.currentCategoryList[projectIndex].isStarActive = !this.currentCategoryList[projectIndex].isStarActive;
    // Для реактивности, если потребуется
      this.currentCategoryList = [...this.currentCategoryList];
      }
    },
  },
  computed: {
    updatedCurrentCategoryiesList() {
      
      return (this.currentCategoryList = this.changeCurrentCategoryList);
    },
    displayedCards() {
      return this.paginateListOfCards(this.currentCategoryList);
    },
    ...mapGetters(["getAllCategoriesList"]),
  },
};
</script>
