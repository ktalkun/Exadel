package by.tolkun.plenta.servlet;

import by.tolkun.plenta.entity.PhotoPost;
import by.tolkun.plenta.service.impl.InMemoryPostService;
import by.tolkun.plenta.util.FilterConfig;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

public class PhotoPostsServlet extends HttpServlet {
    private InMemoryPostService service;
    private Gson gson;

    @Override
    public void init() throws ServletException {
        super.init();
        service = new InMemoryPostService();
        gson = new Gson();
    }

    protected void doGet(final HttpServletRequest request,
                         final HttpServletResponse response)
            throws IOException {
        FilterConfig filterConfig = new FilterConfig();
        filterConfig.setAuthors(Arrays.asList(
                "author1",
                "author2",
                "author3"
        ));
        filterConfig.setTags(Arrays.asList("tag1", "tag2"));
        filterConfig.setDateIntervals(Arrays.asList(new HashMap.SimpleEntry(
                new Date("2010/03/11"),
                new Date("2019/06/13")
        )));
        response
                .getWriter()
                .println(gson.toJson(
                        service.getPage(0, 10, filterConfig)
                ));
    }
}
