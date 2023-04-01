export const GardientList = [
    'bg-gradient-to-r from-violet-600 to-indigo-600',
    'bg-gradient-to-r from-red-500 to-orange-500',
    'bg-gradient-to-r from-rose-400 to-red-500',
    'bg-gradient-to-r from-pink-500 to-rose-500',
    'bg-gradient-to-r from-amber-200 to-yellow-400',
    'bg-gradient-to-r from-amber-500 to-pink-500',
    'bg-gradient-to-r from-violet-200 to-pink-200',
    'bg-gradient-to-r from-blue-200 to-cyan-200',
    'bg-gradient-to-r from-teal-200 to-teal-500',
    'bg-gradient-to-r from-lime-400 to-lime-500',
    'bg-gradient-to-r from-teal-400 to-yellow-200',
    'bg-gradient-to-r from-cyan-500 to-blue-500',
    'bg-gradient-to-r from-fuchsia-500 to-cyan-500',
    'bg-gradient-to-r from-fuchsia-600 to-pink-600',
    'bg-gradient-to-r from-fuchsia-600 to-purple-600',
    'bg-gradient-to-r from-fuchsia-500 to-pink-500',
    'bg-gradient-to-r from-violet-500 to-purple-500',
    'bg-gradient-to-r from-violet-600 to-indigo-600',
    'bg-gradient-to-r from-purple-500 to-purple-900',
    'bg-gradient-to-r from-blue-800 to-indigo-900',
    'bg-gradient-to-r from-slate-300 to-slate-500',
    'bg-gradient-to-r from-emerald-500 to-emerald-900',
    'bg-gradient-to-r from-slate-500 to-slate-800'
];

export default function randomTailwindGradient(){
    return GardientList[Math.floor(Math.random() * (GardientList.length - 1)) + 0]||'bg-gradient-to-r from-slate-500 to-slate-800'
}