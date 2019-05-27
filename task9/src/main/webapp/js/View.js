class PostView{

    constructor(postModel, container) {
        this.postModel = postModel;
        this.container = container;
    }

    buildPost(photoPost) {
        const template = container.getElementById("article-template");
        const fragment = document.importNode(template.content, true);
        let newPhotoPost = fragment.firstElementChild;
        newPhotoPost.children[0].setAttribute("src", photoPost.photoLink);
        let description = newPhotoPost.children[1];
        description.children
        // let postNodes = ArnewPhotoPost.child;
        // postNodes[]
    }
}