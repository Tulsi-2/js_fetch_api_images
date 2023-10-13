
let img = document.querySelector('.imgDisplay')
let display_img = document.createElement('img')

get_img()

function get_img() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            let fetchData = fetch('https://api.slingacademy.com/v1/sample-data/photos')
            fetchData.then((res) => {
                return res.json()
            }).then((data) => {
                let x = Math.floor(Math.random() * 10)

                let final = data.photos[x].url

                display_img.style.height = "20rem"
                display_img.style.width = "40rem"
                display_img.style.margin = "auto"

                display_img.setAttribute('src', `${final}`)
                img.appendChild(display_img)

            })
            resolve()

        }, 2000)

    })

}
let fetch_img = fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
fetch_img.then((response) => {
    return response.json()
}).then((imgs) => {
    // console.log(imgs)
    let a = imgs.photos
    console.log(a)

    a.map((item) => {
        let gallery_section = document.querySelector('.gallery_section')
       
            const imgg = document.createElement('img');
            imgg.className = "allImg"
            imgg.src= item.url
            gallery_section.appendChild(imgg);
        
    })

})

// https://www.slingacademy.com/article/sample-photos-free-fake-rest-api-for-practice/
// https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20