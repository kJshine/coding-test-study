/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resoleve => setTimeout(resoleve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */