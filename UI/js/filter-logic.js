var posts = (function () {
	/**
	 * Default max lenght of description string.
	 */
	const MAX_DESCRIPTION_LENGTH = 200;

	/**
	 * Variable for getting functions outside.
	 */
	let module = {};
	module.photoPosts = [
		{
			id: "1",
			description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
			createAt: new Date("2019-02-23T23:58:00"),
			author: "Coryhoea",
			photoLink: "../img/articles/Photo_1.png",
			hashTags: ["city", "blue", "street"],
			likes: ["Lilia", "Paul"]
		},
		{
			id: "2",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet lacinia lorem, sit amet vehicula erat. Nulla metus tellus, pellentesque vitae malesuada vitae, pulvinar quis libero. Donec metus.",
			createAt: new Date("2019-02-23T23:03:00"),
			author: "Daniel",
			photoLink: "../img/articles/Photo_2.png",
			hashTags: ["car", "street"],
			likes: ["Coryhoea", "Helena", "Paul"]
		},
		{
			id: "3",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia posuere nisi, nec pretium orci pulvinar vitae. Aliquam eget magna quam posuere.",
			createAt: new Date("2019-02-23T17:06:00"),
			author: "Lilia",
			photoLink: "../img/articles/Photo_3.png",
			hashTags: ["nature", "green", "travel", "weather"],
			likes: ["Coryhoea", "Daniel"]
		},
		{
			id: "4",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nunc nec tellus tincidunt commodo. Vivamus dignissim lorem a lorem hendrerit, nec ultricies leo imperdiet. Ut efficitur metus.",
			createAt: new Date("2019-02-23T14:32:00"),
			author: "Coryhoea",
			photoLink: "../img/articles/Photo_4.png",
			hashTags: ["city", "blue", "street"],
			likes: ["Daniel", "Helena", "Lilia", "Kate"]
		},
		{
			id: "5",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam pulvinar placerat. Sed sed.",
			createAt: new Date("2019-02-22T11:18:00"),
			author: "Daniel",
			photoLink: "../img/articles/Photo_6.png",
			hashTags: ["car", "red", "street"],
			likes: ["Kate", "Lilia"]
		},
		{
			id: "6",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue sem, consequat nec aliquam sed, eleifend vitae purus. Nulla condimentum consectetur arcu in porta amet.",
			createAt: new Date("2019-02-22T11:18:00"),
			author: "Daniel",
			photoLink: "../img/articles/Photo_6.png",
			hashTags: ["nature", "picturesque"],
			likes: ["Coryhoea", "Paul", "Kate"]
		},
		{
			id: "7",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus vitae leo quis amet.",
			createAt: new Date("2019-02-22T01:31:00"),
			author: "Paul",
			photoLink: "../img/articles/Photo_7.png",
			hashTags: ["phone", "android"],
			likes: ["Daniel", "Helena", "Lilia", "Kate"]
		},
		{
			id: "8",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc erat nibh, congue eget justo ut, venenatis tempus ligula. Fusce ipsum nulla, ullamcorper non scelerisque eget, sollicitudin ac orci metus.",
			createAt: new Date("2019-02-21T00:15:00"),
			author: "Helena",
			photoLink: "../img/articles/Photo_8.png",
			hashTags: ["boy", "son", "football"],
			likes: ["Coryhoea", "Daniel"]
		},
		{
			id: "9",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis, neque a rhoncus rutrum, nulla arcu consectetur risus, ut pretium mi sem sit amet tellus turpis duis.",
			createAt: new Date("2019-02-21T21:13:00"),
			author: "Andrew",
			photoLink: "../img/articles/Photo_9.png",
			hashTags: ["man", "photographer", "canon"],
			likes: ["Coryhoea", "Helena", "Paul"]
		},
		{
			id: "10",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis, neque a rhoncus rutrum, nulla arcu consectetur risus, ut pretium mi sem sit amet tellus turpis duis.",
			createAt: new Date("2019-02-21T20:08:00"),
			author: "Kate",
			photoLink: "../img/articles/Photo_10.png",
			hashTags: ["nature", "green", "girl"],
			likes: ["Coryhoea", "Daniel", "Lilia"]
		},
		{
			id: "11",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi nisl, feugiat at lobortis id, congue quis velit sed.",
			createAt: new Date("2019-02-21T18:12:00"),
			author: "Daniel",
			photoLink: "../img/articles/Photo_11.png",
			hashTags: ["man", "dj", "earphones"],
			likes: ["Coryhoea", "Helena", "Paul", "Lilia", "Daniel", "Kate", "Andrew"]
		},
		{
			id: "12",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nibh a ex tristique egestas vel vitae est. Pellentesque pharetra eu nulla a aliquet. Donec convallis ipsum vel porta faucibus. Nam sed.",
			createAt: new Date("2019-02-21T21:11:00"),
			author: "Coryhoea",
			photoLink: "../img/articles/Photo_12.png",
			hashTags: ["railway", "people"],
			likes: ["Coryhoea", "Daniel", "Paul"]
		},
		{
			id: "13",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris lectus, posuere amet.",
			createAt: new Date("2019-02-17T18:22:00"),
			author: "Lilia",
			photoLink: "../img/articles/Photo_13.png",
			hashTags: ["city", "street", "evening"],
			likes: ["Paul", "Kate"]
		},
		{
			id: "14",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi nisl, feugiat at lobortis id, congue quis velit sed.",
			createAt: new Date("2019-02-19T07:12:00"),
			author: "Andrew",
			photoLink: "../img/articles/Photo_14.png",
			hashTags: ["job", "worker", "factory"],
			likes: ["Coryhoea", "Helena", "Paul", "Lilia", "Daniel", "Kate"]
		},
		{
			id: "15",
			description: "Lorem ipsum dolor sit amet, consectetur turpis duis.",
			createAt: new Date("2019-02-21T22:55:00"),
			author: "Kate",
			photoLink: "../img/articles/Photo_15.png",
			hashTags: ["love", "sea"],
			likes: ["Lilia", "Daniel", "Andrew"]
		},
		{
			id: "16",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor arcu sit amet mauris varius, et lacinia augue facilisis. Quisque at dui at velit metus.",
			createAt: new Date("2019-02-23T18:22:00"),
			author: "Helena",
			photoLink: "../img/articles/Photo_16.png",
			hashTags: ["man", "roof", "afternoon"],
			likes: ["Kate", "Coryhoea", "Daniel"]
		},
		{
			id: "17",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris lectus, posuere amet.",
			createAt: new Date("2019-02-21T19:33:00"),
			author: "Paul",
			photoLink: "../img/articles/Photo_17.png",
			hashTags: ["sport", "skateboard"],
			likes: ["Coryhoea", "Helena", "Paul", "Lilia"]
		},
		{
			id: "18",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi nisl, feugiat at lobortis id, congue quis velit sed.",
			createAt: new Date("2019-02-15T12:12:00"),
			author: "Andrew",
			photoLink: "../img/articles/Photo_18.png",
			hashTags: ["nature", "green", "man"],
			likes: ["Daniel", "Lilia"]
		},
		{
			id: "19",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor arcu sit amet mauris varius, et lacinia augue facilisis. Quisque at dui at velit metus.",
			createAt: new Date("2019-02-18T16:19:00"),
			author: "Coryhoea",
			photoLink: "../img/articles/Photo_19.png",
			hashTags: ["nature", "blue", "trees"],
			likes: ["Coryhoea", "Helena", "Paul", "Lilia", "Daniel", "Kate", "Andrew"]
		},
		{
			id: "20",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nibh a ex tristique egestas vel vitae est. Pellentesque pharetra eu nulla a aliquet. Donec convallis ipsum vel porta faucibus. Nam sed.",
			createAt: new Date("2019-02-19T22:23:00"),
			author: "Lilia",
			photoLink: "../img/articles/Photo_20.png",
			hashTags: ["country", "nature", "yellow", "building"],
			likes: ["Coryhoea", "Helena", "Paul", "Lilia", "Daniel"]
		}
	];

	/**
	 * Get array of posts applying filters if there are.
	 * @param {number} [skip=0] - number of posts to skip.
	 * @param {number} [top=10] - number of posts to show.
	 * @param {object} [filterConfig={}}] - filters for posts array.
	 * @return {object} array of posts after filtering
	 */
	function getPhotoPosts(skip = 0, top = 10, filterConfig = {}) {
		if (typeof (skip) !== 'number'
			|| typeof (top) !== 'number'
			|| typeof (filterConfig) !== 'object'
			|| filterConfig === null) {
			let exception = "[Exception:getPhotoPosts()] - Invalid parameters.";
			throw exception;
		}

		// Set defult values of function arguments if arguments are incorrect.
		skip = skip >= 0 ? skip : 0;
		top = top >= 0 ? top : 10;

		return module.photoPosts
			.filter(post => postCorrespondToFilter(post, filterConfig))
			.sort((post1, post2) => post2.createAt - post1.createAt)
			.slice(skip, skip + top);
	}

	module.getPhotoPosts = getPhotoPosts;

	/**
	 * Check corresponding post to filters in filterConfig.
	 * @param {object} post - post to check for corresponfding filterConfig.
	 * @param {object} filterConfig - filterConfig applying to post.
	 */
	function postCorrespondToFilter(post, filterConfig) {
		let isDateContain = false;
		if (filterConfig.hasOwnProperty("dateIntervals")) {
			// for all intervals of dates and while isDateContain == false.
			for (let i = 0;
				i < filterConfig.dateIntervals.length && !isDateContain;
				i++) {
				let dateInterval = filterConfig.dateIntervals[i];
				isDateContain = dateInterval.from <= post.createAt
					&& post.createAt <= dateInterval.to;
			}
		} else {
			// if filterConfig hasn't any dateFilters.
			isDateContain = true;
		}

		let isAuthorContain = false;
		if (filterConfig.hasOwnProperty("authors")
			&& isDateContain) {
			isAuthorContain = filterConfig.authors.includes(post.author);
		} else {
			isAuthorContain = true;
		}

		let isTagsContain = false;
		if (filterConfig.hasOwnProperty("hashTags")
			&& isDateContain
			&& isAuthorContain) {
			isTagsContain = filterConfig.hashTags
				.every(tag => post.hashTags.includes(tag));
		} else {
			isTagsContain = true;
		}

		return isDateContain && isAuthorContain && isTagsContain;
	}

	module.postCorrespondToFilter = postCorrespondToFilter;

	/**
	 * Get post by identifier.
	 * @param {string} id - id of post for getting.
	 */
	function getPhotoPost(id) {
		const foundPostIndex = module.photoPosts
			.findIndex(post => post.id === id);

		return foundPostIndex != -1 ? module.photoPosts[foundPostIndex] : null;
	}

	module.getPhotoPost = getPhotoPost;

	/**
	 * Validate photo post.
	 * @param {object} photoPost - photo post for validation.
	 */
	function validatePhotoPost(photoPost) {
		return typeof (photoPost) === "object"
			&& photoPost.hasOwnProperty("id")
			&& typeof (photoPost.id) === "string"
			&& photoPost.hasOwnProperty("description")
			&& typeof (photoPost.description) === "string"
			&& photoPost.description.length <= MAX_DESCRIPTION_LENGTH
			&& photoPost.hasOwnProperty("createAt")
			&& photoPost.createAt instanceof Date
			&& photoPost.hasOwnProperty("author")
			&& typeof (photoPost.author) === "string"
			&& photoPost.hasOwnProperty("photoLink")
			&& typeof (photoPost.photoLink) === "string"
			&& photoPost.hasOwnProperty("hashTags")
			&& typeof (photoPost.hashTags) === "object"
			&& photoPost.hasOwnProperty("likes")
			&& typeof (photoPost.likes) === "object";
	}

	module.validatePhotoPost = validatePhotoPost;

	/**
	 * Add photo post.
	 * @param {object} photoPost - photo post for adding.
	 */
	function addPhotoPost(photoPost) {
		if (validatePhotoPost(photoPost)) {
			module.photoPosts.push(photoPost);
			return true;
		}
		return false;
	}

	module.addPhotoPost = addPhotoPost;

	/**
	 * Edit photo post by id.
	 * @param {string} id - id of photo post to edit.
	 * @param {object} photoPost - photo post with information to update.
	 */
	function editPhotoPost(id, photoPost) {
		if (typeof (id) === "string") {
			let oldPhotoPost = module.getPhotoPost(id);
			let updatePostIsValid =
				(photoPost.hasOwnProperty("description")
					&& typeof (photoPost.description) === "string"
					&& photoPost.description.length <= MAX_DESCRIPTION_LENGTH)
				|| (photoPost.hasOwnProperty("photoLink")
					&& typeof (photoPost.photoLink) === "string")
				|| (photoPost.hasOwnProperty("hashTags")
					&& typeof (photoPost.hashTags) === "object");
			// if post with updation info is valid and oldPost exists.
			if (updatePostIsValid && oldPhotoPost) {
				let updatePostKeys = Object
					.keys(photoPost)
					.filter(key => key != "id"
						&& key != "createAt"
						&& key != "author");
				for (let i = 0; i < updatePostKeys.length; i++) {
					oldPhotoPost[updatePostKeys[i]] = photoPost[updatePostKeys[i]];
				}
				return true;
			}
		}
		return false;
	}

	module.editPhotoPost = editPhotoPost;

	/**
	 * Remove photo post by id.
	 * @param {string} id - id of photo post to remove.
	 */
	function removePhotoPost(id) {
		if (typeof (id) === "string") {
			const foundPostIndex = module.photoPosts
				.findIndex(post => post.id === id);
			if (foundPostIndex != -1) {
				module.photoPosts.splice(foundPostIndex, 1);
				return true
			}
		}
		return false;
	}

	module.removePhotoPost = removePhotoPost;

	return module;
}());