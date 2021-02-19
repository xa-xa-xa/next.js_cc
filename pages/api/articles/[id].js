import { articles } from '../../../data';

export default function handler({query: { alpha3Code}}, res) {
    const filtered = articles.filter(article => article.alpha3Code === alpha3Code);
    if (filtered.length) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `Article with id: '${alpha3Code}' is not found` })
    }
}