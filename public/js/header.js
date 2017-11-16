let whatWeDoList = [
    'Ransomware',
    'Virus',
    'Performance',
    'Development',
    'Security',
    'Consultation',
    'Design',
    'Windows',
    'Linux',
    'Apple'
]

let wwdl = () => {

    whatWeDoList.forEach((item, index) => {
        setTimeout( () => {
            let randomwwd = document.getElementById('randomwwd')
            randomwwd.innerHTML = item

            if (whatWeDoList.length === (index + 1)) {
                setTimeout(wwdl, 2000)
            }

            if (index !== 100) {
                
            }

        }, index * 2000)
    })
}

wwdl()