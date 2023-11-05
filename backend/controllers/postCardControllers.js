const db = require('./db/db');
const queries = require('../queries/postCards');

const getAllPostCards = (request, response) => {
    db.any(queries.getAllPostCards)
        .then((data) => {
            response.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL postcards'
                });
        })
        .catch((error) => {
            response.status(400)
                .json({
                    status: 'error',
                    message: error
                });
        });
}

const getPostCardById = (request, response) => {
    const id = parseInt(request.params.id);
    db.any(queries.getPostCardById, [id])
        .then((data) => {
            response.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE postcard'
                });
        })
        .catch((error) => {
            response.status(400)
                .json({
                    status: 'error',
                    message: error
                });
        });
}

const createPostCard = (request, response) => {
    const { name, image, description } = request.body;
    db.none(queries.createPostCard, [name, image, description])
        .then(() => {
            response.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted ONE postcard'
                });
        })
        .catch((error) => {
            response.status(500)
                .json({
                    status: 'error',
                    message: error
                });
        });
}

const updatePostCard = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, image, description } = request.body;
    db.none(queries.updatePostCard, [name, image, description, id])
        .then(() => {
            response.status(200)
                .json({
                    status: 'success',
                    message: 'Updated ONE postcard'
                });
        })
        .catch((error) => {
            response.status(500)
                .json({
                    status: 'error',
                    message: error
                });
        });
}


const deletePostCard = (request, response) => {
    const id = parseInt(request.params.id);
    db.result('DELETE FROM postcards WHERE id = $1', [id])
        .then((result) => {
            response.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result.rowCount} postcard`
                });
        })
        .catch((error) => {
            response.status(500)
                .json({
                    status: 'error',
                    message: error
                });
        });
}



module.exports = {
    getAllPostCards,
    getPostCardById,
    createPostCard,
    updatePostCard,
    deletePostCard
}