// Check set
const quoteReg = /("|«)([А-Яа-я\w.]+)("|»)/g;
const copyReg = /©/g;
const num = /[#№]/g;
const hyphen = /(\s)([—–-])(\s)/g;
const prepositions = /(?<!\S)(в|во|без|и|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между)(?!\S)/gi;

const textInput = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const output = document.querySelector('.output');

const changeText = str => {
  return str.replace(num, '&#8470;')
            .replace(quoteReg, '&laquo;$2&raquo;')
            .replace(copyReg, '&#169;')
            .replace(hyphen, '$1&#151;$3')
            .replace(prepositions, '$1&nbsp')
}

btn.addEventListener('click', () => {
  const res = changeText(textInput.value);
  result.classList.remove('hide');
  output.value = res;
})
