package by.tolkun.task8.servlet;

import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
public class PLentaServlet extends HttpServlet {
    private Gson gson;

    @Override
    public void init() throws ServletException {
        super.init();
        gson = new Gson();
    }

    @Override
    protected void doPost(
            final HttpServletRequest request,
            final HttpServletResponse response
    ) throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doGet(
            final HttpServletRequest request,
            final HttpServletResponse response
    ) throws ServletException, IOException {
        processRequest(request, response);
    }

    private void processRequest(
            final HttpServletRequest request,
            final HttpServletResponse response
    ) throws ServletException, IOException {
        System.out.println(request.getServletPath());
        String pageName = "result.jsp";
        switch (request.getServletPath()) {
            case "/status":
                response.getOutputStream().println("Application Is Running");
                break;
            case "/get":
                String name = request.getParameter("name");
                response.getOutputStream().println("Name is " + name);
                break;
            case "/check":
                response
                        .getWriter()
                        .println(gson.toJson(
                                "{success : true}"
                        ));
                break;
            case "/page":
                request
                        .getRequestDispatcher("/jsp/page.jsp")
                        .forward(request,response);
                break;
            case "/test1":
                request.getRequestDispatcher("/status")
                        .forward(request, response);
                return;
            case "/test2":
                response.sendRedirect(request.getContextPath()  + "/page");
                return;
            default:
                response.getOutputStream().println("Java Web Application");
                break;
        }
    }
}
