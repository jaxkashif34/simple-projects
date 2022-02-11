// console.log("Kahif")


setInterval(() => {
    // console.log("Kashif")
    const d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hRotation = (30 * htime) + (mtime / 2);
    mRotation = 6 * mtime;
    sRotation = 6 * stime;
    // document.querySelector("#hour").style.transform =`rotate(${hRotation}deg)`
    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${sRotation}deg)`
    // console.log(hRotation)
}, 1000);

