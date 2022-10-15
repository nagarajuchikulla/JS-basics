
let charCounting = (name) => {
    let outputObject = {};

    // let newArray = exitedAttary.map((item => ))

    let objectCount = Object.keys(outputObject);
    for (let key in outputObject) {
        if (objectCount.length) {
            for (let chaildKey in outputObject) {
                if (chaildKey == key) {
                    outputObject.chaildKey += 1;
                } else {
                    outputObject.chaildKey = 1;
                }
            }
        } else {
            outputObject.i = 1;
        }
    }
    console.log(outputObject);
    return outputObject;
}
charCounting("srimannarayana");




