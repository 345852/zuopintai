const icons = {
  search: '<circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/>',
  arrow: '<path d="M6 18 18 6M6 6h12v12"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="3"/><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  mobile: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 18h2"/>',
  game: '<path d="M7.5 6h9a4 4 0 0 1 3.8 3l1.6 7a3 3 0 0 1-5 2.8L14.8 17H9.2l-2.1 1.8a3 3 0 0 1-5-2.8l1.6-7a4 4 0 0 1 3.8-3Z"/><path d="M7 9v5M4.5 11.5h5M15.5 10h.01M18 13h.01"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/>',
  spark: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  list: '<path d="M9 5h12M9 12h12M9 19h12M3 5h1M3 12h1M3 19h1"/>',
  play: '<path d="m8 4 12 8-12 8V4Z"/>'
};
function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.grid}</svg>`;
}
document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });

const categories = [
  {name:'全部', label:'全部作品', icon:'grid'},
  {name:'应用体验', label:'应用体验', icon:'mobile'},
  {name:'游戏互动', label:'游戏互动', icon:'game'},
  {name:'工具后台', label:'工具后台', icon:'layers'},
  {name:'AI探索', label:'AI 探索', icon:'spark'}
];
const visuals = {
  WORK_M1:{cover:'#d9e5c9',ink:'#52643e',color:'#b6c99e',type:'recipe'},
  WORK_G1:{cover:'#b8a8d0',ink:'#4a3a62',color:'#c4aedc',type:'battle'},
  WORK_M2:{cover:'#b1c8cb',ink:'#34515b',color:'#b3ccd0',type:'film'},
  WORK_T1:{cover:'#bfd0e6',ink:'#486080',color:'#abc4e1',type:'editor'},
  WORK_D1:{cover:'#bacbb4',ink:'#425b43',color:'#bdd0b3',type:'monitor'},
  WORK_A1:{cover:'#cec1df',ink:'#68537e',color:'#d0bde5',type:'ai'},
  WORK_G2:{cover:'#bdd2cc',ink:'#436962',color:'#b8d2c9',type:'gameapp'}
};
function windowBar(label) {
  return `<div class="window-bar"><i></i><i></i><i></i><span>${label}</span></div>`;
}
// Decorative interface studies, not screenshots or live embedded apps.
function artwork(type) {
  if (type === 'recipe') return '<div class="cover-caption">春日<br>食光<small>FRESH EVERY DAY</small></div><div class="mini-phone"><div class="mini-notch"></div><div class="mini-phone-title">今天，吃点新鲜的</div><div class="mini-sub">为每一餐添一点好心情</div><div class="mini-food"></div><div class="mini-lines"></div><div class="mini-pill">发现今日菜单</div></div><div class="mini-phone secondary"><div class="mini-notch"></div><div class="mini-phone-title">春日轻食</div><div class="mini-food small"></div><div class="mini-lines"></div><div class="mini-pill">加入我的菜单</div></div>';
  if (type === 'battle') return '<div class="mini-game-window"><div class="game-hud"><span>OFFICE FIGHTER</span><i></i></div><div class="game-city"></div><div class="game-floor"></div><div class="pixel-person"></div><span class="game-vs">VS</span><div class="pixel-person boss"></div><div class="game-key">MOVE / JUMP / ATTACK</div></div>';
  if (type === 'film') return '<div class="cover-caption film-caption">好故事，<br>不散场。<small>YOUR NEXT FAVORITE</small></div><div class="mini-phone film-phone"><div class="mini-notch"></div><div class="mini-phone-title">发现好电影</div><div class="film-poster"></div><div class="mini-sub">为你精选 · 每一帧都值得</div><div class="film-rows"><i></i><i></i><i></i></div></div>';
  if (type === 'editor') return `<div class="mini-desktop">${windowBar('Design workspace')}<div class="editor-rail"><i></i><i></i><i></i><i></i></div><div class="editor-stage"><div class="editor-block">${icon('layers')}CREATE SOMETHING</div></div><div class="editor-settings"></div></div>`;
  if (type === 'monitor') return `<div class="mini-desktop monitor-window">${windowBar('Market overview')}<div class="mini-metrics"><span><small>市场监测</small>OVERVIEW</span><span><small>策略回测</small>STRATEGY</span><span><small>资金流向</small>CAPITAL</span></div><div class="mini-chart"><svg viewBox="0 0 180 45" preserveAspectRatio="none" fill="none"><path d="M0 40 15 34 27 38 40 24 51 29 66 15 79 23 93 18 105 27 118 11 131 16 145 6 160 13 180 2" stroke="currentColor" stroke-width="2"/></svg></div></div>`;
  if (type === 'ai') return `<div class="mini-desktop ai-window">${windowBar('AI creative studio')}<div class="ai-chat"><span></span><span></span><strong>✦</strong><span></span><span></span></div><div class="ai-canvas">${icon('game')}<small>IDEA → PLAY</small></div></div>`;
  return `<div class="play-orbit">${icon('play')}</div><div class="mini-phone gameapp-phone"><div class="mini-notch"></div><div class="mini-phone-title">发现下一场冒险</div><div class="gameapp-feature">${icon('game')}</div><div class="mini-phone-title">为你推荐</div><div class="gameapp-tiles"><i></i><i></i><i></i><i></i></div></div>`;
}

function escapeHtml(value) {
  return String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
const grid = document.getElementById('worksGrid');
const searchInput = document.getElementById('searchInput');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
const toast = document.getElementById('toast');
const clearSearch = document.getElementById('clearSearch');
let currentFilter = '全部';
let toastTimer = 0;

document.getElementById('quickFilters').innerHTML = categories.map(c => `<button class="filter-tab" type="button" data-filter="${c.name}" aria-pressed="${c.name==='全部'}" aria-controls="worksGrid"><span>${c.label}</span><span class="filter-count">${works.filter(w=>c.name==='全部'||w.category===c.name).length}</span></button>`).join('');
document.getElementById('collectionCount').textContent = `${works.length} 个作品 · ${new Set(works.map(w=>w.category)).size} 个类别`;

function getFilteredWorks() {
  const keyword = searchInput.value.trim().toLowerCase();
  return works.filter(w => (currentFilter==='全部'||w.category===currentFilter) && (!keyword||`${w.title} ${w.category} ${w.description} ${w.url}`.toLowerCase().includes(keyword)));
}
function renderWorks() {
  const visible = getFilteredWorks();
  resultCount.textContent = visible.length;
  resultCount.setAttribute('aria-label', `显示 ${visible.length} 个作品`);
  document.getElementById('worksHeading').textContent = categories.find(c=>c.name===currentFilter).label;
  document.getElementById('openVisible').disabled = !visible.length;
  emptyState.hidden = !!visible.length;
  clearSearch.hidden = !searchInput.value;
  grid.innerHTML = visible.map(w => {
    const v = visuals[w.code];
    return `<article class="work-card" data-category="${escapeHtml(w.category)}" data-code="${w.code}" style="--cover:${v.cover};--cover-ink:${v.ink};--project-color:${v.color}">
      <a class="work-preview" href="${escapeHtml(w.url)}" target="_blank" rel="noopener noreferrer" aria-label="打开${escapeHtml(w.title)}（新标签页）">
        <div class="preview-art" aria-hidden="true"><span class="cover-index">${w.code.replace('WORK_','PROJECT / ')}</span>${artwork(v.type)}</div><span class="preview-open" aria-hidden="true">${icon('arrow')}</span>
      </a>
      <div class="work-body"><div class="work-meta"><span class="category-tag"><i aria-hidden="true"></i>${escapeHtml(w.category)}</span><span class="work-code">${escapeHtml(w.code)}</span></div>
        <h3 class="work-title"><a href="${escapeHtml(w.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(w.title)}</a></h3>
        <p class="work-description">${escapeHtml(w.description)}</p>
        <div class="work-bottom"><a class="open-link" href="${escapeHtml(w.url)}" target="_blank" rel="noopener noreferrer" aria-label="打开${escapeHtml(w.title)}（新标签页）">查看作品 ${icon('arrow')}</a><button class="copy-button" type="button" data-url="${escapeHtml(w.url)}" aria-label="复制${escapeHtml(w.title)}链接" title="${escapeHtml(w.url)}">${icon('copy')}复制链接</button></div>
      </div></article>`;
  }).join('');
}
function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed', String(b.dataset.filter===filter)));
  renderWorks();
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('is-visible'), 3200);
}
async function copyLink(url) {
  try {
    await navigator.clipboard.writeText(url);
    showToast('作品链接已复制');
  } catch {
    const previousFocus = document.activeElement;
    const helper = document.createElement('textarea');
    helper.value = url;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.left = '-9999px';
    document.body.appendChild(helper);
    helper.select();
    try {
      const copied = document.execCommand('copy');
      showToast(copied ? '作品链接已复制' : '复制失败，请右键作品标题复制链接');
    } catch {
      showToast('复制失败，请右键作品标题复制链接');
    } finally {
      helper.remove();
      if (previousFocus && previousFocus.focus) previousFocus.focus({preventScroll:true});
    }
  }
}

document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
searchInput.addEventListener('input', renderWorks);
clearSearch.addEventListener('click',()=>{searchInput.value='';renderWorks();searchInput.focus();});
document.getElementById('searchForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('projects').scrollIntoView({block:'start'});});
document.getElementById('resetFilters').addEventListener('click',()=>{searchInput.value='';setFilter('全部');searchInput.focus();});
document.addEventListener('keydown', e=>{
  if (e.defaultPrevented||e.isComposing||e.ctrlKey||e.metaKey||e.altKey) return;
  const editing=e.target instanceof HTMLElement && (e.target.matches('input,textarea,select')||e.target.isContentEditable);
  if(e.key==='/'&&!editing){e.preventDefault();searchInput.focus();}
  if(e.key==='Escape'&&document.activeElement===searchInput&&searchInput.value){searchInput.value='';renderWorks();}
});
grid.addEventListener('click',e=>{const b=e.target.closest('.copy-button');if(b)copyLink(b.dataset.url);});
document.getElementById('openVisible').addEventListener('click',()=>{
  getFilteredWorks().forEach(w=>window.open(w.url,'_blank','noopener,noreferrer'));
  showToast('已请求打开当前作品；若未全部打开，请允许浏览器弹出新标签页');
});
function setView(view) {
  grid.classList.toggle('is-list',view==='list');
  document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));
  try{localStorage.setItem('zuopintai-view',view);}catch{}
}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
try{if(localStorage.getItem('zuopintai-view')==='list')setView('list');}catch{}
setFilter('全部');
