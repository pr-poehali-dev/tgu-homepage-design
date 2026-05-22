import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/947f1b15-b363-495d-a6c1-204aa6877525/files/d0e3bdc6-17df-41dd-ad97-e159f16f22d3.jpg';
const LAB_IMG = 'https://cdn.poehali.dev/projects/947f1b15-b363-495d-a6c1-204aa6877525/files/d5367d22-6493-49e7-8595-bdc5547b40a0.jpg';
const STUDENTS_IMG = 'https://cdn.poehali.dev/projects/947f1b15-b363-495d-a6c1-204aa6877525/files/ed399690-e957-4af9-b9f9-7dbf5dfd85d5.jpg';

const NAV_LINKS = [
  { label: 'О университете', href: '#about' },
  { label: 'Программы', href: '#programs' },
  { label: 'Абитуриентам', href: '#applicants' },
  { label: 'Наука', href: '#science' },
  { label: 'Студентам', href: '#life' },
  { label: 'Контакты', href: '#contacts' },
];

const STATS = [
  { number: '140+', label: 'лет истории' },
  { number: '20K+', label: 'студентов' },
  { number: '300+', label: 'программ' },
  { number: 'ТОП-5', label: 'в России' },
];

const PROGRAMS = [
  { icon: 'Code', tag: 'Технологии', title: 'Информационные технологии', desc: 'ИИ, программирование, кибербезопасность, data science', level: 'Бакалавриат / Магистратура' },
  { icon: 'Atom', tag: 'Наука', title: 'Физика и математика', desc: 'Квантовые технологии, прикладная математика, физика', level: 'Бакалавриат / Аспирантура' },
  { icon: 'Dna', tag: 'Биология', title: 'Биотехнологии', desc: 'Молекулярная биология, биохимия, генетика', level: 'Бакалавриат / Магистратура' },
  { icon: 'BarChart3', tag: 'Экономика', title: 'Экономика и бизнес', desc: 'Финансы, менеджмент, международный бизнес', level: 'Бакалавриат / МВА' },
  { icon: 'Globe', tag: 'Гуманитарное', title: 'Международные отношения', desc: 'Дипломатия, политология, международное право', level: 'Бакалавриат / Магистратура' },
  { icon: 'Palette', tag: 'Творчество', title: 'Дизайн и медиа', desc: 'Графический дизайн, медиакоммуникации, журналистика', level: 'Бакалавриат' },
];

const SCIENCE_PROJECTS = [
  { icon: 'Cpu', title: 'Квантовые вычисления', desc: 'Разработка квантовых алгоритмов для задач оптимизации и криптографии нового поколения' },
  { icon: 'Leaf', title: 'Климатические технологии', desc: 'Мониторинг экосистем Сибири и разработка решений для углеродной нейтральности' },
  { icon: 'Brain', title: 'Нейронауки', desc: 'Исследования мозговой активности, разработка нейроинтерфейсов и ИИ-ассистентов' },
  { icon: 'Rocket', title: 'Аэрокосмические системы', desc: 'Разработка малых спутников и систем управления беспилотными аппаратами' },
];

const LIFE_ITEMS = [
  { icon: 'Music', title: 'Культура и творчество', desc: 'Студенческий театр, хор, танцевальные коллективы' },
  { icon: 'Trophy', title: 'Спорт', desc: '50+ спортивных секций, собственный стадион и бассейн' },
  { icon: 'Users', title: 'Студсоветы', desc: 'Участие в управлении университетом, защита интересов' },
  { icon: 'Plane', title: 'Международный обмен', desc: 'Программы обмена с 200+ университетами мира' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--dark-1)', fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(10,14,24,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,212,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm" style={{ background: 'var(--cyan)', color: 'var(--dark-1)', fontFamily: "'Oswald', sans-serif" }}>
              ТГУ
            </div>
            <span className="font-semibold text-white hidden sm:block" style={{ fontSize: 15 }}>
              Томский государственный
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#applicants" className="hidden sm:block btn-cyan px-5 py-2 rounded-lg text-sm font-semibold">
              Подать заявку
            </a>
            <button className="lg:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden px-6 pb-4" style={{ background: 'rgba(10,14,24,0.98)' }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm border-b nav-link" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                {l.label}
              </a>
            ))}
            <a href="#applicants" className="block mt-4 btn-cyan px-5 py-3 rounded-lg text-sm font-semibold text-center">
              Подать заявку
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="ТГУ кампус" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,14,24,0.95) 0%, rgba(10,14,24,0.7) 50%, rgba(10,14,24,0.9) 100%)' }} />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="max-w-3xl">
            <div className="section-tag animate-fade-up mb-6">Томский государственный университет</div>
            <h1 className="font-bold leading-none mb-6 animate-fade-up-delay-1"
              style={{ fontSize: 'clamp(52px, 8vw, 96px)', letterSpacing: '-0.02em', fontFamily: "'Oswald', sans-serif" }}>
              <span className="text-white">Твоё будущее</span>
              <br />
              <span className="text-gradient glow-text">начинается здесь</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10 animate-fade-up-delay-2" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520 }}>
              Один из ведущих классических университетов России. Наука, инновации
              и образование мирового уровня в сердце Сибири.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <a href="#applicants" className="btn-cyan px-8 py-4 rounded-xl text-base font-bold flex items-center gap-2">
                Поступить в 2025
                <Icon name="ArrowRight" size={18} />
              </a>
              <a href="#programs" className="btn-ghost px-8 py-4 rounded-xl text-base flex items-center gap-2">
                Программы обучения
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 animate-fade-up-delay-4">
              {STATS.map(s => (
                <div key={s.number} className="text-left">
                  <div className="stat-number" style={{ fontSize: 36 }}>{s.number}</div>
                  <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>SCROLL</span>
          <Icon name="ChevronDown" size={16} className="text-cyan-400" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative" style={{ background: 'var(--dark-2)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag mb-4">О университете</div>
              <h2 className="font-bold mb-6" style={{ fontSize: 'clamp(36px, 4vw, 56px)', color: 'white', lineHeight: 1.1, fontFamily: "'Oswald', sans-serif" }}>
                Более 140 лет<br />
                <span className="text-gradient">академических традиций</span>
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>
                ТГУ — первый университет Сибири, основанный в 1878 году. Сегодня это
                современный исследовательский центр, входящий в топ мировых рейтингов
                и объединяющий более 20 000 студентов из 70 стран мира.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>
                Мы сочетаем фундаментальную науку с практическими навыками, готовя
                специалистов, которые меняют мир. Наши выпускники работают в Google,
                NASA, Сбере, Яндексе и ведущих мировых компаниях.
              </p>
              <div className="flex flex-wrap gap-3">
                {['QS World Rankings', 'Проект 5-100', 'Нац. исследовательский', 'UNESCO'].map(tag => (
                  <span key={tag} className="tag-badge">{tag}</span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-glow">
                <img src={STUDENTS_IMG} alt="Студенты ТГУ" className="w-full h-80 object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,14,24,0.6) 0%, transparent 60%)' }} />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl p-4 border-glow hidden sm:block" style={{ background: 'var(--dark-card)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.15)' }}>
                    <Icon name="Award" size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Лучший университет</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Сибирского федерального округа</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-24 mesh-bg" style={{ background: 'var(--dark-1)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mb-4">Программы обучения</div>
            <h2 className="font-bold text-white" style={{ fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.1, fontFamily: "'Oswald', sans-serif" }}>
              Выбери своё направление
            </h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>
              Более 300 программ бакалавриата, магистратуры и аспирантуры
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map(p => (
              <div key={p.title} className="rounded-2xl p-6 border-glow card-hover cursor-pointer" style={{ background: 'var(--dark-card)' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,212,255,0.1)' }}>
                    <Icon name={p.icon} fallback="Star" size={22} className="text-cyan-400" />
                  </div>
                  <div>
                    <span className="tag-badge">{p.tag}</span>
                    <h3 className="font-semibold text-white mt-2" style={{ fontSize: 16 }}>{p.title}</h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'rgba(0,212,255,0.7)' }}>{p.level}</span>
                  <Icon name="ArrowRight" size={16} className="text-cyan-400 opacity-50" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="btn-ghost px-8 py-3 rounded-xl text-sm">Все программы обучения</button>
          </div>
        </div>
      </section>

      {/* APPLICANTS + FORM */}
      <section id="applicants" style={{ background: 'var(--dark-2)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-tag mb-4">Абитуриентам</div>
              <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.1, fontFamily: "'Oswald', sans-serif" }}>
                Подай заявку<br />
                <span className="text-gradient">онлайн</span>
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16 }}>
                Заполни форму, и наш менеджер свяжется с тобой в течение 24 часов.
                Расскажем о программах, условиях поступления и стипендиях.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Calendar', text: 'Приём документов: 20 июня — 25 июля 2025' },
                  { icon: 'FileCheck', text: 'Результаты ЕГЭ или внутренние экзамены' },
                  { icon: 'GraduationCap', text: 'Бюджетные места и целевые квоты доступны' },
                  { icon: 'Home', text: 'Иногородним — общежитие в 5 минутах от корпусов' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,212,255,0.1)' }}>
                      <Icon name={item.icon} fallback="Star" size={16} className="text-cyan-400" />
                    </div>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8 border-glow" style={{ background: 'var(--dark-card)' }}>
              {formSent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow" style={{ background: 'rgba(0,212,255,0.15)' }}>
                    <Icon name="CheckCircle" size={32} className="text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-white text-2xl mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>Заявка отправлена!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>Мы свяжемся с вами в ближайшее время</p>
                  <button onClick={() => setFormSent(false)} className="mt-6 btn-ghost px-6 py-2 rounded-lg text-sm">
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-bold text-white text-xl mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>Заявка на поступление</h3>

                  <div>
                    <label className="block text-xs mb-2 font-medium" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>ИМЯ И ФАМИЛИЯ *</label>
                    <input type="text" required placeholder="Иван Петров"
                      className="tgu-input w-full px-4 py-3 rounded-xl text-sm"
                      value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs mb-2 font-medium" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>EMAIL *</label>
                      <input type="email" required placeholder="ivan@mail.ru"
                        className="tgu-input w-full px-4 py-3 rounded-xl text-sm"
                        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs mb-2 font-medium" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>ТЕЛЕФОН</label>
                      <input type="tel" placeholder="+7 900 000 00 00"
                        className="tgu-input w-full px-4 py-3 rounded-xl text-sm"
                        value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs mb-2 font-medium" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>ИНТЕРЕСУЮЩЕЕ НАПРАВЛЕНИЕ</label>
                    <select className="tgu-input w-full px-4 py-3 rounded-xl text-sm appearance-none"
                      value={formData.program} onChange={e => setFormData({ ...formData, program: e.target.value })}
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: formData.program ? 'white' : 'rgba(255,255,255,0.3)' }}>
                      <option value="" disabled style={{ background: '#111827' }}>Выбери программу</option>
                      <option style={{ background: '#111827' }}>Информационные технологии</option>
                      <option style={{ background: '#111827' }}>Физика и математика</option>
                      <option style={{ background: '#111827' }}>Биотехнологии</option>
                      <option style={{ background: '#111827' }}>Экономика и бизнес</option>
                      <option style={{ background: '#111827' }}>Международные отношения</option>
                      <option style={{ background: '#111827' }}>Дизайн и медиа</option>
                      <option style={{ background: '#111827' }}>Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs mb-2 font-medium" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>СООБЩЕНИЕ</label>
                    <textarea rows={3} placeholder="Задай вопрос или расскажи о себе..."
                      className="tgu-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                      value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                  </div>

                  <button type="submit" className="btn-cyan w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 mt-2">
                    Отправить заявку
                    <Icon name="Send" size={16} />
                  </button>
                  <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SCIENCE */}
      <section id="science" className="py-24 grid-pattern" style={{ background: 'var(--dark-1)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="section-tag mb-4">Научные проекты</div>
              <h2 className="font-bold text-white" style={{ fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.1, fontFamily: "'Oswald', sans-serif" }}>
                Наука, которая<br /><span className="text-gradient">меняет мир</span>
              </h2>
            </div>
            <p className="md:max-w-xs text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Более 500 активных исследовательских проектов с финансированием от ведущих фондов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {SCIENCE_PROJECTS.map(p => (
              <div key={p.title} className="rounded-2xl p-7 border-glow card-hover" style={{ background: 'var(--dark-card)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
                  <Icon name={p.icon} fallback="Star" size={26} className="text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white text-xl mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="relative rounded-2xl overflow-hidden h-64 border-glow">
            <img src={LAB_IMG} alt="Лаборатория ТГУ" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,14,24,0.85) 0%, rgba(10,14,24,0.2) 60%, rgba(10,14,24,0.7) 100%)' }} />
            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <div className="section-tag mb-2">Инфраструктура</div>
                <p className="font-bold text-white" style={{ fontSize: 28, fontFamily: "'Oswald', sans-serif" }}>50+ научных лабораторий<br />и центров превосходства</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section id="life" className="py-24" style={{ background: 'var(--dark-2)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mb-4">Студенческая жизнь</div>
            <h2 className="font-bold text-white" style={{ fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.1, fontFamily: "'Oswald', sans-serif" }}>
              Учёба — это только<br /><span className="text-gradient">начало</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LIFE_ITEMS.map(item => (
              <div key={item.title} className="rounded-2xl p-6 text-center border-glow card-hover" style={{ background: 'var(--dark-card)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
                  <Icon name={item.icon} fallback="Star" size={24} className="text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white mb-2" style={{ fontSize: 15 }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'var(--dark-1)' }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.07) 0%, transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.1, fontFamily: "'Oswald', sans-serif" }}>
            Стань частью<br /><span className="text-gradient">нашего сообщества</span>
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>
            Присоединяйся к 20 000 студентам, которые уже строят будущее вместе с нами
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#applicants" className="btn-cyan px-10 py-4 rounded-xl font-bold flex items-center gap-2">
              Подать заявку <Icon name="ArrowRight" size={18} />
            </a>
            <a href="#contacts" className="btn-ghost px-10 py-4 rounded-xl">Связаться с нами</a>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24" style={{ background: 'var(--dark-2)', borderTop: '1px solid rgba(0,212,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <div className="section-tag mb-4">Контакты</div>
              <h2 className="font-bold text-white mb-4" style={{ fontSize: 42, lineHeight: 1.1, fontFamily: "'Oswald', sans-serif" }}>Будем на связи</h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Приёмная комиссия работает пн–сб с 9:00 до 18:00. Ответим на все вопросы.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'MapPin', text: 'пр. Ленина, 36, Томск, 634050' },
                  { icon: 'Phone', text: '+7 (3822) 52-96-93' },
                  { icon: 'Mail', text: 'abitur@tsu.ru' },
                  { icon: 'Globe', text: 'www.tsu.ru' },
                ].map(c => (
                  <div key={c.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,212,255,0.1)' }}>
                      <Icon name={c.icon} fallback="Star" size={15} className="text-cyan-400" />
                    </div>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border-glow" style={{ minHeight: 240, background: 'var(--dark-card)' }}>
              <div className="w-full h-full flex items-center justify-center min-h-64" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(124,58,237,0.05) 100%)' }}>
                <div className="text-center">
                  <Icon name="MapPin" size={40} className="text-cyan-400 mx-auto mb-3 animate-float" />
                  <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Томск, пр. Ленина, 36</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.25)' }}>Интерактивная карта</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--dark-1)', borderTop: '1px solid rgba(255,255,255,0.05)' }} className="py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-xs" style={{ background: 'var(--cyan)', color: 'var(--dark-1)', fontFamily: "'Oswald', sans-serif" }}>
              ТГУ
            </div>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>© 2025 Томский государственный университет</span>
          </div>
          <div className="flex gap-6">
            {NAV_LINKS.slice(0, 4).map(l => (
              <a key={l.href} href={l.href} className="text-xs nav-link">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;