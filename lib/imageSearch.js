
export default function filterImages(images, searchQuery=null) {
     let filteredImages

     searchQuery
         ? filteredImages = Object.fromEntries(Object.entries(images).filter(([key, value]) => value.label.includes(searchQuery)))
         : filteredImages = images;


    return filteredImages
}