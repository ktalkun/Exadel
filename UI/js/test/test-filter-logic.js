; (function () {
	let validPost = {
		id: "1651",
		description: "Lorem ipsum dolor sit amet.",
		createAt: new Date("2019-02-23T14:32:00"),
		author: "Coryhoea",
		photoLink: "../img/articles/Photo_4.png",
		hashTags: ["city", "blue", "street"],
		likes: ["Daniel", "Helena", "Lilia", "Kate"]
	}

	let wrongTypeOfIdPost = {
		id: 11984, // wrong type (should be "string").
		description: "Lorem ipsum dolor sit amet.",
		createAt: new Date("2019-02-23T14:32:00"),
		author: "Coryhoea",
		photoLink: "../img/articles/Photo_4.png",
		hashTags: ["city", "blue", "street"],
		likes: ["Daniel", "Helena", "Lilia", "Kate"]
	}

	let wrongNumberOfFieldPost = {
		id: "8979",
		description: "Lorem ipsum dolor sit amet.",
		createAt: new Date("2019-02-23T14:32:00"),
		// there aren't "author" field.
		photoLink: "../img/articles/Photo_4.png",
		hashTags: ["city", "blue", "street"],
		likes: ["Daniel", "Helena", "Lilia", "Kate"]
	}

	let wrongLengthOfDescriptionPost = {
		id: "4562",
		// Length of "description" field bigger than acceptable.
		description: "Lorem ipsum dolor sit amet." +
			"Lorem ipsum dolor sit amet ipsum dolor." +
			"Lorem ipsum dolor sit amet ipsum dolor." +
			"Lorem ipsum dolor sit amet ipsum dolor." +
			"Lorem ipsum dolor sit amet ipsum dolor." +
			"Lorem ipsum dolor sit amet ipsum dolor." +
			"Lorem ipsum dolor sit amet ipsum dolor." +
			"Lorem ipsum dolor sit amet ipsum dolor." +
			"Lorem ipsum dolor sit amet ipsum dolor." +
			"Lorem ipsum dolor sit amet ipsum dolor." +
			"Lorem ipsum dolor sit amet ipsum dolor.",
		createAt: new Date("2019-02-23T14:32:00"),
		author: "Coryhoea",
		photoLink: "../img/articles/Photo_4.png",
		hashTags: ["city", "blue", "street"],
		likes: ["Daniel", "Helena", "Lilia", "Kate"]
	}

	/**
	 * Test validate function.
	 */
	function testValidatePhotoPost() {
		console.log("----------Validation post----------");
		console.log("Valid photo post: " +
			posts.validatePhotoPost(validPost));
		console.log("Wrong type of field (id): "
			+ posts.validatePhotoPost(wrongTypeOfIdPost));
		console.log("Wrong number of fields (there aren't \"author\"): "
			+ posts.validatePhotoPost(wrongNumberOfFieldPost));
		console.log("Wrong length of \"description\": "
			+ posts.validatePhotoPost(wrongLengthOfDescriptionPost));
		console.log("\n");
	};

	/**
	 * Test add function.
	 */
	function testAddPhotoPost() {
		console.log("----------Adding post----------");
		// Same as validation function (add function include from validation)
		console.log("Valid photo post: " +
			posts.addPhotoPost(validPost));
		console.log("Wrong type of field (id): "
			+ posts.addPhotoPost(wrongTypeOfIdPost));
		console.log("Wrong number of fields (there aren't \"author\"): "
			+ posts.addPhotoPost(wrongNumberOfFieldPost));
		console.log("Wrong length of \"description\": "
			+ posts.addPhotoPost(wrongLengthOfDescriptionPost));
		console.log("\n");
	}

	/**
	 * Test get post function.
	 */
	function testGetPhotoPost() {
		console.log("----------Getting post----------");
		console.log("Valid \"id\" of post to get: " + posts.getPhotoPost("1"));
		console.log("Invalid value of \"id\" of the post to get: "
			+ posts.getPhotoPost("0"));
		console.log("Invalid type of field \"id\" of post to get: "
			+ posts.getPhotoPost(1));
		console.log("\n");
	}

	/**
	 * Test remove function.
	 */
	function testRemovePhotoPost() {
		console.log("----------Removing post----------");
		console.log("Valid \"id\" of post to remove: "
			+ posts.removePhotoPost("1651"));
		console.log("Invalid value of \"id\" of the post to remove: "
			+ posts.removePhotoPost("0"));
		console.log("Invalid type of field \"id\" of post to get: "
			+ posts.removePhotoPost(1));
		console.log("\n");
	}

	/**
	 * Test edit function.
	 */
	function testEditPhotoPost() {
		console.log("----------Editting post----------");
		console.log("Valid \"id\" and valid new data \"description\": "
			+ posts.editPhotoPost("1", { description: "new description" })
			+ ". New value of description: " + posts
				.getPhotoPost("1").description
		);
		console.log("Valid \"id\" and valid new data \"decription\", \"hashTags\": "
			+ posts.editPhotoPost("2", {
				description: "new description",
				hashTags: ["new hashTag1, new hashTag2"]
			})
			+ ". New value of description: " + posts
				.getPhotoPost("2").description
			+ ". New value of hashTags: " + posts
				.getPhotoPost("2").hashTags
		);
		console.log("Invalid value of \"id\" and valid new data: "
			+ posts.editPhotoPost("0", { description: "new description" }));
		console.log("Invalid type of field \"id\" and valid new data: "
			+ posts.editPhotoPost(1, { description: "new description" }));
		console.log("\n");
	}

	/**
	 * Test get posts function.
	 */
	function testGetPhotoPosts() {
		console.log("----------Getting posts----------");
		console.log("getPhotoPost():");
		console.log(posts.getPhotoPosts());
		console.log("getPhotoPost(9):");
		console.log(posts.getPhotoPosts(9));
		console.log("getPhotoPost(9, 5):");
		console.log(posts.getPhotoPosts(9, 5));
		console.log("getPhotoPost(0, 20):");
		console.log(posts.getPhotoPosts(0, 20));
		console.log("getPhotoPost(0, 20,{"
			+ " authors: [\"Paul\", \"Lilia\"],"
			+ " dateIntervals: [{from: new Date(\"2019-02-20T00:00:00\"), "
			+ " to: new Date(\"2019-02-23T24:00:00\")}]"
			+ "}):"
		);
		console.log(posts.getPhotoPosts(0, 40, {
			authors: ["Paul", "Lilia"],
			dateIntervals: [{
				from: new Date("2019-02-20T00:00:00"),
				to: new Date("2019-02-23T24:00:00")
			}],
		}));
	}

	testValidatePhotoPost();
	testAddPhotoPost();
	testGetPhotoPost();
	testRemovePhotoPost();
	testEditPhotoPost();
	testGetPhotoPosts();
}());