/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Rest': '休息',
    'Reset': '重置',
    'Upgrade': '升级',
    'Save': '保存',
    'Load': '加载',
    'Import save': '导入存档',
    'Game version': '游戏版本',
    'Game saved!': '游戏已保存!',
    'Game loaded!': '游戏已加载!',
    'Export save': '导出存档',
    'Cancel': '取消',
    'Close': '关闭',
    'Achievements': '成就',
    'Import': '导入',
    'Import savegame': '导入存档数据',
    'Learnings': '学习',
    'Learning': '学习',
    'Speed limit': '速度极限',
    'Actual session time': '实际会话时间',
    'Boosted': '已提升',
    'development version': '开发版本',
    'Options': '选项',
    'Info': '信息',
    'Export game': '导出存档',
    'Export savegame': '导出存档',
    'Import game': '导入存档',
    'Load game': '加载游戏',
    'Meet Fali': '认识法利',
    'Now what?': '怎么办？',
    'Like a worm': '像蠕虫',
    'idle-traveller': '旅行者放置',
    'Multiplier +': '倍数 +',
    'Perks': '特权',
    'Perks owned': '拥有的特权',
    'Save game': '保存游戏',
    'Run start': '运行启动',
    'Aperture Science': '光圈科学',
    'Automatic boosts but boostbar is filled 10% slower': '自动推进，但推进器填充速度慢10%',
    'Boostbar sounds when full': '推进器在满的时候会发出声音',
    'Buy all upgrades and learnings in the game': '购买游戏中的所有升级和学习',
    'Rests': '休息',
    'Unleash the mind': '释放思想',
    'Fly like a bubble': '像泡沫一样飞翔',
    'In da Jonda': '在达琼达',
    'Increases the current speed (35%) but deactivates the boost bar': '增加当前的速度(35%)但不激活推进器',
    'It is possible that the game version changes in a short time.': '游戏版本可能会在短时间内改变。',
    'New things are coming!': '新的东西来了!',
    'Speed of light': '光的速度',
    'Upgrades owned': '已拥有升级',
    'Smaller boosts but more of them': '更小的推进器，但更多',
    'You are in a': '你当前在一个',
    's': '',
    'Reduces current speed (50%) but you keep travelling (at 15% of the current speed) while the game is closed': '降低当前速度(50%)，但你继续旅行(以当前速度的15%)，当游戏关闭时',
    'Do you wish to continue?': '你想继续吗？',
    'Gives you speed multiplier based on your actual progress and': '根据您的实际进度为您提供速度倍数',
    'If you ascend now you will get': '如果您现在转生，您将得到',
    'Ok!': '确定!',
    'Nope': '不',
    'resets all upgrades, learnings and your total distance.': '重置所有升级，学习和您的总距离。',
    'Last rest': '上次休息',
    " | Multiplier +": " | 倍数 +",
    '??? (multiplier +': '??? (倍数 +',
    'ALL PROGRESS WILL BE LOST, are you sure?': '所有游戏进度都将丢失，您确定吗？',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    ".": ".",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "| ": "| ",
    "					": "",
    "Little Boosts": "小的助推",
    "Autoturbo": "自动涡轮",
    "Autopilot": "自动驾驶仪",
    "Aerodynamics": "空气动力学",
    'Get in the Jonda': '进入琼达',
    'Get an hot-air balloon': '得到一个热气球',
    'Cross a wormhole': '穿越虫洞',
    'Basic Math': '基础数学',
    'Quick feet': '快速移动',
    'Walking Shoes': '步行鞋',
    'Skateboard': '滑板',
    'Roller Skates': '溜冰鞋',
    'Unicycle': '独轮车',
    'Hot Air Balloon': '热气球',
    'Horse': '马',
    'Bicycle': '自行车',
    'Hitch-hiking': '搭便车',
    'Motorcycle': '摩托车',
    'Canoe': '独木舟',
    'Submarine': '潜艇',
    'Sports car': '跑车',
    'Jet-pack': '单人飞行器',
    'Car': '汽车',
    'Train': '火车',
    'Helicopter': '直升机',
    'Ship': '轮船',
    'Applied mathematics': '应用数学',
    'High-speed train': '高铁',
    'Rest': '休息',
    ' for the first time ': '1次',
    ' for the tenth time ': '10次',
    ' for the twentieth time ': '20次',
    'Reach the speed of light (299.79 Mm/s)': '达到光速 (299.79 Mm/秒)',
    'Travel time cost: ': '旅行时间成本: ',
    'Take a break': '休息一下',
    'Travel trough portals': '旅行穿越传送门',
    'Rebase the 61 m/s': '重新设定 61m/秒',
    " (multiplier +": " (倍数 +",
    "(multiplier +": " (倍数 +",
    "Sound system | Activation cost:": "音响系统 | 激活费用：",
    "Achievement unlocked: ": "成就已解锁：",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "					": "",
    "				": "",
    "	     ": "",
    "	  	": "",
    "	   ": "",
    "	  ": "",
    "	 ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^(.+) m$/, //纯空格
    /^([\d\.]+) km$/, //纯空格
    /^([\d\.]+) Mm$/, //纯空格
    /^([\d\.]+) Gm$/, //纯空格
    /^ \| (.+) Gm$/, //纯空格
    /^ \| (.+) Mm$/, //纯空格
    /^ \| (.+) km$/, //纯空格
    /^ \| (.+) m$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^x(.+) multiplier$/, 'x$1 倍'],
    [/^ (.+) times$/, ' $1 次'],
    [/^Use the boost bar (.+) times \(multiplier \+$/, '使用推进器 $1 次 \(倍数 \+'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);