export const typeWriter = (id, text) => {
    const typewriter = document.getElementById(id)
    let i = 0
    let newText = ""
    let del = false
    let waitPrinciple = true
    let waitEnd = true
    let stepEnd = 0
    const waitTime = 2000
    const delay = 200

    setInterval(() => {
        if( waitPrinciple === false ) {
            if(del === false) {
                newText += text[i]
                typewriter.innerText = newText
                i++
                setTimeout(() => {
                    if(i === text.length) {
                        i = 0
                        del = true
                    }
                }, delay)
            }
            if(del === true) {
                if(waitEnd === false) {
                    newText = newText.substring(0, newText.length - 1)
                    typewriter.innerText = newText
                    if(newText.length === 0) {
                        del = false
                        waitPrinciple = true
                        stepEnd = 0
                        waitEnd = true
                    }
                }else{
                    stepEnd++
                    if(stepEnd * 400 === waitTime) {
                        waitEnd = false
                        stepEnd = 0
                    }
                }
            }
            
        }else{
            stepEnd ++
            if(stepEnd * 400 === waitTime) {
                waitPrinciple = false
                stepEnd = 0
            }
        }
    }, delay)
}