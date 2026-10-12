/* ═══════════════════════════════════════════════════════════
   TRADE SESSION — APP LOGIC
═══════════════════════════════════════════════════════════ */

/* ============ CONFIG ============ */
var CONFIG = {
  PO_REF_LINK: 'https://pocketoption.com/ru/register/',
  VERIFY_ENDPOINT: null,
  DEMO_MODE: true,
  VERIFY_DELAY_MS: 1400
};

/* ============ I18N ============ */
var I18N = {
  en: {
    login:'Login', logout:'Log out', sign_out:'Sign out', back:'Back',
    get_started:'Get Started', create_free:'Create free account',
    land_eyebrow:'AI Signal Generator',
    land_title:'Precise signals.<br><em>In seconds.</em>',
    land_sub:'Trade Session AI analyzes live market data across 28 currency pairs and generates high-probability BUY/SELL signals optimized for Pocket Option traders.',
    stat_winrate:'Win rate', stat_signals:'Signals / day', stat_traders:'Active traders', stat_payout:'Payout',
    about_label:'About the platform',
    about_title:'Built for traders who take <em>discipline seriously.</em>',
    about_text:'We are a signal intelligence tool — our AI scans the forex market in real time and filters out noise.',
    feat1_title:'Real-time market analysis', feat1_desc:'Live scan across 28 currency pairs, momentum tracking.',
    feat2_title:'Clear BUY / SELL direction', feat2_desc:'Direction, expiry time and quality score.',
    feat3_title:'Auto & Manual modes', feat3_desc:'Pick your pair manually or let AI choose.',
    feat4_title:'History & statistics', feat4_desc:'Track every signal, win rate, streak.',
    how_label:'How it works',
    how_title:'Three steps to your <em>first signal.</em>',
    step1_title:'Create your account', step1_desc:'Just an email and password.',
    step2_title:'Connect Pocket Option', step2_desc:'Register via our link and verify your UID.',
    step3_title:'Receive AI signals', step3_desc:'Live signals every session.',
    cta_title:'Ready to start?<br><em>It is free.</em>',
    cta_sub:'No credit card. No hidden fees.',
    footer_land:'© 2026 Trade Session',
    tab_register:'Register', tab_login:'I have an account',
    email_label:'Email', password_label:'Password',
    auth_title_register:'Create your<br><em>free account.</em>',
    auth_sub_register:'Enter any email and password. Full access unlocks after UID verification.',
    auth_title_login:'Welcome<br><em>back.</em>',
    auth_sub_login:'No email needed. Just verify your Pocket Option UID on the next step.',
    submit_register:'Create account', submit_login:'Continue',
    login_hint:'Already registered? No email needed — just verify your UID.',
    signed_in_as:'Signed in as',
    uid_title:'Verify your<br><em>Pocket Option UID.</em>',
    uid_sub:'Paste your Pocket Option trader UID below. We will check it and unlock full access.',
    uid_label:'Pocket Option UID', verify_uid:'Verify UID', or:'or',
    po_title:'No Pocket Option account yet?',
    po_text:'Register via the link below. Once you have made your first deposit, your UID becomes valid.',
    po_btn:'Register on Pocket Option',
    demo_note:'Demo mode: any UID with 5+ characters will be accepted.',
    uid_checking:'Checking your UID against Pocket Option...',
    uid_success:'UID <b>{uid}</b> verified. Unlocking full access...',
    uid_error:'UID not found. Register on Pocket Option first, then come back.',
    uid_too_short:'UID must be at least 5 characters',
    verifying:'Verifying...',
    live:'Live', offline:'Offline',
    hero_eyebrow:'Signal Generator',
    hero_title:'Precise trading<br>signals.<br><em>In seconds.</em>',
    hero_sub:'Trade Session AI analyzes live market data and generates high-probability signals.',
    auto:'Auto', manual:'Manual',
    risk_note:'<strong>Risk notice.</strong> Always use strict money management.',
    pair_label:'Currency Pair', pair_count:'28 available',
    expiry_label:'Expiry Time', minutes:'minutes',
    get_signal:'Get Signal',
    open_now:'Open trade now',
    m_expires:'Expires', m_timeleft:'Time Left', m_quality:'Quality',
    signal_validity:'Signal validity', copy_pair:'Copy Pair', back_to_session:'← Back to session',
    live_trades:'Live Trades', realtime_feed:'real-time feed',
    archive:'Archive', history_title:'Signal<br>history.',
    all_signals:'All Signals', export_csv:'Export CSV',
    performance:'Performance', stats_title:'Your<br>statistics.',
    winrate:'Win rate',
    stats_comment_default:'Start trading to see your performance statistics.',
    stats_comment_high:'Winning {p}% — well above average.',
    stats_comment_mid:'{p}% win rate is above breakeven.',
    stats_comment_low:'{p}% win rate. Refine your strategy.',
    s_total:'Total', s_buysell:'Buy / Sell', direction_split:'direction split',
    s_best:'Best Streak', wins_in_row:'wins in a row',
    s_worst:'Worst Streak', losses_in_row:'losses in a row',
    cumulative:'Cumulative Result', last_30:'last 30',
    config:'Configuration', settings_title:'Settings.',
    account:'Account', feedback:'Feedback', about:'About',
    set_sound:'Sound effects', set_sound_desc:'Clicks and notifications',
    set_haptic:'Haptic feedback', set_haptic_desc:'Vibration on signal events',
    set_confetti:'Confetti on win', set_confetti_desc:'Celebration animation',
    set_fast:'Fast analysis', set_fast_desc:'Reduce processing time',
    reset_all:'Reset all data',
    about_app:'<b>Trade Session AI Signal</b><br>Version 6.3 · Demo<br><br>This is a demo environment.',
    footer_main:'© 2026 Trade Session',
    nav_home:'Home', nav_history:'History', nav_stats:'Stats', nav_settings:'Settings',
    analyzing:'Analyzing',
    step_tech:'Technical screening', step_pattern:'Pattern recognition',
    step_math:'Mathematical modeling', step_cross:'Cross-validation',
    trade_result:'Trade Result', did_profit:'Did your trade profit?',
    mark_result:'Mark the result.',
    yes:'Yes', no:'No',
    congrats:'Congratulations.', congrats_sub:'Excellent execution.',
    mm:'Money Management', normal:'This is normal.',
    open_overlap:'Open an overlapping trade:',
    overlap_rules:'1. Multiply by <b>×3</b><br>2. Expiry <b>2 minutes</b><br>3. Same direction<br><br>Max <b>three</b> overlapping.',
    understood:'Understood',
    welcome:'Welcome',
    onboard_title:'The AI signal<br>terminal for<br><em>serious traders.</em>',
    onboard_sub:'Precise signals, clear direction.',
    o1_title:'Auto or Manual mode', o1_desc:'Let AI choose.',
    o2_title:'Clear BUY / SELL direction', o2_desc:'Live chart, countdown.',
    o3_title:'History & statistics', o3_desc:'Track wins and streaks.',
    enter_terminal:'Enter Terminal',
    empty_no_signals:'No signals yet',
    empty_no_signals_text:'Your history will appear here after your first trade.',
    toast_account_created:'Account created',
    toast_signed_out:'Signed out',
    toast_access_granted:'Access granted',
    toast_copied:'Copied: {v}',
    toast_csv_exported:'CSV exported',
    toast_nothing_export:'Nothing to export',
    toast_data_reset:'All data reset',
    toast_welcome_ts:'Welcome to Trade Session',
    toast_select:'Select pair and time',
    toast_logout_confirm:'Log out of your account?',
    toast_reset_confirm:'Reset all data?'
  },
  ru: {
    login:'Войти', logout:'Выйти', sign_out:'Назад', back:'Назад',
    get_started:'Начать', create_free:'Создать бесплатный аккаунт',
    land_eyebrow:'AI Генератор Сигналов',
    land_title:'Точные сигналы.<br><em>За секунды.</em>',
    land_sub:'Trade Session AI анализирует рыночные данные в реальном времени по 28 валютным парам и генерирует высоковероятные сигналы BUY/SELL.',
    stat_winrate:'Винрейт', stat_signals:'Сигналов / день', stat_traders:'Трейдеров', stat_payout:'Выплата',
    about_label:'О платформе',
    about_title:'Создан для трейдеров, которые относятся к <em>дисциплине серьёзно.</em>',
    about_text:'Мы — инструмент сигнальной аналитики. AI сканирует рынок форекс в реальном времени.',
    feat1_title:'Анализ рынка в реальном времени', feat1_desc:'Лайв-скан по 28 валютным парам.',
    feat2_title:'Чёткое направление BUY / SELL', feat2_desc:'Направление, экспирация и оценка качества.',
    feat3_title:'Режимы Авто и Ручной', feat3_desc:'Укажите пару вручную или позвольте AI выбрать.',
    feat4_title:'История и статистика', feat4_desc:'Каждый сигнал, винрейт, серии.',
    how_label:'Как это работает',
    how_title:'Три шага до вашего <em>первого сигнала.</em>',
    step1_title:'Создайте аккаунт', step1_desc:'Просто почта и пароль.',
    step2_title:'Подключите Pocket Option', step2_desc:'Зарегистрируйтесь по ссылке и подтвердите UID.',
    step3_title:'Получайте AI-сигналы', step3_desc:'Живые сигналы каждую сессию.',
    cta_title:'Готовы начать?<br><em>Это бесплатно.</em>',
    cta_sub:'Без карты. Без скрытых платежей.',
    footer_land:'© 2026 Trade Session',
    tab_register:'Регистрация', tab_login:'У меня есть аккаунт',
    email_label:'Почта', password_label:'Пароль',
    auth_title_register:'Создайте<br><em>бесплатный аккаунт.</em>',
    auth_sub_register:'Введите любые почту и пароль. Полный доступ откроется после подтверждения UID.',
    auth_title_login:'С возвращением.',
    auth_sub_login:'Почта не нужна. Подтвердите ваш UID Pocket Option на следующем шаге.',
    submit_register:'Создать аккаунт', submit_login:'Продолжить',
    login_hint:'Уже зарегистрированы? Почта не нужна — только UID.',
    signed_in_as:'Вошли как',
    uid_title:'Подтвердите ваш<br><em>UID Pocket Option.</em>',
    uid_sub:'Вставьте ваш UID трейдера Pocket Option.',
    uid_label:'UID Pocket Option', verify_uid:'Проверить UID', or:'или',
    po_title:'Ещё нет аккаунта Pocket Option?',
    po_text:'Зарегистрируйтесь по ссылке ниже. После первого депозита ваш UID станет активным.',
    po_btn:'Зарегистрироваться на Pocket Option',
    demo_note:'Демо-режим: любой UID от 5 символов будет принят.',
    uid_checking:'Проверяем ваш UID в Pocket Option...',
    uid_success:'UID <b>{uid}</b> подтверждён. Открываем доступ...',
    uid_error:'UID не найден. Сначала зарегистрируйтесь на Pocket Option по кнопке ниже.',
    uid_too_short:'UID должен содержать минимум 5 символов',
    verifying:'Проверяем...',
    live:'Онлайн', offline:'Оффлайн',
    hero_eyebrow:'Генератор сигналов',
    hero_title:'Точные торговые<br>сигналы.<br><em>За секунды.</em>',
    hero_sub:'Trade Session AI анализирует рыночные данные и генерирует сигналы.',
    auto:'Авто', manual:'Ручной',
    risk_note:'<strong>Внимание.</strong> Соблюдайте строгий мани-менеджмент.',
    pair_label:'Валютная пара', pair_count:'28 доступно',
    expiry_label:'Время экспирации', minutes:'минут',
    get_signal:'Получить сигнал',
    open_now:'Откройте сделку сейчас',
    m_expires:'Истекает', m_timeleft:'Осталось', m_quality:'Качество',
    signal_validity:'Валидность сигнала', copy_pair:'Копировать пару', back_to_session:'← Назад к сессии',
    live_trades:'Лайв-сделки', realtime_feed:'поток в реальном времени',
    archive:'Архив', history_title:'История<br>сигналов.',
    all_signals:'Все сигналы', export_csv:'Экспорт CSV',
    performance:'Показатели', stats_title:'Ваша<br>статистика.',
    winrate:'Винрейт',
    stats_comment_default:'Начните торговать, чтобы увидеть статистику.',
    stats_comment_high:'Винрейт {p}% — выше среднего.',
    stats_comment_mid:'{p}% винрейт — выше безубыточности.',
    stats_comment_low:'Винрейт {p}%. Улучшите стратегию.',
    s_total:'Всего', s_buysell:'BUY / SELL', direction_split:'разбивка направлений',
    s_best:'Лучшая серия', wins_in_row:'побед подряд',
    s_worst:'Худшая серия', losses_in_row:'поражений подряд',
    cumulative:'Накопительный результат', last_30:'последние 30',
    config:'Конфигурация', settings_title:'Настройки.',
    account:'Аккаунт', feedback:'Обратная связь', about:'О программе',
    set_sound:'Звуки', set_sound_desc:'Клики и уведомления',
    set_haptic:'Вибрация', set_haptic_desc:'Вибро-отклик при сигналах',
    set_confetti:'Конфетти при победе', set_confetti_desc:'Праздничная анимация',
    set_fast:'Быстрый анализ', set_fast_desc:'Уменьшить время обработки',
    reset_all:'Сбросить все данные',
    about_app:'<b>Trade Session AI Signal</b><br>Версия 6.3 · Демо<br><br>Это демо-среда.',
    footer_main:'© 2026 Trade Session',
    nav_home:'Главная', nav_history:'История', nav_stats:'Статистика', nav_settings:'Настройки',
    analyzing:'Анализ',
    step_tech:'Технический скрининг', step_pattern:'Распознавание паттернов',
    step_math:'Математическое моделирование', step_cross:'Кросс-валидация',
    trade_result:'Результат сделки', did_profit:'Сделка в плюс?',
    mark_result:'Отметьте результат.',
    yes:'Да', no:'Нет',
    congrats:'Поздравляем.', congrats_sub:'Отличное исполнение.',
    mm:'Мани-менеджмент', normal:'Это нормально.',
    open_overlap:'Откройте перекрывающую сделку:',
    overlap_rules:'1. Умножьте на <b>×3</b><br>2. Экспирация <b>2 минуты</b><br>3. То же направление<br><br>Максимум <b>три</b> перекрытия.',
    understood:'Понятно',
    welcome:'Добро пожаловать',
    onboard_title:'AI-терминал<br>сигналов для<br><em>серьёзных трейдеров.</em>',
    onboard_sub:'Точные сигналы, чёткое направление.',
    o1_title:'Режим Авто или Ручной', o1_desc:'Позвольте AI выбрать.',
    o2_title:'Чёткое направление BUY / SELL', o2_desc:'Живой график, отсчёт.',
    o3_title:'История и статистика', o3_desc:'Отслеживайте победы и серии.',
    enter_terminal:'Войти в терминал',
    empty_no_signals:'Пока нет сигналов',
    empty_no_signals_text:'История появится здесь после первой сделки.',
    toast_account_created:'Аккаунт создан',
    toast_signed_out:'Вы вышли',
    toast_access_granted:'Доступ открыт',
    toast_copied:'Скопировано: {v}',
    toast_csv_exported:'CSV экспортирован',
    toast_nothing_export:'Нечего экспортировать',
    toast_data_reset:'Все данные сброшены',
    toast_welcome_ts:'Добро пожаловать в Trade Session',
    toast_select:'Выберите пару и время',
    toast_logout_confirm:'Выйти из аккаунта?',
    toast_reset_confirm:'Сбросить все данные?'
  }
};

var currentLang = 'en';
try { currentLang = localStorage.getItem('ts_lang') || 'en'; } catch(_){}

function t(key, vars){
  var dict = I18N[currentLang] || I18N.en;
  var s = dict[key] || I18N.en[key] || key;
  if (vars) Object.keys(vars).forEach(function(k){ s = s.replace('{' + k + '}', vars[k]); });
  return s;
}

function applyLang(lang){
  currentLang = lang;
  try { localStorage.setItem('ts_lang', lang); } catch(_){}
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el){
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('.lang-toggle__btn').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  if (typeof refreshAuthMode === 'function') refreshAuthMode();
  if (typeof renderHistory === 'function') renderHistory();
  if (typeof renderStats === 'function') renderStats();
  if (typeof updateConnection === 'function') updateConnection();
}

document.querySelectorAll('.lang-toggle').forEach(function(toggle){
  toggle.addEventListener('click', function(e){
    var btn = e.target.closest('.lang-toggle__btn');
    if (!btn) return;
    if (btn.getAttribute('data-lang') === currentLang) return;
    applyLang(btn.getAttribute('data-lang'));
  });
});

/* ============ TOAST ============ */
function toast(msg, type, dur){
  type = type || 'success';
  dur = dur || 2600;
  var wrap = document.getElementById('toastWrap');
  var el = document.createElement('div');
  el.className = 'toast ' + (type === 'success' ? '' : type);
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(function(){ el.classList.add('out'); setTimeout(function(){ el.remove(); }, 200); }, dur);
}

/* ============ AUTH ============ */
var AUTH = { users:'ts_users_v3', session:'ts_session_v3' };
function loadUsers(){ try { return JSON.parse(localStorage.getItem(AUTH.users) || '{}'); } catch(_){ return {}; } }
function saveUsers(u){ try { localStorage.setItem(AUTH.users, JSON.stringify(u)); } catch(_){} }
function getSession(){ try { return JSON.parse(localStorage.getItem(AUTH.session) || 'null'); } catch(_){ return null; } }
function setSession(data){ try { localStorage.setItem(AUTH.session, JSON.stringify(data)); } catch(_){} }
function clearSession(){ try { localStorage.removeItem(AUTH.session); } catch(_){} }
function getCurrentUser(){
  var s = getSession();
  if (!s) return null;
  var users = loadUsers();
  if (s.email && users[s.email]) return users[s.email];
  return s;
}

/* ============ ROUTER ============ */
var S = {
  landing: document.getElementById('landingScreen'),
  auth: document.getElementById('authScreen'),
  uid: document.getElementById('uidScreen'),
  main: document.getElementById('mainApp')
};
function showScreen(name){
  Object.keys(S).forEach(function(k){ S[k].classList.add('hidden'); });
  S[name].classList.remove('hidden');
  if (name === 'main') document.body.classList.remove('no-nav');
  else document.body.classList.add('no-nav');
  window.scrollTo(0, 0);
}
function routeInitial(){
  var u = getCurrentUser();
  if (!u){ showScreen('landing'); return; }
  if (!u.verified || !u.uid){ fillUidUser(); showScreen('uid'); return; }
  showScreen('main');
  initMainApp();
}

/* ============ LANDING HANDLERS ============ */
document.getElementById('landingLoginBtn').addEventListener('click', function(){ openAuth('login'); });
document.getElementById('landingGetStartedBtn').addEventListener('click', function(){ openAuth('register'); });
document.getElementById('landingCtaBtn').addEventListener('click', function(){ openAuth('register'); });
document.getElementById('authBackBtn').addEventListener('click', function(){ showScreen('landing'); });

/* ============ AUTH FLOW ============ */
var authMode = 'register';

function openAuth(mode){
  authMode = mode;
  document.querySelectorAll('.auth-tab').forEach(function(t){ t.classList.toggle('active', t.getAttribute('data-auth') === mode); });
  refreshAuthMode();
  document.getElementById('authForm').reset();
  showScreen('auth');
}

document.querySelectorAll('.auth-tab').forEach(function(tab){
  tab.addEventListener('click', function(){
    authMode = tab.getAttribute('data-auth');
    document.querySelectorAll('.auth-tab').forEach(function(t){ t.classList.toggle('active', t === tab); });
    refreshAuthMode();
  });
});

function refreshAuthMode(){
  var title = document.getElementById('authTitle');
  var sub = document.getElementById('authSub');
  var submitText = document.getElementById('authSubmitText');
  var regFields = document.getElementById('authRegisterFields');
  var loginHint = document.getElementById('authLoginHint');
  if (!title) return;

  if (authMode === 'register'){
    title.innerHTML = t('auth_title_register');
    sub.textContent = t('auth_sub_register');
    submitText.textContent = t('submit_register');
    regFields.classList.remove('hidden');
    loginHint.classList.add('hidden');
  } else {
    title.innerHTML = t('auth_title_login');
    sub.textContent = t('auth_sub_login');
    submitText.textContent = t('submit_login');
    regFields.classList.add('hidden');
    loginHint.classList.remove('hidden');
  }
}

document.getElementById('authForm').addEventListener('submit', function(e){
  e.preventDefault();

  if (authMode === 'register'){
    var fd = new FormData(e.target);
    var rawEmail = String(fd.get('email') || '').trim().toLowerCase();
    var rawPass = String(fd.get('password') || '').trim();
    var email = rawEmail || ('user_' + Date.now() + '@tradesession.local');
    var password = rawPass || 'demo';

    var users = loadUsers();
    users[email] = { email: email, password: password, uid: null, verified: false, createdAt: Date.now() };
    saveUsers(users);
    setSession({ email: email });
    toast(t('toast_account_created'));
    fillUidUser();
    showScreen('uid');
  } else {
    setSession({ email: '__uid_login__' });
    fillUidUser();
    showScreen('uid');
  }
});

/* ============ UID ============ */
function fillUidUser(){
  var u = getCurrentUser();
  var emailEl = document.getElementById('uidUserEmail');
  var row = document.getElementById('uidUserRow');
  if (!row || !emailEl) return;
  if (u && u.email && u.email !== '__uid_login__' && u.email.indexOf('@') > 0){
    emailEl.textContent = u.email;
    row.classList.remove('hidden');
  } else {
    row.classList.add('hidden');
  }
}

document.getElementById('uidPoLink').href = CONFIG.PO_REF_LINK;
document.getElementById('uidBackBtn').addEventListener('click', logoutUser);
document.getElementById('uidLogoutBtn').addEventListener('click', logoutUser);

function logoutUser(){
  clearSession();
  toast(t('toast_signed_out'), 'info');
  showScreen('landing');
}

var uidStatusEl = document.getElementById('uidStatus');
var uidStatusIcon = document.getElementById('uidStatusIcon');
var uidStatusText = document.getElementById('uidStatusText');

function showUidStatus(kind, html, icon){
  uidStatusEl.classList.remove('hidden', 'pending', 'success', 'error');
  uidStatusEl.classList.add(kind);
  uidStatusText.innerHTML = html;
  uidStatusIcon.textContent = icon || (kind === 'pending' ? '⟳' : kind === 'success' ? '✓' : '!');
}
function hideUidStatus(){ uidStatusEl.classList.add('hidden'); }

function verifyUid(uid){
  if (CONFIG.VERIFY_ENDPOINT){
    return fetch(CONFIG.VERIFY_ENDPOINT + '?uid=' + encodeURIComponent(uid))
      .then(function(res){ return res.ok ? res.json() : { valid: false }; })
      .then(function(data){ return { valid: data.valid === true }; })
      .catch(function(){ return { valid: false }; });
  }
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve({ valid: String(uid).trim().length >= 5 });
    }, CONFIG.VERIFY_DELAY_MS);
  });
}

document.getElementById('uidForm').addEventListener('submit', function(e){
  e.preventDefault();
  var form = e.target;
  var err = form.querySelector('[data-error-for="uid"]');
  var inp = form.querySelector('[name="uid"]');
  err.textContent = ''; err.classList.remove('show');
  inp.style.borderColor = '';

  var uid = String(new FormData(form).get('uid') || '').trim();
  if (uid.length < 5){
    err.textContent = t('uid_too_short');
    err.classList.add('show');
    inp.style.borderColor = 'var(--sell)';
    return;
  }

  var btn = document.getElementById('uidSubmitBtn');
  var btnText = document.getElementById('uidSubmitText');
  btn.disabled = true;
  btnText.textContent = t('verifying');

  showUidStatus('pending', t('uid_checking'), '⟳');

  verifyUid(uid).then(function(result){
    if (result.valid){
      showUidStatus('success', t('uid_success', { uid: uid }), '✓');

      var s = getSession();
      var users = loadUsers();
      if (s && s.email && s.email !== '__uid_login__' && users[s.email]){
        users[s.email].uid = uid;
        users[s.email].verified = true;
        saveUsers(users);
      } else {
        var fakeEmail = 'uid_' + uid + '@tradesession.local';
        users[fakeEmail] = { email: fakeEmail, uid: uid, verified: true, createdAt: Date.now() };
        saveUsers(users);
        setSession({ email: fakeEmail });
      }

      setTimeout(function(){
        hideUidStatus();
        btn.disabled = false;
        btnText.textContent = t('verify_uid');
        toast(t('toast_access_granted'));
        showScreen('main');
        initMainApp();
      }, 900);
    } else {
      showUidStatus('error', t('uid_error'), '!');
      btn.disabled = false;
      btnText.textContent = t('verify_uid');
    }
  });
});

/* ============ SETTINGS LOGOUT ============ */
document.getElementById('accountLogoutBtn').addEventListener('click', function(){
  if (!confirm(t('toast_logout_confirm'))) return;
  clearSession();
  toast(t('toast_signed_out'), 'info');
  showScreen('landing');
});

/* ============ MAIN APP ============ */
var REAL_PAIRS = ['EUR/USD','GBP/USD','USD/JPY','USD/CHF','USD/CAD','AUD/USD','NZD/USD','EUR/GBP','EUR/JPY','EUR/CHF','EUR/CAD','EUR/AUD','EUR/NZD','GBP/JPY','GBP/CHF','GBP/CAD','GBP/AUD','GBP/NZD','AUD/JPY','AUD/CAD','AUD/CHF','AUD/NZD','CAD/JPY','CAD/CHF','CHF/JPY','NZD/JPY','NZD/CAD','NZD/CHF'];
var TIMES = [2,3,5,7];
var STORAGE = { signals:'pk_signals_v6', settings:'pk_settings_v6', onboarded:'pk_onboarded_v6' };

var mode = 'auto';
var manualPair = null, manualTime = null;
var timerRAF, endTimestamp = 0, startTimestamp = 0;
var currentSignal = null;
var signals = loadJSON(STORAGE.signals, []);
var settings = loadJSON(STORAGE.settings, { sound:true, haptic:true, confetti:true, fast:false });
var mainAppInitialized = false;

function loadJSON(k, fb){ try { var r = localStorage.getItem(k); return r ? JSON.parse(r) : fb; } catch(_){ return fb; } }
function saveJSON(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(_){} }
function persist(){ saveJSON(STORAGE.signals, signals); saveJSON(STORAGE.settings, settings); }

/* AUDIO */
var audioCtx = null;
function ensureAudio(){ if (!audioCtx){ try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(_){} } return audioCtx; }
function playTone(f, d, tp, v){
  if (!settings.sound) return;
  var ctx = ensureAudio(); if (!ctx) return;
  d = d || .08; tp = tp || 'sine'; v = v || .05;
  var o = ctx.createOscillator(); var g = ctx.createGain();
  o.type = tp; o.frequency.setValueAtTime(f, ctx.currentTime);
  g.gain.setValueAtTime(v, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + d);
  o.connect(g); g.connect(ctx.destination);
  o.start(); o.stop(ctx.currentTime + d);
}
function sndClick(){ playTone(880, .04, 'sine', .03); }
function sndSuccess(){ playTone(660, .1, 'sine', .05); setTimeout(function(){ playTone(990, .18, 'sine', .05); }, 90); }
function sndError(){ playTone(220, .15, 'sawtooth', .035); }
function sndSignal(){ playTone(520, .08); setTimeout(function(){ playTone(780, .12); }, 70); setTimeout(function(){ playTone(1040, .16); }, 160); }
function haptic(p){ if (settings.haptic && navigator.vibrate) navigator.vibrate(p || 10); }

/* MINI CHART */
var miniChartStarted = false;
function startMiniChart(){
  if (miniChartStarted) return;
  miniChartStarted = true;
  var c = document.getElementById('miniChart');
  if (!c) return;
  var ctx = c.getContext('2d');
  var DPR = Math.min(2, window.devicePixelRatio || 1);
  var W = 0, H = 0;
  function resize(){
    var r = c.getBoundingClientRect();
    if (r.width === 0) return;
    W = r.width; H = r.height;
    c.width = W * DPR; c.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  var COUNT = 50, SHIFT_MS = 700, PAUSE_MS = 400;
  var candles = [];
  var incoming = null, price = 100, trend = (Math.random() - 0.5) * 0.25;
  var rangeMin = 0, rangeMax = 0;

  function makeCandle(){
    var o = price;
    trend = trend * 0.94 + (Math.random() - 0.5) * 0.35;
    var c2 = o + trend * 0.9 + (Math.random() - 0.5) * 1.4;
    var hi = Math.max(o, c2) + Math.random() * 0.5;
    var lo = Math.min(o, c2) - Math.random() * 0.5;
    price = c2;
    return { o: o, c: c2, hi: hi, lo: lo };
  }
  function recalcRange(){
    var mn = Infinity, mx = -Infinity;
    candles.forEach(function(k){ if (k.lo < mn) mn = k.lo; if (k.hi > mx) mx = k.hi; });
    if (incoming){ if (incoming.lo < mn) mn = incoming.lo; if (incoming.hi > mx) mx = incoming.hi; }
    var pad = (mx - mn) * 0.06;
    rangeMin = mn - pad; rangeMax = mx + pad;
  }
  function extendRangeFor(k){
    if (k.lo < rangeMin) rangeMin = k.lo;
    if (k.hi > rangeMax) rangeMax = k.hi;
  }
  for (var i = 0; i < COUNT; i++) candles.push(makeCandle());
  incoming = makeCandle();
  recalcRange();

  function easeOutCubic(t){ return 1 - Math.pow(1 - t, 3); }
  var state = 'pause', lastPauseStart = performance.now(), shiftStart = 0, shiftCount = 0;

  function draw(offset){
    if (W === 0 || H === 0) return;
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = 'rgba(255,255,255,.032)';
    ctx.lineWidth = 1;
    for (var i = 1; i < 8; i++){ var xx = (W/8)*i; ctx.beginPath(); ctx.moveTo(xx, 0); ctx.lineTo(xx, H); ctx.stroke(); }
    for (var j = 1; j < 5; j++){ var yy = (H/5)*j; ctx.beginPath(); ctx.moveTo(0, yy); ctx.lineTo(W, yy); ctx.stroke(); }

    var range = (rangeMax - rangeMin) || 1;
    var padTop = H * 0.10, padBot = H * 0.10;
    var usable = H - padTop - padBot;
    var cw = W / COUNT;
    var bw = Math.max(2, cw * 0.55);

    for (var k = 0; k <= COUNT; k++){
      var kk = k < COUNT ? candles[k] : incoming;
      var xk = k * cw + cw/2 - offset;
      if (xk < -cw || xk > W + cw) continue;
      var yo = padTop + usable - ((kk.o - rangeMin) / range) * usable;
      var yc = padTop + usable - ((kk.c - rangeMin) / range) * usable;
      var yh = padTop + usable - ((kk.hi - rangeMin) / range) * usable;
      var yl = padTop + usable - ((kk.lo - rangeMin) / range) * usable;
      var up = kk.c >= kk.o;
      ctx.strokeStyle = up ? 'rgba(16,185,129,.85)' : 'rgba(239,68,68,.85)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(xk, yh); ctx.lineTo(xk, yl); ctx.stroke();
      var top = Math.min(yo, yc);
      var bh = Math.max(1.2, Math.abs(yc - yo));
      ctx.fillStyle = up ? 'rgba(16,185,129,.92)' : 'rgba(239,68,68,.92)';
      ctx.fillRect(xk - bw/2, top, bw, bh);
    }
  }

  function tick(now){
    var cw = W / COUNT;
    if (state === 'pause'){
      if (now - lastPauseStart >= PAUSE_MS){ state = 'shift'; shiftStart = now; }
      draw(0);
    } else {
      var tPct = Math.min(1, (now - shiftStart) / SHIFT_MS);
      draw(easeOutCubic(tPct) * cw);
      if (tPct >= 1){
        candles.shift();
        candles.push(incoming);
        incoming = makeCandle();
        extendRangeFor(incoming);
        shiftCount++;
        if (shiftCount >= 12){ recalcRange(); shiftCount = 0; }
        state = 'pause'; lastPauseStart = now; draw(0);
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function updateConnection(){
  var pill = document.getElementById('connectionPill');
  var text = document.getElementById('connectionText');
  if (!pill || !text) return;
  if (navigator.onLine){ pill.classList.remove('offline'); pill.classList.add('online'); text.textContent = t('live'); }
  else { pill.classList.remove('online'); pill.classList.add('offline'); text.textContent = t('offline'); }
}
window.addEventListener('online', updateConnection);
window.addEventListener('offline', updateConnection);

function initMainApp(){
  if (mainAppInitialized) return;
  mainAppInitialized = true;

  startMiniChart();
  renderPairGrid();
  renderTimeGrid();
  initTrades();
  updateConnection();
  renderStats();
  renderHistory();
  checkOnboarding();

  var u = getCurrentUser();
  if (u){
    document.getElementById('settingsEmail').textContent = u.email || '—';
    document.getElementById('settingsUid').textContent = 'UID: ' + (u.uid || '—');
  }

  document.querySelectorAll('.tab').forEach(function(btn){
    btn.addEventListener('click', function(){
      sndClick(); haptic(8);
      document.querySelectorAll('.tab').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      mode = btn.getAttribute('data-mode');
      document.getElementById('modeToggle').setAttribute('data-mode', mode);
      var mb = document.getElementById('manualBlock');
      if (mode === 'manual') mb.classList.remove('hidden');
      else {
        mb.classList.add('hidden');
        manualPair = null; manualTime = null;
        document.querySelectorAll('.pair-cell.active').forEach(function(b){ b.classList.remove('active'); });
        document.querySelectorAll('.time-cell.active').forEach(function(b){ b.classList.remove('active'); });
      }
    });
  });

  document.getElementById('getSignalBtn').addEventListener('click', startSignal);
  document.getElementById('backBtn').addEventListener('click', function(){ sndClick(); resetApp(); });

  document.getElementById('copyPairBtn').addEventListener('click', function(){
    var pair = document.getElementById('signalPair').textContent;
    if (navigator.clipboard) navigator.clipboard.writeText(pair);
    sndSuccess(); toast(t('toast_copied', { v: pair }));
  });

  document.getElementById('yesBtn').addEventListener('click', function(){
    sndSuccess(); haptic(20);
    finalizeSignal('win');
    document.getElementById('questionBlock').hidden = true;
    document.getElementById('congratBlock').hidden = false;
    startConfetti(3600);
    setTimeout(function(){
      var o = document.getElementById('postTimerOverlay');
      o.style.opacity = '0';
      setTimeout(function(){ hideModalAndReset(); o.style.opacity = '1'; }, 400);
    }, 3600);
  });
  document.getElementById('noBtn').addEventListener('click', function(){
    sndClick(); finalizeSignal('loss');
    document.getElementById('questionBlock').hidden = true;
    document.getElementById('infoBlock').hidden = false;
  });
  document.getElementById('backFromInfoBtn').addEventListener('click', function(){ sndClick(); hideModalAndReset(); });

  document.querySelectorAll('.nav__btn').forEach(function(b){
    b.addEventListener('click', function(){
      sndClick(); haptic(6);
      switchView(b.getAttribute('data-nav'));
    });
  });

  bindToggle('toggleSound', 'sound');
  bindToggle('toggleHaptic', 'haptic');
  bindToggle('toggleConfetti', 'confetti');
  bindToggle('toggleFast', 'fast');

  document.getElementById('exportBtn').addEventListener('click', function(){ sndClick(); exportCSV(); });
  document.getElementById('resetDataBtn').addEventListener('click', function(){
    if (!confirm(t('toast_reset_confirm'))) return;
    try { localStorage.removeItem(STORAGE.signals); } catch(_){}
    signals = [];
    persist(); renderStats(); renderHistory();
    sndSuccess(); toast(t('toast_data_reset'));
  });

  document.getElementById('onboardStartBtn').addEventListener('click', function(){
    sndSuccess(); haptic(15);
    var el = document.getElementById('onboarding');
    el.style.opacity = '0';
    setTimeout(function(){ el.classList.add('hidden'); el.style.opacity = '1'; }, 400);
    try { localStorage.setItem(STORAGE.onboarded, '1'); } catch(_){}
    toast(t('toast_welcome_ts'));
  });
}

function renderPairGrid(){
  var grid = document.getElementById('pairGrid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  grid.innerHTML = REAL_PAIRS.map(function(p){ return '<button class="pair-cell" data-pair="' + p + '" type="button">' + p + '</button>'; }).join('');
  grid.querySelectorAll('.pair-cell').forEach(function(btn){
    btn.addEventListener('click', function(){
      sndClick(); haptic(6);
      manualPair = btn.getAttribute('data-pair');
      grid.querySelectorAll('.pair-cell').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });
}
function renderTimeGrid(){
  var grid = document.getElementById('timeGrid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  grid.innerHTML = TIMES.map(function(tt){ return '<button class="time-cell" data-time="' + tt + '" type="button">' + tt + 'm</button>'; }).join('');
  grid.querySelectorAll('.time-cell').forEach(function(btn){
    btn.addEventListener('click', function(){
      sndClick(); haptic(6);
      manualTime = +btn.getAttribute('data-time');
      grid.querySelectorAll('.time-cell').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });
}

function createTrade(){
  var isWin = Math.random() < 0.87;
  var isBuy = Math.random() > 0.5;
  var value = isWin ? '+' + (Math.random()*79.88 + 7.12).toFixed(2) + '$' : '-' + [5,10,15][Math.floor(Math.random()*3)] + '$';
  var id = Math.floor(Math.random()*9999);
  var div = document.createElement('div');
  div.className = 'row';
  div.innerHTML = '<div class="row__dir ' + (isBuy?'buy':'sell') + '">' + (isBuy?'BUY':'SELL') + '</div>' +
    '<div class="row__main"><div class="row__pair">' + REAL_PAIRS[Math.floor(Math.random()*REAL_PAIRS.length)] + '</div>' +
    '<div class="row__meta"><span>trader ' + id + '</span></div></div>' +
    '<div class="row__result ' + (isWin?'win':'loss') + '">' + value + '</div>';
  return div;
}
var tradesStarted = false;
function initTrades(){
  if (tradesStarted) return;
  tradesStarted = true;
  var list = document.getElementById('tradeList');
  if (!list) return;
  for (var i = 0; i < 5; i++){
    var el = createTrade();
    list.appendChild(el);
  }
  loopTrades();
}
function loopTrades(){
  setTimeout(function(){
    var list = document.getElementById('tradeList');
    if (!list) return;
    var el = createTrade();
    list.insertBefore(el, list.firstChild);
    if (list.children.length > 5) list.removeChild(list.lastChild);
    loopTrades();
  }, 7000 + Math.random()*5000);
}

function playOverlaySteps(fast){
  var steps = document.querySelectorAll('.analyzing__step');
  steps.forEach(function(s){ s.classList.remove('active','done'); });
  var delay = fast ? 180 : 480;
  var i = 0;
  function next(){
    if (i > 0 && steps[i-1]){
      steps[i-1].classList.remove('active');
      steps[i-1].classList.add('done');
    }
    if (i >= steps.length) return;
    steps[i].classList.add('active');
    i++;
    setTimeout(next, delay);
  }
  next();
}

function startSignal(){
  sndClick(); haptic(12);
  var pair, minutes;
  if (mode === 'auto'){
    pair = REAL_PAIRS[Math.floor(Math.random()*REAL_PAIRS.length)];
    minutes = TIMES[Math.floor(Math.random()*TIMES.length)];
  } else {
    if (!manualPair || !manualTime){ sndError(); toast(t('toast_select'), 'error'); return; }
    pair = manualPair; minutes = manualTime;
  }

  var overlay = document.getElementById('overlay');
  overlay.classList.remove('hidden');
  playOverlaySteps(settings.fast);

  setTimeout(function(){
    overlay.classList.add('hidden');
    document.getElementById('startBlock').hidden = true;
    document.getElementById('signalBlock').hidden = false;
    runSignal(pair, minutes);
  }, settings.fast ? 1100 : 2400);
}

function runSignal(pair, minutes){
  var now = new Date();
  var endTime = new Date(now);
  endTime.setMinutes(now.getMinutes() + minutes);
  endTime.setSeconds(0);
  endTimestamp = endTime.getTime();
  startTimestamp = Date.now();

  var isBuy = Math.random() > 0.5;
  var quality = 3 + Math.floor(Math.random()*3);

  try {
    new TradingView.widget({
      container_id: "chart",
      symbol: "FX:" + pair.replace('/',''),
      interval: "1", width: "100%", height: "100%",
      theme: "dark", hide_volume: true,
      hide_top_toolbar: true, hide_side_toolbar: true,
      allow_symbol_change: false, save_image: false, locale: "en",
      backgroundColor: "rgba(0,0,0,1)",
      gridColor: "rgba(255,255,255,0.04)"
    });
  } catch(_){}

  document.getElementById('signalPair').textContent = pair;
  document.getElementById('signalExpiry').textContent = endTime.toTimeString().slice(0,5);
  document.getElementById('signalExpiryBadge').textContent = minutes + 'm expiry';
  document.querySelectorAll('#qualityPips span').forEach(function(s, i){ s.classList.toggle('on', i < quality); });

  startSmoothTimer();

  setTimeout(function(){
    var dirEl = document.getElementById('direction');
    document.getElementById('directionArrow').textContent = isBuy ? '▲' : '▼';
    document.getElementById('directionWord').textContent = isBuy ? 'BUY' : 'SELL';
    dirEl.className = 'direction show ' + (isBuy ? 'buy' : 'sell');
    sndSignal(); haptic([15,30,15]);
  }, settings.fast ? 700 : 1400);

  currentSignal = {
    id: 'sig_' + Date.now(), time: Date.now(), pair: pair,
    direction: isBuy ? 'BUY' : 'SELL', minutes: minutes, quality: quality,
    expiry: endTime.getTime(), result: 'pending'
  };
  signals.push(currentSignal);
  persist();
  renderHistory();
  renderStats();
}

function startSmoothTimer(){
  cancelAnimationFrame(timerRAF);
  var totalSec = Math.floor((endTimestamp - startTimestamp)/1000);
  var timerExpired = false;
  var progress = document.getElementById('progress');
  var ringLabel = document.getElementById('ringLabel');
  var pctLabel = document.getElementById('progressPct');

  function update(){
    var now = Date.now();
    var diff = Math.max(0, (endTimestamp - now)/1000);
    var min = Math.floor(diff/60), sec = Math.floor(diff%60);
    var pct = diff/totalSec;
    progress.style.width = (pct*100) + "%";
    ringLabel.textContent = String(min).padStart(2,'0') + ':' + String(sec).padStart(2,'0');
    pctLabel.textContent = Math.floor(pct*100) + '%';
    if (diff > 0) timerRAF = requestAnimationFrame(update);
    else {
      progress.style.width = '0%'; ringLabel.textContent = '00:00'; pctLabel.textContent = '0%';
      if (!timerExpired){ timerExpired = true; onTimerEnd(); }
    }
  }
  update();
}
function onTimerEnd(){
  sndSuccess(); haptic([20,40,20]);
  setTimeout(function(){ document.getElementById('postTimerOverlay').classList.remove('hidden'); }, 800);
}

function resetApp(){
  document.getElementById('signalBlock').hidden = true;
  document.getElementById('startBlock').hidden = false;
  document.getElementById('chart').innerHTML = '';
  cancelAnimationFrame(timerRAF);
  document.getElementById('signalPair').textContent = '— / —';
  document.getElementById('signalExpiry').textContent = '--:--';
  document.getElementById('signalExpiryBadge').textContent = '—';
  document.getElementById('direction').className = 'direction';
  document.getElementById('ringLabel').textContent = '--:--';
  document.getElementById('progressPct').textContent = '100%';
  document.querySelectorAll('#qualityPips span').forEach(function(s){ s.classList.remove('on'); });
  currentSignal = null;
}

/* CONFETTI */
var confettiCanvas = document.getElementById('confettiCanvas');
var cCtx = confettiCanvas.getContext('2d');
var confettiParticles = [], confettiRAF = null;
function resizeCanvas(){ confettiCanvas.width = window.innerWidth; confettiCanvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
var CONFETTI_COLORS = ['#ffb020','#ffc040','#10b981','#ef4444','#ffffff','#9b9b9b'];

function startConfetti(duration){
  duration = duration || 3600;
  if (!settings.confetti) return;
  confettiParticles = [];
  for (var i = 0; i < 140; i++){
    confettiParticles.push({
      x: Math.random()*confettiCanvas.width, y: -20 - Math.random()*80,
      vx: (Math.random()-.5)*3, vy: 2 + Math.random()*3,
      size: 3 + Math.random()*6,
      rot: Math.random()*Math.PI*2, vrot: (Math.random()-.5)*.22,
      color: CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)], life: 1
    });
  }
  var start = performance.now();
  function draw(now){
    cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiParticles.forEach(function(p){
      p.x += p.vx; p.y += p.vy; p.vy += .05; p.vx *= .995; p.rot += p.vrot;
      var r = 1 - (now - start)/duration;
      if (r < .3) p.life = Math.max(0, r/.3);
      cCtx.save();
      cCtx.globalAlpha = p.life;
      cCtx.translate(p.x, p.y); cCtx.rotate(p.rot);
      cCtx.fillStyle = p.color;
      cCtx.fillRect(-p.size/2, -p.size/2, p.size, p.size*.4);
      cCtx.restore();
    });
    if (now - start < duration) confettiRAF = requestAnimationFrame(draw);
    else cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
  cancelAnimationFrame(confettiRAF);
  confettiRAF = requestAnimationFrame(draw);
}

function finalizeSignal(result){
  if (!currentSignal) return;
  for (var i = 0; i < signals.length; i++){
    if (signals[i].id === currentSignal.id){ signals[i].result = result; break; }
  }
  persist();
  renderStats();
  renderHistory();
}
function hideModalAndReset(){
  var o = document.getElementById('postTimerOverlay');
  o.classList.add('hidden');
  document.getElementById('questionBlock').hidden = false;
  document.getElementById('congratBlock').hidden = true;
  document.getElementById('infoBlock').hidden = true;
  resetApp();
}

function renderStats(){
  var done = signals.filter(function(s){ return s.result === 'win' || s.result === 'loss'; });
  var wins = done.filter(function(s){ return s.result === 'win'; }).length;
  var losses = done.length - wins;
  var winrate = done.length ? (wins/done.length*100) : 0;
  var buys = signals.filter(function(s){ return s.direction === 'BUY'; }).length;
  var sells = signals.filter(function(s){ return s.direction === 'SELL'; }).length;

  var best = 0, worst = 0, run = 0, type = null;
  signals.forEach(function(s){
    if (s.result === 'pending') return;
    if (s.result === type) run++;
    else { type = s.result; run = 1; }
    if (s.result === 'win') best = Math.max(best, run);
    if (s.result === 'loss') worst = Math.max(worst, run);
  });

  var el;
  el = document.getElementById('winrateNum'); if (el) el.textContent = winrate.toFixed(0);
  el = document.getElementById('totalSignals'); if (el) el.textContent = signals.length;
  el = document.getElementById('totalSignalsSub'); if (el) el.textContent = done.length ? (wins + 'W · ' + losses + 'L') : '—';
  el = document.getElementById('buySellSplit'); if (el) el.textContent = buys + ' / ' + sells;
  el = document.getElementById('bestStreak'); if (el) el.textContent = best;
  el = document.getElementById('worstStreak'); if (el) el.textContent = worst;

  var c = document.getElementById('winrateComment');
  if (c){
    if (!done.length) c.textContent = t('stats_comment_default');
    else if (winrate >= 70) c.textContent = t('stats_comment_high', { p: winrate.toFixed(0) });
    else if (winrate >= 50) c.textContent = t('stats_comment_mid', { p: winrate.toFixed(0) });
    else c.textContent = t('stats_comment_low', { p: winrate.toFixed(0) });
  }
  drawSpark();
}

function drawSpark(){
  var line = document.getElementById('sparkLine');
  var area = document.getElementById('sparkArea');
  if (!line || !area) return;
  var done = signals.filter(function(s){ return s.result !== 'pending'; });
  if (done.length < 2){ line.setAttribute('d',''); area.setAttribute('d',''); return; }
  var W = 300, H = 60;
  var v = 0;
  var pts = done.map(function(s){ v += s.result === 'win' ? 1 : -1; return v; });
  var minV = Math.min.apply(null, pts.concat([0]));
  var maxV = Math.max.apply(null, pts.concat([0]));
  var range = maxV - minV || 1;
  var d = pts.map(function(p, i){
    var x = (i/(pts.length-1)) * W;
    var y = H - ((p - minV)/range) * (H-8) - 4;
    return (i===0?'M':'L') + ' ' + x.toFixed(2) + ' ' + y.toFixed(2);
  }).join(' ');
  line.setAttribute('d', d);
  area.setAttribute('d', d + ' L ' + W + ' ' + H + ' L 0 ' + H + ' Z');
}

function renderHistory(){
  var list = document.getElementById('historyList');
  updateBadge();
  if (!list) return;
  var sorted = signals.slice().reverse();
  if (!sorted.length){
    list.innerHTML = '<div class="empty"><div class="empty__mark">/ / /</div><div class="empty__title">' + t('empty_no_signals') + '</div><div class="empty__text">' + t('empty_no_signals_text') + '</div></div>';
    return;
  }
  list.innerHTML = sorted.map(function(s){
    var tt = new Date(s.time);
    var time = tt.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    var date = tt.toLocaleDateString([], {day:'2-digit', month:'short'});
    var isBuy = s.direction === 'BUY';
    var r = s.result || 'pending';
    var rText = r === 'win' ? 'WIN' : r === 'loss' ? 'LOSS' : 'PENDING';
    return '<div class="row"><div class="row__dir ' + (isBuy?'buy':'sell') + '">' + (isBuy?'BUY':'SELL') + '</div><div class="row__main"><div class="row__pair">' + s.pair + '</div><div class="row__meta"><span>' + time + '</span><span class="sep">·</span><span>' + date + '</span><span class="sep">·</span><span>' + s.minutes + 'm</span></div></div><div class="row__result ' + r + '">' + rText + '</div></div>';
  }).join('');
}

function updateBadge(){
  var pending = signals.filter(function(s){ return s.result === 'pending'; }).length;
  var b = document.getElementById('historyBadge');
  if (!b) return;
  if (pending > 0){ b.textContent = pending; b.classList.remove('hidden'); }
  else b.classList.add('hidden');
}

function exportCSV(){
  if (!signals.length){ toast(t('toast_nothing_export'), 'info'); return; }
  var header = 'Time,Pair,Direction,Expiry,Result\n';
  var rows = signals.map(function(s){
    return '"' + new Date(s.time).toISOString() + '","' + s.pair + '","' + s.direction + '",' + s.minutes + ',"' + (s.result || 'pending') + '"';
  }).join('\n');
  var blob = new Blob([header + rows], { type: 'text/csv' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = 'trade-session-' + Date.now() + '.csv'; a.click();
  URL.revokeObjectURL(url);
  toast(t('toast_csv_exported')); sndSuccess();
}

function switchView(name){
  document.querySelectorAll('.view').forEach(function(v){ v.classList.add('hidden'); });
  var v = document.getElementById('view-' + name);
  if (v) v.classList.remove('hidden');
  document.querySelectorAll('.nav__btn').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-nav') === name); });
  window.scrollTo(0, 0);
  if (name === 'history') renderHistory();
  if (name === 'stats') renderStats();
}

function bindToggle(id, key){
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('on', settings[key]);
  el.addEventListener('click', function(){
    settings[key] = !settings[key];
    el.classList.toggle('on', settings[key]);
    persist(); haptic(8);
  });
}

function checkOnboarding(){
  var seen;
  try { seen = localStorage.getItem(STORAGE.onboarded); } catch(_){}
  if (!seen){
    var el = document.getElementById('onboarding');
    if (el) el.classList.remove('hidden');
  }
}

/* ============ INIT ============ */
applyLang(currentLang);
routeInitial();