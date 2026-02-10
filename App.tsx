
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Trophy, 
  Mail, 
  Phone,
  Target,
  Zap,
  Users,
  ChevronDown,
  Info,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { CASE_STUDIES } from './constants';

const FadeInSection: React.FC<{ title?: string; children: React.ReactNode; bg?: string }> = ({ title, children, bg = 'bg-transparent' }) => {
  return (
    <section className={`py-6 md:py-10 px-4 md:px-20 ${bg}`}>
      {title && (
        <div className="mb-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-1.5 h-6 bg-yushi-500 rounded-full hidden md:block"></div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">{title}</h2>
          </div>
        </div>
      )}
      {children}
    </section>
  );
};

const PricingTable: React.FC<{ region: 'commonwealth' | 'asia' }> = ({ region }) => {
  const isCommonwealth = region === 'commonwealth';

  const headers = isCommonwealth 
    ? ['第一档', '第二档'] 
    : ['单校申请', '第二档', '第三档'];

  const submissionCounts = isCommonwealth
    ? ['最多 7-9 个 英澳新西兰 (非 G5) 混申', '最多 9-11 个 第一档学校 + 港/新/新加坡地区混申']
    : ['1', '5-6 个 (不保底)', '7-9 个 (保底)'];

  const prices = isCommonwealth
    ? ['13900', '16900']
    : ['9200', '13900', '15900'];

  const majorChoice = isCommonwealth
    ? ['1-2 个相关方向', '1-2 个相关方向']
    : ['单个专业', '1-2 方向', '1-2 方向'];

  const rows = [
    { label: '学习规划', values: isCommonwealth ? [true, true] : [false, true, true] },
    { label: '陈述 PS', values: isCommonwealth ? [true, true] : [true, true, true] },
    { label: '简历 CV', values: isCommonwealth ? [true, true] : [true, true, true] },
    { label: '推荐信 RL', values: isCommonwealth ? [true, true] : [true, true, true] },
    { label: '材料翻译', values: isCommonwealth ? [true, true] : [false, true, true] },
    { label: '网申投递', values: isCommonwealth ? [true, true] : [true, true, true] },
    { label: '笔面试', values: isCommonwealth ? [false, '1次'] : ['1次', '1次', '不限'] },
    { label: '录取追踪', values: isCommonwealth ? [true, true] : [false, true, true] },
    { label: '签证指导', values: isCommonwealth ? [true, true] : [false, true, true] },
    { label: '住宿机票', values: isCommonwealth ? [true, true] : [false, true, true] },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-yushi-100 shadow-md shadow-yushi-900/5 bg-white">
      <table className="w-full text-center border-collapse table-fixed">
        <thead>
          <tr className="bg-yushi-500 text-white font-bold">
            <th className="p-2 md:p-3 border-r border-yushi-600/20 text-left text-[11px] md:text-sm w-[25%]">服务内容</th>
            {headers.map((h, i) => (
              <th key={i} className="p-2 md:p-3 border-r border-yushi-600/20 last:border-0 text-[11px] md:text-sm">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700 font-medium">
          <tr className="bg-yushi-50/50">
            <td className="p-2 md:p-3 border-b border-r border-yushi-100 font-bold text-left text-[11px] md:text-sm">投递数量</td>
            {submissionCounts.map((v, i) => (
              <td key={i} className="p-2 md:p-3 border-b border-r border-yushi-100 last:border-r-0">
                <div className="font-bold text-gray-900 leading-tight text-[10px] md:text-xs">{v}</div>
              </td>
            ))}
          </tr>
          <tr className="bg-yushi-100/30">
            <td className="p-2 md:p-3 border-b border-r border-yushi-100 font-bold text-left text-yushi-600 text-[11px] md:text-sm">服务费用</td>
            {prices.map((p, i) => (
              <td key={i} className="p-2 md:p-3 border-b border-r border-yushi-100 last:border-r-0">
                <div className="flex flex-col items-center">
                  <span className="text-base md:text-xl font-black text-yushi-500 tracking-tighter">{p}</span>
                  <span className="text-[9px] md:text-[10px] uppercase font-bold text-yushi-400">RMB</span>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-2 md:p-3 border-b border-r border-yushi-100 font-bold text-left text-[11px] md:text-sm">选专业</td>
            {majorChoice.map((v, i) => (
              <td key={i} className="p-2 md:p-3 border-b border-r border-yushi-100 last:border-r-0 text-gray-500 text-[10px] md:text-xs">{v}</td>
            ))}
          </tr>
          {rows.map((row, idx) => (
            <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'} hover:bg-yushi-50 transition-colors`}>
              <td className="p-2 md:p-3 border-b border-r border-yushi-100 text-left text-gray-600 font-semibold text-[11px] md:text-sm truncate">{row.label}</td>
              {row.values.map((val, i) => (
                <td key={i} className="p-2 md:p-3 border-b border-r border-yushi-100 last:border-r-0">
                  {typeof val === 'boolean' ? (
                    val ? (
                      <div className="flex justify-center">
                        <div className="text-yushi-500">
                          <CheckCircle2 size={14} className="md:w-4 md:h-4" />
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-200 text-[10px] md:text-xs">—</span>
                    )
                  ) : (
                    <span className="text-yushi-600 font-bold text-[10px] md:text-xs">{val}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 bg-gray-50 border-t border-yushi-100">
         <div className="flex items-start gap-1.5">
           <Info size={12} className="text-yushi-400 mt-0.5 shrink-0" />
           <p className="text-[10px] md:text-xs text-gray-400 font-medium italic leading-tight">
             {isCommonwealth 
               ? "+5K 不同专业方向 (可加 5 个项目) 或申请英国 G5；增校每所 +1k"
               : "不同专业方向价格 +5K (CV+PS 为另一套，可加 5 校) 增校每所 +1k"}
           </p>
         </div>
      </div>
    </div>
  );
};

const SemiDIYItem: React.FC<{ 
  label: string; 
  price: string; 
  unit: string;
  content: string; 
  desc: string; 
}> = ({ label, price, unit, content, desc }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-b border-gray-100 last:border-0 transition-all duration-300 ${isOpen ? 'bg-yushi-50/30' : 'bg-white'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center px-4 py-3 md:px-6 md:py-4 hover:bg-yushi-50 transition-colors group"
      >
        <div className="text-left flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h4 className="text-[14px] md:text-base font-bold text-gray-800 tracking-tight group-hover:text-yushi-500 transition-colors">{label}</h4>
            <span className="text-[10px] font-black text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded uppercase tracking-tighter shrink-0">
              {unit}
            </span>
          </div>
          <p className="text-[12px] text-gray-400 font-medium uppercase tracking-wide leading-none">{content}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[14px] md:text-base font-black text-yushi-500">{price}</p>
          </div>
          <div className={`p-1 rounded-full border border-gray-100 group-hover:border-yushi-200 transition-all ${isOpen ? 'rotate-180 bg-yushi-500 text-white' : 'text-gray-300'}`}>
            <ChevronDown size={14} />
          </div>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-3 md:px-6 md:pb-4 pt-0">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-yushi-100/50 shadow-inner">
            <div className="flex gap-3">
              <div className="shrink-0 w-8 h-8 bg-yushi-100 rounded flex items-center justify-center text-yushi-500">
                <ShieldCheck size={16} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-yushi-400 uppercase tracking-[0.1em]">服务细则</span>
                <p className="text-[13px] text-gray-600 leading-snug font-medium">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [regionTab, setRegionTab] = useState<'commonwealth' | 'asia'>('commonwealth');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pb-6 bg-[#FAF9F6]">
      
      {/* Floating Header Nav */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 px-4 py-3 flex items-center justify-between ${scrolled ? 'glass py-2 shadow-md' : ''}`}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-yushi-500 rounded flex items-center justify-center shadow-lg shadow-yushi-500/30">
            <span className="text-white font-black text-[12px]">YS</span>
          </div>
          <span className={`text-[12px] font-black tracking-widest uppercase transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Yushi Consulting</span>
        </div>
      </nav>

      {/* Redesigned Header - Ultra Compact but Text Sized Up */}
      <header className="relative bg-yushi-500 rounded-b-[2.5rem] md:rounded-b-[4.5rem] flex flex-col items-center justify-center text-white px-8 pt-16 pb-14 shadow-xl mb-4">
        <div className="text-center animate-in fade-in zoom-in duration-700">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            硕士留学申请
          </h1>
        </div>
      </header>

      {/* Core Q&A Section */}
      <FadeInSection title="申请核心问答" bg="bg-white/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-gray-200/30 border border-gray-50 hover:border-yushi-100 transition-all duration-500">
            <div className="w-10 h-10 bg-yushi-50 text-yushi-500 rounded-lg flex items-center justify-center mb-3 group-hover:bg-yushi-500 group-hover:text-white transition-all">
              <Clock size={20} />
            </div>
            <h4 className="text-lg md:text-xl font-black text-gray-900 mb-2 tracking-tight">医学硕士申请的时间线是怎样的？</h4>
            <p className="text-[13px] md:text-base text-gray-500 leading-relaxed text-justify">
              医学硕士遵循“提前规划、滚动录取、先到先得”原则。多数学校从每年 <span className="text-yushi-600 font-bold">9–10 月</span> 开放申请，热门项目往往在 <span className="text-yushi-600 font-bold">次年 1–3 月</span> 满位。
            </p>
          </div>
          <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-gray-200/30 border border-gray-50 hover:border-yushi-100 transition-all duration-500">
            <div className="w-10 h-10 bg-yushi-50 text-yushi-500 rounded-lg flex items-center justify-center mb-3 group-hover:bg-yushi-500 group-hover:text-white transition-all">
              <FileText size={20} />
            </div>
            <h4 className="text-lg md:text-xl font-black text-gray-900 mb-2 tracking-tight">申请英联邦硕士一般需要准备哪些材料？</h4>
            <p className="text-[13px] md:text-base text-gray-500 leading-relaxed text-justify">
              核心材料包括：成绩单、个人陈述（PS）、学术简历（CV）、推荐信（RL）。其中，<span className="text-yushi-600 font-bold">文书材料</span> 往往是决定录取进入的关键。
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Product 1: DIY */}
      <FadeInSection title="DIY 硕士留学申请支持" bg="bg-gray-50/40">
        <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 shadow-lg shadow-yushi-900/5 border border-yushi-100 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yushi-50 rounded-full blur-3xl opacity-40"></div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10">
            <div className="md:w-[45%]">
              <div className="flex items-center gap-2.5 mb-3">
                <Target size={16} className="text-yushi-400" />
                <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.15em] text-yushi-400">适合人群</span>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {[
                  '对海外留学经验有足够认识，希望主导申请',
                  '需要专业团队在关键点把关（定位/文书）',
                  '医学、心理学背景，不想走模板化申请'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[13px] md:text-base font-semibold text-gray-600 leading-snug">
                    <CheckCircle2 size={16} className="text-yushi-500 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-yushi-50 rounded-lg border border-yushi-100">
                <p className="text-[12px] md:text-[13px] text-yushi-700 font-medium leading-relaxed italic">
                  “在保持自主申请灵活度的同时，获得专业团队的结构化支持，降低试错成本。”
                </p>
              </div>
            </div>

            <div className="md:w-[55%] flex flex-col justify-between gap-6">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <Zap size={16} className="text-yushi-400" />
                  <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.15em] text-yushi-400">服务内容</span>
                </div>
                {[
                  { title: '全流程 SOP 支持', desc: '定位分析、文书模版、时间表' },
                  { title: '个性化辅导课程', desc: '文书拆解、亮点挖掘及规划' },
                  { title: '院校投递服务', desc: '3 所合作院校：材料检查与建议' }
                ].map((s, i) => (
                  <div key={i} className="flex gap-3.5">
                    <div className="text-xl md:text-2xl font-black text-yushi-200 leading-none">{i + 1}</div>
                    <div className="flex flex-col">
                      <h5 className="text-[13px] md:text-base font-bold text-gray-800 leading-tight">{s.title}</h5>
                      <p className="text-[12px] md:text-[13px] text-gray-400 leading-none mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-end justify-between border-t border-gray-100 pt-5">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">价格</span>
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    <p className="text-xl md:text-2xl font-black text-yushi-500 leading-none tracking-tight">非 G5：699 RMB</p>
                    <p className="text-xl md:text-2xl font-black text-yushi-500 leading-none tracking-tight">G5 院校：800 RMB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Product 2: Full Package */}
      <FadeInSection title="多国联申全程方案" bg="bg-white">
        <div className="mb-6 md:mb-10 flex flex-col lg:flex-row gap-6 md:gap-10">
          <div className="lg:w-[30%] bg-yushi-100 border border-yushi-200 rounded-xl p-6 md:p-8 text-gray-900 shadow-md relative overflow-hidden shrink-0">
            <Users size={28} className="text-yushi-500 mb-4" />
            <h3 className="text-xl md:text-3xl font-black mb-4 tracking-tight text-gray-900 leading-tight">为您解决申请焦虑</h3>
            <ul className="space-y-3 mb-6">
              {[
                '担心错过关键节点、材料混乱',
                '首次申请或跨学科，无文书逻辑',
                '学业繁忙，无法全程盯执行',
                '对结果有高度确定性要求'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[12px] md:text-sm font-medium text-gray-600 leading-snug">
                  <div className="w-1.5 h-1.5 bg-yushi-500 rounded-full mt-2 shrink-0"></div> {item}
                </li>
              ))}
            </ul>
            <div className="p-4 bg-white rounded-lg border border-yushi-200/50 shadow-sm">
              <p className="text-[11px] md:text-[13px] text-yushi-600 leading-relaxed italic">
                “由专业团队把关全过程，降低试错成本。”
              </p>
            </div>
          </div>

          <div className="lg:w-[70%] w-full">
            <div className="flex bg-gray-100 p-1.5 rounded-lg mb-4 max-w-[240px] md:max-w-[300px] shadow-inner">
              <button 
                onClick={() => setRegionTab('commonwealth')} 
                className={`flex-1 py-2.5 rounded-md text-[11px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 ${regionTab === 'commonwealth' ? 'bg-white text-yushi-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                英联邦
              </button>
              <button 
                onClick={() => setRegionTab('asia')} 
                className={`flex-1 py-2.5 rounded-md text-[11px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 ${regionTab === 'asia' ? 'bg-white text-yushi-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                亚洲/香港
              </button>
            </div>
            <PricingTable region={regionTab} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="group bg-yushi-50/50 p-5 rounded-xl border border-yushi-100 hover:bg-yushi-50 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-yushi-500 text-white rounded shadow-md">
                <Sparkles size={16} />
              </div>
              <h4 className="text-[11px] md:text-xs font-black uppercase tracking-[0.1em] text-gray-800">额外福利服务</h4>
            </div>
            <p className="text-[13px] md:text-base font-bold text-yushi-700 leading-tight italic mb-3">
              语言指导及雅思 8 周录播课程 / 职业规划行前会 / 专业课程预习指导
            </p>
          </div>

          <div className="group bg-white p-5 rounded-xl border border-gray-100 shadow-lg shadow-gray-200/30 hover:border-yushi-100 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-yushi-700 text-white rounded shadow-md">
                <Users size={16} />
              </div>
              <h4 className="text-[11px] md:text-xs font-black uppercase tracking-[0.1em] text-gray-800">服务团队架构</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] md:text-[11px] font-black text-gray-300 uppercase">精品化团队</span>
                <p className="text-[12px] md:text-[13px] font-bold text-gray-600">班主任/导师/文书共 5+ 人</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-[11px] font-black text-gray-300 uppercase">全时支持</span>
                <p className="text-[12px] md:text-[13px] font-bold text-gray-600">中英 24H 双向对接</p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Product 3: Semi-DIY */}
      <FadeInSection title="半 DIY 个性化申请支持" bg="bg-[#FDFCFB]">
        <div className="bg-white rounded-xl md:rounded-[2.5rem] shadow-lg shadow-gray-200/40 border border-gray-100 overflow-hidden max-w-5xl mx-auto">
          <div className="p-6 md:p-8 border-b border-gray-50 bg-gray-50/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="md:max-w-lg">
                <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">具备自主执行能力？</h3>
                <p className="text-[13px] md:text-base text-gray-500 leading-tight">
                  本方案适合希望主导进度，仅在关键环节获取专业背书。
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['明确意向', '英文尚可', '看重质量'].map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-white text-[10px] md:text-[11px] font-bold text-gray-400 border border-gray-100 rounded-full uppercase">
                    # {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {[
              { label: '全套文书撰写', price: '7200', unit: '套', content: '1 PS + 1 CV + 2 RL', desc: '由专业背景对口导师联合沟通主线，完成文书撰写，确保整体逻辑一致。' },
              { label: '个人陈述 PS', price: '3000', unit: '篇', content: '500-800 词', desc: '由背景对口导师协同打磨，完成符合招生官评估逻辑的高质量 PS。' },
              { label: '学术简历 CV', price: '2000', unit: '份', content: '1-2 页', desc: '按学术申请标准重构简历结构，突出科研、实习与核心能力。' },
              { label: '推荐信 RL', price: '1500', unit: '封', content: '300-400 词', desc: '定制推荐信结构与内容重点，从第三方视角突出学术潜力。' },
              { label: '文书润色修改', price: '7 折', unit: '次', content: '语言与结构优化', desc: '对文书语言、逻辑结构与学术表达进行深度优化。需先评估。' },
              { label: '专业选择策略', price: '1500+', unit: '次', content: '多地区 2000 起', desc: '分析专业就业、案例背景，给出针对性的背景提升改进意见。' },
              { label: '网申系统支持', price: '150', unit: '所', content: '每所院校独立填写', desc: '材料检查，协助完成 system 填写、材料上传与提交。' },
              { label: '硕士面试辅导', price: '1000', unit: '次', content: '模拟训练', desc: '针对目标项目形式模拟训练，涵盖问题拆解、表达应对。' },
            ].map((item, i) => (
              <SemiDIYItem key={i} {...item} price={item.price + (item.price.includes('折') ? '' : ' RMB')} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Success Cases */}
      <FadeInSection title="学员录取榜" bg="bg-white">
        <div className="flex overflow-x-auto gap-5 md:gap-8 pb-6 px-4 -mx-4 no-scrollbar snap-x">
          {CASE_STUDIES.map((student, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[240px] md:w-[300px] bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md shadow-gray-200/30 flex flex-col hover:-translate-y-2 transition-transform group">
              <div className="mb-4">
                <h4 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight leading-none">{student.name}</h4>
                <p className="text-[11px] md:text-[13px] text-gray-400 font-bold uppercase mt-2 leading-tight line-clamp-2">
                  {student.background}
                </p>
              </div>
              <div className="flex-1 space-y-2">
                {student.offers.map((offer, oIdx) => (
                  <div key={oIdx} className="flex items-start gap-2 group/offer">
                    <div className="mt-2 w-1.5 h-1.5 bg-yushi-500 rounded-full shrink-0"></div>
                    <span className="text-[12px] md:text-[14px] font-bold text-gray-600 leading-tight group-hover/offer:text-yushi-500 transition-colors">
                      {offer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>

      {/* Redesigned Footer - Matching Reference Image */}
      <footer className="bg-yushi-50 py-10 px-8 text-center border-t border-yushi-100">
        <div className="max-w-4xl mx-auto">
          {/* Main Title and Brand Subtitles */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-yushi-500 mb-4 tracking-tight">
              YUSHI (博睿医智)
            </h2>
            <div className="space-y-1">
              <p className="text-base md:text-xl font-bold text-yushi-800">
                以医学与心理学为核心
              </p>
              <p className="text-base md:text-xl font-bold text-yushi-800">
                提供覆盖学术成长与职业发展的全程支持
              </p>
            </div>
          </div>

          {/* Horizontal Divider Line */}
          <div className="w-full h-px bg-yushi-200/50 mb-8 max-w-2xl mx-auto"></div>

          {/* Contact and WeChat Sections */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-10">
            {/* Contact Details */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-yushi-600 mb-3">联系我们</h3>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-black text-yushi-800 tracking-tight leading-none">
                  +86 13162611127 (中国)
                </p>
                <p className="text-xl md:text-2xl font-black text-yushi-800 tracking-tight leading-none">
                  +44 07419735373 (英国)
                </p>
              </div>
            </div>

            {/* Vertical Divider (Hidden on mobile) */}
            <div className="hidden md:block w-px h-24 bg-yushi-200/50"></div>

            {/* WeChat QR Code */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg md:text-xl font-bold text-yushi-600 mb-3">官方微信</h3>
              <div className="bg-white p-1 rounded-xl border border-yushi-100 shadow-sm">
                <img 
                  src="https://picsum.photos/seed/yushi-official-qr/120/120" 
                  alt="Official WeChat" 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-4">
            <p className="text-sm md:text-base font-bold text-yushi-700/60 uppercase tracking-widest">
              © 2026 YUSHI MEDICAL EDUCATION
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
