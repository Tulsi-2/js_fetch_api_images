
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

        let glry_img = item.url
        arr = []
        arr.push(glry_img)
        let gallery_section = document.querySelector('.gallery_section')

        for (let i = 0; i < arr.length; i++) {
            const imgg = document.createElement('img');
            imgg.src = arr[i];
            gallery_section.appendChild(imgg);
            imgg.style.height = "20rem"
            imgg.style.width = "20rem"
            imgg.style.display = "inline-block" 
            imgg.style.padding = "4rem"
            imgg.style.margin = "1rem"
            imgg.style.marginLeft = "6rem"
            imgg.style.objectFit = "cover"
            imgg.style.backgroundColor= "rgb(163, 199, 163)"
            imgg.style.border = "4px solid black"
        }
    })

})

// https://www.slingacademy.com/article/sample-photos-free-fake-rest-api-for-practice/
// https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20