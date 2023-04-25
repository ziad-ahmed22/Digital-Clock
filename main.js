setInterval(() => {
    clock();
}, 1000);

function clock() {
    let data = new Date();
    let h = data.getHours() > 12 ? data.getHours() - 12 : data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    let apm = data.getHours() > 12 ? "PM" : "AM";
    
    let time = `${h < 10 ? "0" + h : h} : ${m < 10 ? "0" + m : m} : ${s < 10 ? "0" + s : s} ${apm}`;
    document.querySelector('.clock').textContent = time;
    
    // let data = new Date().toLocaleTimeString();
    // document.querySelector('.clock').textContent = data;
}
