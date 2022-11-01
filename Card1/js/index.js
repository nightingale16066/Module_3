import { el, setChildren } from "redom";
import Inputmask from "inputmask";

const cardMask = new Inputmask('9999 9999 9999 9999', {placeholder: 'x'});
const cardExpiry = new Inputmask('99/99');
const cardCVV = new Inputmask('999'); 

const wrapper = el('.wrapper');
const card = el('.card');
const header = el('p.secure', 'Secure Checkout');

const creditCard = el('.credit-card', 
  [
    el('span.card__number', 'xxxx xxxx xxxx xxxx'),
    el('.card__personal', [
      el('span.card__name', 'John Doe'),
      el('span.card__date', '04/24')
    ])
  ]
);

const createFormItem = (forWhat, labelText, callBack, mask) => {
  const wrap = el(`.form__input-wrap.form__input-wrap_${forWhat}`)
  const lable = el(`label.form__label.form__${forWhat}-label`, labelText);
  const input = el(`input.input.input__${forWhat}`, {oninput() {
    callBack()
  }});
  
  if (mask) {
    mask.mask(input)
  }

  setChildren(wrap, [lable, input])
  return wrap;
}

const fillCardHolder = () => {
  const cardName = document.querySelector('.card__name');
  const cardInputName = document.querySelector('.input__holder');
  cardInputName.setAttribute('maxlength', 20)
  cardName.textContent = cardInputName.value = cardInputName.value.replace(/[^A-Z ]/gi, '');
}

const fillCardNumber = () => {
  const cardNumber = document.querySelector('.card__number');
  const inputNumber = document.querySelector('.input__number');
  cardNumber.textContent = inputNumber.value;
}

const fillCardExpiry = () => {
  const cardDate = document.querySelector('.card__date');
  const cardDateInput = document.querySelector('.input__date');
  cardDate.textContent = cardDateInput.value;
}


const form = el('form.form', {action: '#', id: 'form'}, [
  createFormItem('holder', 'Card Holder', fillCardHolder),
  createFormItem('number', 'Card Number', fillCardNumber, cardMask),
  createFormItem('date', 'Card Expiry', fillCardExpiry, cardExpiry),
  createFormItem('cvv', 'CVV', ()=>{}, cardCVV),
  el('button.form__button', 'CHECK OUT', {onclick(e) {
    e.preventDefault()
  }})
])

setChildren(card, [header, creditCard, form])
setChildren(wrapper, card)
setChildren(document.body, wrapper);

