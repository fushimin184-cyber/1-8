
import { CaseStudy } from './types';

export const COLORS = {
  primary: '#E78B2F',
  secondary: '#F9E6D3',
  light: '#FFF9F2',
  white: '#FFFFFF',
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: '李同学',
    background: '英国本科 · 人口健康，均分 68',
    offers: ['哈佛 公共卫生', '耶鲁 公共卫生', '帝国理工 公共卫生', '港大 公共卫生']
  },
  {
    name: '张同学',
    background: '西交利物浦 · 经济学，均分 86',
    offers: ['港中文 公共卫生', '耶鲁 卫生经济学', '约翰霍普金斯 全球健康经济学']
  },
  {
    name: '王同学',
    background: '英国本科 · 经济学，均分 70',
    offers: ['IC+UCL 全球健康管理', 'LSE 国际健康政策']
  },
  {
    name: '刘同学',
    background: '985/211 · 临床药学，均分 83',
    offers: ['新加坡国立大学 精准医学', '香港大学 医学科学']
  },
  {
    name: '周同学',
    background: '211 · 预防医学，均分 82',
    offers: ['哥伦比亚 流行病学', '康奈尔 公共卫生']
  },
  {
    name: '赵同学',
    background: '双非本科 · 公卫管理，均分 83',
    offers: ['布里斯托 人工智能医疗', '曼彻斯特 公共卫生']
  }
];

export const SERVICE_CHECKLIST = [
  "学业规划 (实习/科研/成绩分析)",
  "个人陈述 PS (根据学校修改)",
  "个人简历 CV",
  "推荐信 RL * 2",
  "其他申请材料翻译",
  "网申投递",
  "笔面试辅导 (视方案提供)",
  "录取结果追踪及 Argue",
  "安排体检预约",
  "签证材料准备+递签指导",
  "住宿预订指导",
  "机票预订指导"
];

export const EXTRA_WELFARE = [
  "语言考试指导",
  "雅思8周录播课程",
  "留学职业规划行前会",
  "本硕专业课程预习指导"
];
