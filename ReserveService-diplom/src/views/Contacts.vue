<template>
  <div class="contacts center">
    <section class="contact-section">
      <div class="contact-container">
        <div class="contact-row">
          <div class="contact-form-col">
            <div class="form-header-wrapper">
              <h2 class="section-title">Онлайн заявка</h2>
            </div>
            <div class="form-row">
              <div class="form-inputs">
                 <form 
                  class="contact-form" 
                  @submit.prevent="submitForm"
                  action="https://formspree.io/f/xjkwdlrk" 
                  method="POST"
                >
                  <input type="text" name="name" class="form-input" v-model="form.name" placeholder="Ваше имя" required>
                  <input type="tel" name="phone" class="form-input" v-model="form.phone" placeholder="Ваш телефон" required>
                  <input type="email" name="email" class="form-input" v-model="form.email" placeholder="Ваш e-mail" required>
                  <input type="hidden" name="_subject" value="Новая заявка с сайта">
                  <button type="submit" class="submit-btn" :disabled="isLoading">
                    {{ isLoading ? 'Отправка...' : 'Отправить запрос' }}
                  </button>
                </form>
              </div>
              <div class="form-textarea">
                <textarea class="message-input" v-model="form.msg" placeholder="Ваше сообщение:" required></textarea>
              </div>
            </div>
          </div>
          
          <div class="contact-info-col">
            <h2 class="section-title">Контакты</h2>
            <div class="contact-info">
              <p><span class="info-label">Тел.:</span> <a href="tel:+79374790417">+7 937 47 90 407</a></p>
              <p><span class="info-label">Эл. почта:</span> <a href="mailto:reserve-serv@mail.ru">reserve-serv@mail.ru</a></p>
              <p><span class="info-label">Адрес:</span> Респ. Башкортостан, г.Стерлитамак, ул. Советская, 104</p>
              <p><span class="info-label">Время работы:</span> ПН-ПТ с 8:00 до 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        msg: ''
      },
      isLoading: false,
      isSuccess: false
    }
  },
  methods: {
    async submitForm() {
      this.isLoading = true;
      
      try {
        const formElement = this.$el.querySelector('.contact-form');
        const formData = new FormData(formElement);
        
        const response = await fetch('https://formspree.io/f/xjkwdlrk', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          this.isSuccess = true;
          this.form = { name: '', phone: '', email: '', msg: '' };
          alert('Сообщение успешно отправлено!');
          console.log('Отправляемые данные:', Object.fromEntries(formData));
        } else {
          throw new Error('Ошибка отправки');
        }
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/contacts.scss';

</style>