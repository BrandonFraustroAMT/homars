<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ContactSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="sectionContact"
  >
    <div class="contact-slice__column1 contact-slice__tittle" >
      <h2><PrismicRichText :field="slice.primary.tittle" /></h2>
    </div>
    <div class="contact-slice__column2" >
      <div class="contact-slice__left-col" >
        <template v-for="item in slice.primary.groupcontact">
          <div class="contact-slice__block">
            <h3>{{ item.subtittle }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </template>
        <div class="contact-slice__block">
            <h3> {{ slice.primary.socialmedia }}</h3>
            <div class="contact-slice__block-social">
              <template v-for="item in slice.primary.groupsocialmedia">
                <PrismicLink :field="item.linkicon">
                  <PrismicImage :field="item.icon" />
                </PrismicLink>
              </template>
            </div>
        </div>
        <div class="contact-slice__block contact-slice__logo">
          <PrismicImage :field="slice.primary.logo" />
        </div>
        <div class="contact-slice__block contact-slice__link-privacy">
          <PrismicLink :field="slice.primary.linkprivacy">
            {{ slice.primary.privacy }}
          </PrismicLink>
          
        </div>
      </div>
      <div class="contact-slice__right-col" >
        <form action="#" method="post">
          <div class="contact-slice__form">
            <p>
              <label for="name">
                Nombre completo:
                <br>
                <span class="contact-slice__form-span">
                  <input type="text" id="name" class="contact-slice__form-input">
                </span>
              </label>
              <br>
              <label for="tel">
                Teléfono:
                <br>
                <span class="contact-slice__form-span">
                  <input type="tel" id="tel" class="contact-slice__form-input">
                </span>
              </label>
            </p>
          </div>
          <div class="contact-slice__form">
            <p>
              <label for="email">
                Correo electrónico:
                <br>
                <span class="contact-slice__form-span">
                  <input type="email" id="email" class="contact-slice__form-input">
                </span>
              </label>
              <br>
              <label for="city">
                Ciudad:
                <br>
                <span class="contact-slice__form-span">
                  <input type="text" id="city" class="contact-slice__form-input">
                </span>
              </label>
            </p>
          </div>
          <div class="contact-slice__form">
            <p>
              <label for="interest">
                Interés en:
                <br>
                <span class="contact-slice__form-span">
                  <select name="your-product" id="interest">
                    <option value>-Por favor, elige una opción-</option>
                    <option value="Casa">Casa</option>
                    <option value="Terreno">Terreno</option>
                    <option value="Soy Broker">Soy Broker</option>
                  </select>
                </span>
              </label>
              <br>
              <label for="budget">
                Presupuesto:
                <br>
                <span class="contact-slice__form-span">
                  <select name="your-budget" id="interest">
                    <option value>-Por favor, elige una opción-</option>
                    <option value="$770,000 - $1,000,000">$770,000 - $1,000,000</option>
                    <option value="$1,000,000 - $2,000,000">$1,000,000 - $2,000,000</option>
                    <option value="$2,000,000 - $3,000,000">$2,000,000 - $3,000,000</option>
                    <option value="$3,000,000 - $5,000,000">$3,000,000 - $5,000,000</option>
                    <option value="Más de $5,000,000">Más de $5,000,000</option>
                  </select>
                </span>
              </label>
            </p>
          </div>
          <div class="contact-slice__form1">
            <p>
              <label for="comments">
                Comentarios (opcional):
                <br>
                <span class="contact-slice__form-span">
                  <textarea name="comments" id="comments" cols="40" rows="10" maxlength="400">
                  </textarea>
                </span>
              </label>
            </p>
          </div>
          <div class="contact-slice__form1 ">
            <button type="submit" class="contact-slice__form-submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style>
  .sectionContact{
    background-color: #3c3933;
    width: 100%;
    padding: 8% 10% 5%;
    margin-top: -5px;
  }
  .contact-slice__column1{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact-slice__tittle{
    padding-bottom: 2%;
  }
  .contact-slice__tittle h2{
    font-size: 4vw;
    font-family: 'Roboto', sans-serif;
    color: #998d6a;
    font-weight: 200;
    margin-bottom: 10px;
  }
  .contact-slice__column2{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  .contact-slice__left-col{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .contact-slice__block{
    margin-top: 20px
  }
  .contact-slice__block h3{
    color: #998d6a;
    padding: 0;
    margin: 0;
    font-size: 1.2vw;
    font-family: 'Roboto', sans-serif;
    font-weight: 200
  }
  .contact-slice__block p{
    color: #fff;
    font-size: 1.1vw;
    line-height: 1.7;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
  }
  .contact-slice__block-social{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
  .contact-slice__block-social a{
    margin-right: 10px;
  }
  .contact-slice__block-social img{
    width: 34px;
    height: auto;
  }
  .contact-slice__logo img{
    opacity: 0.5;
    max-width: 90px;
    transition: opacity 0.2s ease-in-out;
  }
  .contact-slice__link-privacy a{
    color: #fff;
    font-size: 1.1vw;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    border-bottom: 0px;
    letter-spacing: 0.8px;
    outline: none !important;
  }

  .contact-slice__right-col{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contact-slice__form p{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    font-size: 1.1vw;
    line-height: 1.7;
    font-family: 'Roboto', sans-serif;
  }
  .contact-slice__form label{
    width: 50%;
    font-size: 18px;
    color: #d0c7ab;
    
  }
  .contact-slice__form p label:first-child {
    padding-right: 2%;
  }
  .contact-slice__form-span{
    position: relative;
  }
  input[type="text"], input[type="tel"], input[type="email"] {
    background-color: #fff !important;
    border: 2px solid #998d6a !important;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    color: #000 !important;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
  }
  select {
    background-color: #fff !important;
    border: 2px solid #998d6a !important;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    color: #000 !important;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
  }
  textarea {
    width: 100%;
    background-color: #fff !important;
    border: 2px solid #998d6a !important;
    min-height: unset !important;
    height: 150px;
  }
  .contact-slice__form-submit{
    font-size: 16px;
    letter-spacing: 0.8px;
    font-family: 'Roboto', sans-serif;
    background-color: #b5a884 !important;
    border: 1px solid #b5a884;
    border-radius: 10px !important;
    color: #312e28 !important;
    line-height: 1 !important;
    padding: 18px 40px !important;
    position: relative !important;
    text-align: center !important;
    text-transform: uppercase !important;
    margin-top: 20px !important;
    transition: background-color 0.2s ease-in-out, letter-spacing 0.2s ease-in-out;
  }
  .contact-slice__form-submit:hover{
    cursor: pointer;
    background-color: #b4afa1 !important;
    border: 1px solid #b4afa1;
    color: #312e28 !important;
  }
</style>