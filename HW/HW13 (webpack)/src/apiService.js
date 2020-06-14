export default async function getImg(query, page) {
    try {
        const response = await fetch(
            `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=16352775-e4b493d4dc88a53a96ef2040d`,
        );
        const image = response.json();
        return image;
    } catch (err) {
        throw err;
    }
}

