console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000);
    }
})
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 3")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 3")
            resolve("Harry 3")
        }, 2000)
    }
})

let p3 = Promise.allSettled([prom1, prom2, prom3])
p3.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err)
})

let p4 = Promise.race([prom1, prom2, prom3])
p4.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err)
})