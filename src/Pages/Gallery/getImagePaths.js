export default function getImagePaths(directory) {
    let images = [];
    directory.keys().map((item, index) => images.push(item.replace("./", "")));
    return images;
}