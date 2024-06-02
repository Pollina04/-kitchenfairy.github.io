const prevButton = document.getElementById('prev-button');
const prevButtonTwo = document.getElementById('prev-buttonTwo');
const prevButtonThree = document.getElementById('prev-buttonThree');
const nextButton = document.getElementById('next-button');
const nextButtonTwo = document.getElementById('next-buttonTwo');
const nextButtonThree = document.getElementById('next-buttonThree');
const reviews = document.querySelectorAll('.review');
let currentIndex = 0;

const ReviewMain = document.getElementById('reviewMain-group');
const showReviewMain = document.getElementById('show-reviewMain');
const showReviewMainTwo = document.getElementById('show-reviewMain2');

nextButtonThree.addEventListener('click', () => {
  ReviewMain.style.display = 'none';
  showReviewMain.style.display = 'flex';
  showReviewMainTwo.style.display = 'none';
});

nextButtonTwo.addEventListener('click', () => {
  ReviewMain.style.display = 'none';
  showReviewMain.style.display = 'none';
  showReviewMainTwo.style.display = 'flex';
});

nextButton.addEventListener('click', () => {
  ReviewMain.style.display = 'flex';
  showReviewMain.style.display = 'none';
  showReviewMainTwo.style.display = 'none';
});

prevButton.addEventListener('click', () => {
  ReviewMain.style.display = 'none';
  showReviewMain.style.display = 'flex';
  showReviewMainTwo.style.display = 'none';
});

prevButtonTwo.addEventListener('click', () => {
  ReviewMain.style.display = 'flex';
  showReviewMain.style.display = 'none';
});

prevButtonThree.addEventListener('click', () => {
  ReviewMain.style.display = 'none';
  showReviewMain.style.display = 'none';
  showReviewMainTwo.style.display = 'flex';
});

const TELEGRAM_BOT_TOKEN = '6971102120:AAGsZj4jIa7QCwJsitJ2tWknqX_Iti4BHVU';
const TELRGRAM_CHAT_ID = '@TestFrontCaseFairy';
const API = 'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage';

async function sendEmailTelegram(event) {
  event.preventDefault()

  const form = event.target;
  const formBtn = document.querySelector('.btn2 button')
  const formSendResult = document.querySelector('.form_send_result')
  const popup = document.getElementById('popupwindow');
  const closebtnpopup = document.getElementById('closebtnpopup');
  formSendResult.textContent = '';

  const { email, number, name } = Object.fromEntries(new FormData(form).entries())

  const text = `Заявка от ${name}!\nEmail: ${email}\nТелефон: ${number}`;

  try {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELRGRAM_CHAT_ID,
        text,
      })
    });

    if (response.ok) {
      //formSendResult.textContent = 'Спасибо! Регистрация прошла успешно.
      form.reset()

    } else {
      throw new Error(response.statusText)
    }

  } catch (error) {
    console.error(error)
    formSendResult = 'Форма не отправлена! Попробуйте позже.';
    formSendResult.computedStyleMap.color = 'red'
  } 
  // Если все поля заполнены, то отображается модального окна
  popup.style.display = 'flex';
  closebtnpopup.addEventListener('click', () => {
      popup.style.display = 'none';
  });
}

function smoothScroll(element) {
  setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 0,1); 
}

