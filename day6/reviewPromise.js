function sleep(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms)
    })
}

sleep(1000)
.then(()=>{
    console.log('1')
    return sleep(1000);
}).then(()=>{
    console.log('2')
})

async function run() {
    await sleep(1000);
    console.log('1');
    await sleep(1000);
    console.log('2');
}
run();

