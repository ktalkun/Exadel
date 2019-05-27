package by.tolkun.plenta.entity;

import java.util.ArrayList;
import java.util.Date;

public class PhotoPost {
    private int id;
    private String description;
    private Date createAt;
    private String author;
    private String photoLink;
    private ArrayList<String> likes;
    private ArrayList<String> tags;

    public PhotoPost(final int id,
                     final String description,
                     final Date createAt,
                     final String author,
                     final String photoLink,
                     final ArrayList<String> likes,
                     final ArrayList<String> tags) {
        this.id = id;
        this.description = description;
        this.createAt = createAt;
        this.author = author;
        this.photoLink = photoLink;
        this.likes = likes;
        this.tags = tags;
    }

    public int getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Date getCreatedAt() {
        return createAt;
    }

    public String getAuthor() {
        return author;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public ArrayList<String> getLikes() {
        return likes;
    }

    public ArrayList<String> getTags() {
        return tags;
    }
}