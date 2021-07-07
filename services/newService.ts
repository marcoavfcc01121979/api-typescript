import newRepository from "../repository/newRepository"

class NewService {
    get() {
        return newRepository.find({})
    }

    getById(_id) {
        return newRepository.findById(_id)
    }

    create(news) {
        return newRepository.create(news)
    }

    update(_id, news) {
        return newRepository.findByIdAndUpdate(_id, news)
    }

    delete(_id) {
        return newRepository.findByIdAndRemove(_id)
    }
}

export default new NewService()