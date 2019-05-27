package by.tolkun.plenta.service.impl;


import by.tolkun.plenta.entity.PhotoPost;
import by.tolkun.plenta.service.IPostService;
import by.tolkun.plenta.util.FilterConfig;

import java.util.*;
import java.util.stream.Collectors;

public class InMemoryPostService implements IPostService {

    private ArrayList<PhotoPost> photoPosts;

    public InMemoryPostService() {
        photoPosts = new ArrayList<>();
        ArrayList<String> tags = new ArrayList<>(Arrays.asList("tag1", "tag2"));
        ArrayList<String> likes = new ArrayList<>(Arrays.asList("like1", "like2"));
        PhotoPost post1 = new PhotoPost(
                1,
                "desc1",
                new Date("2010/03/12"),
                "author1",
                "link1",
                likes,
                tags
        );
        PhotoPost post2 = new PhotoPost(
                2,
                "desc2",
                new Date("2019/06/12"),
                "author2",
                "link2",
                likes,
                tags
        );
        PhotoPost post3 = new PhotoPost(
                3,
                "desc3",
                new Date("2017/05/18"),
                "author3",
                "link3",
                likes,
                tags
        );
        photoPosts.add(post1);
        photoPosts.add(post2);
        photoPosts.add(post3);
    }

    @Override
    public PhotoPost getPost(int id) {
        for (int i = 0; i < photoPosts.size(); i++) {
            if (photoPosts.get(i).getId() == id) {
                return photoPosts.get(i);
            }
        }
        return null;
    }

    static int boolToInt(boolean b) {
        return Boolean.compare(b, false);
    }

    @Override
    public List<PhotoPost> getPage(final int skip,
                                   final int top,
                                   final FilterConfig filterConfig) {
        List<PhotoPost> resultPhotoPosts = photoPosts
                .stream()
                .filter(photoPost -> {
                    if ((filterConfig.getAuthors() == null
                            || filterConfig
                            .getAuthors()
                            .contains(photoPost.getAuthor()))
                            && (filterConfig.getTags() == null || filterConfig
                            .getTags()
                            .containsAll(photoPost.getTags()))
                            && (filterConfig.getDateIntervals() == null || filterConfig
                            .getDateIntervals()
                            .stream()
                            .anyMatch(dateDateEntry ->
                                    photoPost.getCreatedAt().after(dateDateEntry.getKey())
                                            && photoPost.getCreatedAt().before(dateDateEntry.getValue())))
                    ) {
                        return true;
                    }
                    return false;
                })
                .sorted(Comparator.comparing(PhotoPost::getCreatedAt).reversed())
                .collect(Collectors.toList());
        return resultPhotoPosts.subList(skip, Math.min(top, resultPhotoPosts.size()));
    }

    @Override
    public boolean addPost(PhotoPost post) {
        return photoPosts.add(post);
    }

    @Override
    public boolean deletePost(int id) {
        return photoPosts.removeIf(photoPost -> photoPost.getId() == id);
    }

    @Override
    public boolean editPost(PhotoPost newPost) {
        for (int i = 0; i < photoPosts.size(); i++) {
            if (photoPosts.get(i).getId() == newPost.getId()) {
                photoPosts.set(i, newPost);
                return true;
            }
        }
        return false;
    }

    public ArrayList<PhotoPost> getPhotoPosts() {
        return photoPosts;
    }
}