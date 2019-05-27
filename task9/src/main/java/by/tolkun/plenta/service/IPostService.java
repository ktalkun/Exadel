package by.tolkun.plenta.service;

import by.tolkun.plenta.entity.PhotoPost;
import by.tolkun.plenta.util.FilterConfig;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

public interface IPostService {
    List<PhotoPost> getPage(int skip, int top, FilterConfig filterConfig);

    boolean addPost(PhotoPost photoPost);

    boolean editPost(PhotoPost newPhotoPost);

    PhotoPost getPost(int id);

    boolean deletePost(int id);
}
