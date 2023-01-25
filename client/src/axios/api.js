import axios from 'axios'

const URL = 'http://localhost:3000/items'

const getAllItems = async (cb) => {
    try{
        let items = await axios({
            method: 'GET',
            url: URL
        })
        cb(items.data)
    } catch (e) {
        console.log(e)
    }
}

export {
    getAllItems
}