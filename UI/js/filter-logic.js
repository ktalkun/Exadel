

class PhotoPost{
	/**
	 * Constructor
	 * @param {string} id - id of photo post.
	 * @param {string} description - description of photo post.
	 * @param {Date} createAt - date of creating photo post.
	 * @param {string} author - author created photo post.
	 * @param {string} photoLink - reference to photo for post.
	 * @param {object} hashTags - array of hashtags of photo post.
	 * @param {object} likes - array of authors, who liked photo post.
	 */
	constructor(id, description, createAt, author, photoLink, hashTags, likes){
		this._id = id;
		this.description = description;
		this._createAt = createAt;
		this._author = author;
		this.photoLink = photoLink;
		this._hashTags = hashTags;
		this._likes = likes;
	}


}
class PostModel {
    /**
     * Default max lenght of description string.
     */
    static MAX_DESCRIPTION_LENGTH = 200;

    /**
     * Constructor
     */
    constructor() {
        this._postList = [];
    }

    /**
     * Get array of posts applying filters if there are.
     * @param {number} [skip=0] - number of posts to skip.
     * @param {number} [top=10] - number of posts to show.
     * @param {object} [filterConfig={}}] - filters for posts array.
     * @return {object} array of posts after filtering
     */
    getPage(skip = 0, top = 10, filterConfig = {}) {
        if (
            typeof skip !== "number" ||
            typeof top !== "number" ||
            typeof filterConfig !== "object" ||
            filterConfig === null
        ) {
            let exception = "[Exception:getPhotoPosts()] - Invalid parameters.";
            throw exception;
        }

        // Set defult values of function arguments if arguments are incorrect.
        skip = skip >= 0 ? skip : 0;
        top = top >= 0 ? top : 10;

        return _postList
            .filter(post => isPostCorrespondToFilter(post, filterConfig))
            .sort((post1, post2) => post2.createAt - post1.createAt)
            .slice(skip, skip + top);
    }

    /**
     * Check corresponding post to filters in filterConfig.
     * @param {object} post - post to check for corresponfding filterConfig.
     * @param {object} filterConfig - filterConfig applying to post.
     */
    static isPostCorrespondToFilter(post, filterConfig) {
        let isDateContain = false;
        if (filterConfig.hasOwnProperty("dateIntervals")) {
            // for all intervals of dates and while isDateContain == false.
            for (
                let i = 0;
                i < filterConfig.dateIntervals.length && !isDateContain;
                i++
            ) {
                let dateInterval = filterConfig.dateIntervals[i];
                isDateContain =
                    dateInterval.from <= post.createAt &&
                    post.createAt <= dateInterval.to;
            }
        } else {
            // if filterConfig hasn't any dateFilters.
            isDateContain = true;
        }

        let isAuthorContain = false;
        if (filterConfig.hasOwnProperty("authors") && isDateContain) {
            isAuthorContain = filterConfig.authors.includes(post.author);
        } else {
            isAuthorContain = true;
        }

        let isTagsContain = false;
        if (
            filterConfig.hasOwnProperty("hashTags") &&
            isDateContain &&
            isAuthorContain
        ) {
            isTagsContain = filterConfig.hashTags.every(tag =>
                post.hashTags.includes(tag)
            );
        } else {
            isTagsContain = true;
        }

        return isDateContain && isAuthorContain && isTagsContain;
    }

    /**
     * Get post by identifier.
     * @param {string} id - id of post for getting.
     */
    get(id) {
        const foundPostIndex = module.photoPosts.findIndex(
            post => post.id === id
        );
        return foundPostIndex != -1 ? module.photoPosts[foundPostIndex] : null;
    }

    /**
     * Validate photo post.
     * @param {object} photoPost - photo post for validation.
     */
    static validate(photoPost) {
        return (
            typeof photoPost === "object" &&
            photoPost.hasOwnProperty("id") &&
            typeof photoPost.id === "string" &&
            photoPost.hasOwnProperty("description") &&
            typeof photoPost.description === "string" &&
            photoPost.description.length <= MAX_DESCRIPTION_LENGTH &&
            photoPost.hasOwnProperty("createAt") &&
            photoPost.createAt instanceof Date &&
            photoPost.hasOwnProperty("author") &&
            typeof photoPost.author === "string" &&
            photoPost.hasOwnProperty("photoLink") &&
            typeof photoPost.photoLink === "string" &&
            photoPost.hasOwnProperty("hashTags") &&
            typeof photoPost.hashTags === "object" &&
            photoPost.hasOwnProperty("likes") &&
            typeof photoPost.likes === "object"
        );
    }

    /**
     * Add photo post.
     * @param {object} photoPost - photo post for adding.
     */
    add(photoPost) {
        if (validatePhotoPost(photoPost)) {
            module.photoPosts.push(photoPost);
            return true;
        }
        return false;
    }

    /**
     * Edit photo post by id.
     * @param {string} id - id of photo post to edit.
     * @param {object} photoPost - photo post with information to update.
     */
    edit(id, photoPost) {
        if (typeof id === "string") {
            let oldPhotoPost = module.getPhotoPost(id);
            let updatePostIsValid =
                (photoPost.hasOwnProperty("description") &&
                    typeof photoPost.description === "string" &&
                    photoPost.description.length <= MAX_DESCRIPTION_LENGTH) ||
                (photoPost.hasOwnProperty("photoLink") &&
                    typeof photoPost.photoLink === "string") ||
                (photoPost.hasOwnProperty("hashTags") &&
                    typeof photoPost.hashTags === "object");
            // if post with updation info is valid and oldPost exists.
            if (updatePostIsValid && oldPhotoPost) {
                let updatePostKeys = Object.keys(photoPost).filter(
                    key => key != "id" && key != "createAt" && key != "author"
                );
                for (let i = 0; i < updatePostKeys.length; i++) {
                    oldPhotoPost[updatePostKeys[i]] =
                        photoPost[updatePostKeys[i]];
                }
                return true;
            }
        }
        return false;
    }

    /**
     * Remove photo post by id.
     * @param {string} id - id of photo post to remove.
     */
    remove(id) {
        if (typeof id === "string") {
            const foundPostIndex = module.photoPosts.findIndex(
                post => post.id === id
            );
            if (foundPostIndex != -1) {
                module.photoPosts.splice(foundPostIndex, 1);
                return true;
            }
        }
        return false;
    }
}
