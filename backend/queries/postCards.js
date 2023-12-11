const db = require('../db/dbConfig.js');

const getAllPostCards = async () => {
    try
    {
        const allPostcards = await db.any( 'SELECT * FROM postcards' );
        return allPostcards;
    } catch (error) {
		return error;
	}
}

const getPostCardById = async (id) => {
    try {
        const postcard = await db.any( 'SELECT * FROM postcards WHERE id = $1', id );
        return postcard;
    } catch (error) {
        return error;
    }
   
      
}

const createPostCard = async ( postcard ) =>
{
    try {
        const { name, message, planet_id } = postcard;
    const newPostcard = await db.one('INSERT INTO postcards (name, message, planet_)id) VALUES ($1, $2, $3)', [name, message, planet_id])
       return newPostcard
    } catch (error) {
        return error
    }
    
}

const updatePostCard = async ( postcard, id ) =>
{
    try {
        const { name, message, planet_id } = postcard;
        const updatedPostcard = await db.one( 'UPDATE postcards SET name = $1, message = $2, planet_id = $3 WHERE id = $4 RETURNING *', [ name, message, planet_id, id ] );
        return updatedPostcard
    } catch (error) {
        return error
    }
  
       
}

const deletePostCard = async (id) => {
    try {
        const deletedPostcard = await db.one( 'DELETE FROM postcards WHERE id = $1 RETURNING *', id )
        return deletedPostcard
    } catch (error) {
        return error;
        }
}


module.exports = {
    getAllPostCards,
    getPostCardById,
    createPostCard,
    updatePostCard,
    deletePostCard
}