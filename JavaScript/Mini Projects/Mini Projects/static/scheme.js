// color-scheme
let color = "sky"; //default

let color_list = ["red-500", "orange-800", "amber-600", "yellow-500", "lime-600", "green-600", "emerald-600", "teal-600", "cyan-500", "sky", "blue-600", "indigo-600", "violet-600", "fuchsia-700", "pink-600", "rose-500", "blue-grey-500", "brown-500", "deep-orange-800", "purple-600", "light-blue-500"];
let i = -1;

function changeColorScheme() {
    i = i >= color_list.length - 1 ? 0 : i + 1;
    color = color_list[i];
}

export{color, changeColorScheme}